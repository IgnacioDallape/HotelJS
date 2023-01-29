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
divGeneral = document.getElementById('divGeneral'),
enviarReserva = document.getElementById('enviarReserva'),
nombreReserva = document.getElementById('nombreReserva'),
apellidoReserva = document.getElementById('apellidoReserva'),
mailReserva = document.getElementById('mailReserva'),
terminos = document.getElementById('terminos'),
inner1 = document.getElementById('inner1'),
nochesReserva = document.getElementById('nochesReserva'),
habitaciones = document.getElementById('habitaciones');

let inner = document.getElementById('inner'),
btnRecordar = document.getElementById('btn__habitaciones__recordar'),
basicastg, premiumstg, presidencialstg,nuevoDiv,
usuarioPorLoguear, encontradoContraseña, encontradoMail, registroUsuario, nombreIndex, suiteElegida, ingresoBooleano, nochesReservadas;

//   USUARIOS PARA LOGIN

const usuarios = [{
    user: 'Ignacio',
    password: 'dallape',
    mail: 'nachodallape@mail.com'
},
{
    user: 'Rodrigo',
    password: 'molina',
    mail: 'rodrigomolina@mail.com'
},
{
    user: 'Ariel',
    password: 'feque',
    mail: 'arielfeque@mail.com'
}
]




// FUNCIONES

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
                ingresoBooleano = true
                return true
            } else { 
                Swal.fire({
                    title: 'Datos incorrectos.',
                    text: 'Intentalo de nuevo',
                    icon: 'error',
                    confirmButtonText: 'Volver'
                })
                ingresoBooleano = false
                return false
            }
        } else {
            Swal.fire({
                title: 'Datos incorrectos.',
                text: 'Intentalo de nuevo',
                icon: 'error',
                confirmButtonText: 'Volver'
            })
            ingresoBooleano = false
            return false
        }
    } else {
        Swal.fire({
            title: 'Datos incorrectos.',
            text: 'Intentalo de nuevo',
            icon: 'error',
            confirmButtonText: 'Volver'
        })
        ingresoBooleano = false
        return false
        
    }
    

}

function encontrarNombreUsuario(usuario){
    nombreIndex = usuario.find((usuario) => usuario.mail === emailUsuario.value)
    return nombreIndex
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
    return suiteElegida
}

function guardarDatosReserva(nombre,apellido,mail, noches){
    datosReservaNombre = localStorage.setItem('nombre',nombre)
    datosReservaApellido = localStorage.setItem('apellido',apellido)
    datosReservaMail = localStorage.setItem('mail',mail)
    datosReservaNoches = localStorage.setItem('noches',noches)
    datosReservaNombre = localStorage.getItem(nombre)
    datosReservaApellido = localStorage.getItem(apellido)
    datosReservaMail = localStorage.getItem(mail)
    datosReservaNoches = localStorage.getItem(noches)
    nombreGuardado = datosReservaNombre
    apellidoGuardado = datosReservaApellido
    mailGuardado = datosReservaMail
    nochesReservadas = datosReservaNoches
    return (nombreGuardado, apellidoGuardado, mailGuardado, nochesReservadas)
}

// EVENTOS

ingresar.addEventListener('click',() =>{
    
    arrayIngresado(emailUsuario,contraseñaUsuario)
    corroborarDatosMail(usuarios, emailUsuario,contraseñaUsuario)
    if(ingresoBooleano != false){
        
        if((encontradoMail.mail == emailUsuario.value)&&(encontradoContraseña.password == contraseñaUsuario.value)){
            if(recordarme.checked){
                almacenarDatos(usuarioPorLoguear,localStorage)
            } else {
                almacenarDatos(usuarioPorLoguear,sessionStorage)
            }
            // encontrarContraseñaUsuario(usuarios)
            encontrarNombreUsuario(usuarios)
            inner1.textContent = 'Bienvenido ' + nombreIndex.user + " !"
        modal.hide();
        presentarInfo(toggles, 'd-none')
        

    } else {
        alert('usuario/contraseña incorrecto/a')
    }
    }
})

btnBasica.addEventListener('click', () => {
        guardarSuite(basica)
    
    

}
)

btnPremium.addEventListener('click', () => {
    guardarSuite(premium)
}
)

btnPresidencial.addEventListener('click', () => {
    guardarSuite(presidencial)

}
)

btnRecordar.addEventListener('click', () => {
    if(localStorage.getItem('habitacion') != null && localStorage.getItem('nombre') != null && localStorage.getItem('apellido') != null && localStorage.getItem('mail') != null){
        inner.textContent = 'Hola '+ localStorage.getItem('nombre') + " " + localStorage.getItem('apellido') + '! Reservaste la ' + localStorage.getItem('habitacion') + ' por una cantidad de '+ localStorage.getItem('noches') + ' noches, te llegará la confirmacion de reserva a tu mail: ' + localStorage.getItem('mail')
    } else {
        inner.textContent = 'No has reservado ninguna habitación por el momento'
    }
})

btnLogout.addEventListener('click', () => {
    Toastify({
        text: "Vuelva pronto!",
        duration: 3000,
        destination: "",
        newWindow: true,
        close: true,
        gravity: "bottom", 
        position: "right", 
        stopOnFocus: true, 
        style: {
        background: "linear-gradient(to right, rgb(150, 150, 68), rgb(105, 120, 46))",
        },
        onClick: function(){}
    }).showToast();    
    inner.textContent = ""
    eliminarDatos()
    presentarInfo(toggles, 'd-none')
})

//ENVIO DE RESERVA

let memoriaReserva

enviarReserva.addEventListener('click', () => {
    
    if(nombreReserva.value != "" && apellidoReserva.value != "" && mailReserva.value != "" && terminos.checked && nochesReserva.value != ""){                
        Toastify({
            text: "Reserva Confirmada!!",
            duration: 3000,
            destination: "",
            newWindow: true,
            close: true,
            gravity: "top", 
            position: "right", 
            stopOnFocus: true, 
            style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){}
        }).showToast();
        
        memoriaReserva = true
        guardarDatosReserva(nombreReserva.value, apellidoReserva.value, mailReserva.value, nochesReserva.value)
        }else if(!terminos.checked){
            Swal.fire({
                title: 'Es necesario aceptar los terminos y condiciones para reservar!',
                text: 'Volve a realizar el procedimiento, por favor',
                icon: 'error',
                confirmButtonText: 'Volver'
            })
            memoriaReserva = false
        } else {
            Swal.fire({
                title: 'Completa todos los campos para reservar!',
                text: 'Volve a realizar el procedimiento, por favor',
                icon: 'error',
                confirmButtonText: 'Volver'
            })
            memoriaReserva = false
        }
        }
                )

// PROMESAS Y DATA.JSON PARA BASE DE DATOS DEL PRODUCTO

fetch("/data.json")
.then((resp) => resp.json())
.then((data) => {
    data.forEach((producto) =>{
        const li = document.createElement('li')
        li.innerHTML = `
        <h4> ${producto.nombre}   </h4>
        <h5> $ ${producto.precio}   </h5>
        <h6>  ${producto.description}   </h6>
        ` ;
        habitaciones.append(li)
    })
})

//AÑADIENDO CLASE A LA LI

habitaciones.add.classList('habitaciones__descripcion')