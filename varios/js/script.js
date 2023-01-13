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
nombreDeIngreso = document.getElementById('nombreDeIngreso')

let  usuarioPorLoguear, encontradoContraseña, encontradoMail, registroUsuario, nombreIndex


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

// nombreDeIngreso.innerHTML = `Hola <div> ${nombreIndex} </div> `

const basica = 'suite basica' ,
premium = 'suite premium',
presidencial = 'suite presidencial'
let basicastg, premiumstg, presidencialstg,nuevoDiv

const btnBasica = document.getElementById('btn__habitaciones__basica'),
btnPremium = document.getElementById('btn__habitaciones__premium'), 
btnPresidencial = document.getElementById('btn__habitaciones__presidencial')
let inner = document.getElementById('inner')


btnBasica.addEventListener('click', () => {
    inner.textContent = 'RESERVASTE LA SUITE BASICA, TE ESPERAMOS MAÑANA A LAS 8 AM!'

}
)

btnPremium.addEventListener('click', () => {
    inner.textContent = 'RESERVASTE LA SUITE PREMIUM, TE ESPERAMOS MAÑANA A LAS 8 AM!'

}
)
btnPresidencial.addEventListener('click', () => {
    inner.textContent = 'RESERVASTE LA SUITE PRESIDENCIAL, TE ESPERAMOS MAÑANA A LAS 8 AM!'

}
)
