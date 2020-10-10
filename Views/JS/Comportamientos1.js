
/*Popup comportamientos*/



var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function () {
    overlay.classList.add('active');
    popup.classList.add('active');
    $('html, body').css({ 'overflow': 'hidden', 'height': '100%' })
})

btnCerrarPopup.addEventListener('click', function () {
    overlay.classList.remove('active');
    popup.classList.remove('active');
    $('html, body').css({ 'overflow': 'auto', 'height': 'auto' })
})


/*Inicio de Sesión*/

function iniciar() {
    var Usuario, Contraseña;
    Usuario = document.getElementById("Text1").value
    Contraseña = document.getElementById("Password1").value

    if (Usuario == 'Admin' && Contraseña == 'Admin') {
        Swal.fire({ 
            title: "Bienvenido Administrador", // Alert animado Bienvenida
            text: "Será redirigido a la página principal" ,
           // icon: 'success',
            timer: 3000,
            timerProgressBar: true, 
            showConfirmButton: false,
            position: 'top-end',
            imageUrl: 'Candado.png',
            imageWidth:'55px',
            imageHeight: '55px',
        })

        .then(resultado=>{      //Esperando para dar Ok y redirigir a Página

            window.location.assign(window = 'Menu_Administrador.html');
        });
    }

    else if (Usuario == 'Residente' && Contraseña == 'Residente') {
        Swal.fire({ 
            title: "Bienvenido Residente", // Alert animado Bienvenida
            text: "Será redirigido a la página principal" ,
           // icon: 'success',
            timer: 3000,
            timerProgressBar: true, 
            showConfirmButton: false,
            position: 'top-end',
            imageUrl: 'Candado.png',
            imageWidth:'55px',
            imageHeight: '55px',
        })

        .then(resultado=>{      //Esperando para dar Ok y redirigir a Página

            window.location.assign(window = 'Menu_Residente.html');
        });
    }

    else if (Usuario == 'Vigilante' && Contraseña == 'Vigilante') {
        Swal.fire({ 
            title: "Bienvenido Vigilante", // Alert animado Bienvenida
            text: "Será redirigido a la página principal" ,
           // icon: 'success',
            timer: 3000,
            timerProgressBar: true, 
            showConfirmButton: false,
            position: 'top-end',
            imageUrl: 'Candado.png',
            imageWidth:'55px',
            imageHeight: '55px',
        })

        .then(resultado=>{      //Esperando para dar Ok y redirigir a Página

            window.location.assign(window = 'Menu_Vigilante.html');
        });
    }


    
    
    else if (Usuario == '') {

        Swal.fire({ 
            title: "Hay campos vacios", // Alert animado Bienvenida
            text: "Verifíque e intentelo de nuevo" ,
            icon: 'warning',
            timer: 3000,
            timerProgressBar: true, 
            showConfirmButton: false,
            position: 'top-end',
        })

        .then(resultado=>{      //Esperando para dar Ok y redirigir a Página

            window.location.assign(window = 'Index.html');
        });
    }

    else if (Contraseña == '') {

        Swal.fire({ 
            title: "Hay campos vacios", // Alert animado Bienvenida
            text: "Verifíque e intentelo de nuevo" ,
            icon: 'warning',
            timer: 3000,
            timerProgressBar: true, 
            showConfirmButton: false,
            position: 'top-end',
        })

        .then(resultado=>{      //Esperando para dar Ok y redirigir a Página

            window.location.assign(window = 'Index.html');
        });
    }


    

    else {
        Swal.fire({ 
            title: "Usuario y/o contraseña incorrectos", // Alert animado Bienvenida
            text: "Verifíque e intentelo de nuevo" ,
            icon: 'error',
            timer: 3000,
            timerProgressBar: true, 
            showConfirmButton: false,
            position: 'top-end',
        })

        .then(resultado=>{      //Esperando para dar Ok y redirigir a Página

            window.location.assign(window = 'Index.html');
        });
    }

}