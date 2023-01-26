const usuarios = [{
    user: 'nacho',
    password: 'dallape',
    mail: 'nachodallape@mail.com'
},
{
    user: 'rodrigo',
    password: 'molina',
    mail: 'rodrigomolina@mail.com'
},
{
    user: 'ariel',
    password: 'feque',
    mail: 'arielfeque@mail.com'
}
]

const login = document.getElementById('btnModalLogin'),
emailUsuario = document.getElementById('emailLogin'),
contraseñaUsuario = document.getElementById('passwordLogin'),
recordarme = document.getElementById('recordarme'),
ingresar = document.getElementById('login')
modalEl = document.getElementById('modalLogin'),
modal = new bootstrap.Modal(modalEl),
toggles = document.querySelectorAll('.toggles');
nombreDeIngreso = document.getElementById('nombreDeIngreso'),
basica = 'suite basica' ,
premium = 'suite premium',
presidencial = 'suite presidencial',
btnBasica = document.getElementById('btn__habitaciones__basica'),
btnPremium = document.getElementById('btn__habitaciones__premium'), 
btnPresidencial = document.getElementById('btn__habitaciones__presidencial'),
btnLogout = document.getElementById('btnLogout'),
divGeneral = document.getElementById('divGeneral');

let inner = document.getElementById('inner'),
btnRecordar = document.getElementById('btn__habitaciones__recordar'),
basicastg, premiumstg, presidencialstg,nuevoDiv,
usuarioPorLoguear, encontradoContraseña, encontradoMail, registroUsuario, nombreIndex, suiteElegida


function arrayIngresado(user,mail){  //tomo los datos ingresados por el usuario 
    usuarioPorLoguear = [
        user = emailUsuario.value,
        password = contraseñaUsuario.value,
    ]
    return usuarioPorLoguear
}




function corroborarDatosMail(usuario, usuarioPorLoguear,contraseña){  //corroboro que este ingresando el usuario y la contraseña correcta

    encontradoMail = usuarios.find((usuario) => usuario.mail === emailUsuario.value)
    encontradoContraseña = usuarios.find((usuario) => usuario.password === contraseñaUsuario.value)
    if(encontradoContraseña === encontradoMail){
        if(encontradoMail != undefined){
            if(encontradoContraseña != undefined){
                return true
            } else { 
                alert('Contraseña incorrecta')
                return false
            }
        } else {
            alert('E-mail incorrecto')
            return false
        }
    } else {
        alert('usuario/contraseña incorrecto/a')
        return false
    }
    

}


function almacenarDatos(usuario, storage){
    registroUsuario = storage.setItem('user', usuario);
    registroUsuario = JSON.stringify(registroUsuario)
    registroUsuario = storage.getItem('user', usuario)

    return registroUsuario
}

function presentarInfo(array, clase) {
    array.forEach(element => {
        element.classList.toggle(clase);
    });
}

function eliminarDatos(){
    localStorage.clear();
    sessionStorage.clear();
}
function eliminarDatosSession(){
    sessionStorage.clear();
}

function guardarSuite(suite){
    suiteElegida = localStorage.setItem('habitacion',suite)
    suiteElegida = localStorage.getItem(suite)
    suiteGuardada = suiteElegida
    console.log(suiteGuardada)
    return suiteElegida
}
eliminarDatos()
ingresar.addEventListener('click',() =>{
    
    arrayIngresado(emailUsuario,contraseñaUsuario)
    corroborarDatosMail(usuarios, emailUsuario,contraseñaUsuario)

    if(typeof corroborarDatosMail != false){
        
        if((encontradoMail.mail == emailUsuario.value)&&(encontradoContraseña.password == contraseñaUsuario.value)){
            if(recordarme.checked){
                almacenarDatos(usuarioPorLoguear,localStorage)
            } else {
                almacenarDatos(usuarioPorLoguear,sessionStorage)
            }
        modal.hide();
        presentarInfo(toggles, 'd-none')
        

    } else {
        alert('usuario/contraseña incorrecto/a')
    }
    }
})

btnBasica.addEventListener('click', () => {
    guardarSuite(basica)
    inner.textContent = 'RESERVASTE LA SUITE BASICA, TE ESPERAMOS MAÑANA A LAS 8 AM!'

}
)

btnPremium.addEventListener('click', () => {
    inner.textContent = 'RESERVASTE LA SUITE PREMIUM, TE ESPERAMOS MAÑANA A LAS 8 AM!'
    guardarSuite(premium)
}
)
btnPresidencial.addEventListener('click', () => {
    inner.textContent = 'RESERVASTE LA SUITE PRESIDENCIAL, TE ESPERAMOS MAÑANA A LAS 8 AM!'
    guardarSuite(presidencial)

}
)
btnRecordar.addEventListener('click', () => {
    inner.textContent = 'Reservaste la ' + localStorage.getItem('habitacion')
})

btnLogout.addEventListener('click', () => {
    inner.textContent = ""
    eliminarDatosSession()
    presentarInfo(toggles, 'd-none')
})



const enviarReserva = document.getElementById('enviarReserva'),
nombreReserva = document.getElementById('nombreReserva'),
apellidoReserva = document.getElementById('apellidoReserva'),
mailReserva = document.getElementById('mailReserva')

//ENVIO DE RESERVA

enviarReserva.addEventListener('click', () => {
    
    if(nombreReserva.value != "" && apellidoReserva.value != "" && mailReserva.value != "" ){                
        Toastify({
            text: "Reserva Confirmada!!",
            duration: 3000,
            destination: "",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
        }).showToast();
        
                    
        } else {
            Swal.fire({
                title: 'Completa todos los campos para reservar!',
                text: 'Volve a realizar el procedimiento, por favor',
                icon: 'error',
                confirmButtonText: 'Volver'
            })
            
        }
        }
                )
                
                
    