const btnEnviar = document.getElementById('btn-enviar');
const mensajeTextarea = document.getElementById('mensaje');
const nombreDeUsuario = document.getElementById('usuario');
const apellidoDeUsuario = document.getElementById('apellido');
const direcciónEmail = document.getElementById('email');
const error1 = document.querySelector('.error1');
const error2 = document.querySelector('.error2');
const error3 = document.querySelector('.error3');
const error4 = document.querySelector('.error4');
const error5 = document.querySelector('.error5');
const error6 = document.querySelector('.error6');
const colorError = "hsl(0, 66%, 54%)";
const colorDefault = "";  // Define el color por defecto de los bordes
const estadoExito = document.querySelector('.estado-exito')


const emailVálido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const resetErrors = () => {
    nombreDeUsuario.style.borderColor = colorDefault;
    apellidoDeUsuario.style.borderColor = colorDefault;
    direcciónEmail.style.borderColor = colorDefault;
    mensajeTextarea.style.borderColor = colorDefault;
    error1.style.display = "none";
    error2.style.display = "none";
    error3.style.display = "none";
    error4.style.display = "none";
    error5.style.display = "none";
    error6.style.display = "none";
}
const resetForm = () => {
    nombreDeUsuario.value = "";
    apellidoDeUsuario.value = "";
    direcciónEmail.value = "";
    mensajeTextarea.value = "";
    document.querySelectorAll('input[name="radio"]').forEach(radio => {
        radio.checked = false;
    });
    document.getElementById('consentimiento').checked = false;
    estadoExito.style.opacity = '0';
}

const validación = (e) => {
    e.preventDefault();
    let valid = true;
    resetErrors();

    if (nombreDeUsuario.value.trim() === "") {
        nombreDeUsuario.style.borderColor = colorError;
        error1.style.display = "inline-block";
        valid = false;
    }

    if (apellidoDeUsuario.value.trim() === "") {
        apellidoDeUsuario.style.borderColor = colorError;
        error2.style.display = "inline-block";
        valid = false;
    }

    if (direcciónEmail.value.trim() === "") {
        direcciónEmail.style.borderColor = colorError;
        error3.style.display = "inline-block";
        valid = false;
    } else if (!emailVálido(direcciónEmail.value)) {
        direcciónEmail.style.borderColor = colorError;
        error3.style.display = "inline-block";
        valid = false;
    }

    if (!document.querySelector('input[name="radio"]:checked')) {
        error4.style.display = "inline-block";
        valid = false;
    }

    if (!document.getElementById('consentimiento').checked) {
        error6.style.display = "inline-block";
        valid = false;
    }

    if (mensajeTextarea.value.trim() === "") {
        mensajeTextarea.style.borderColor = colorError;
        error5.style.display = "inline-block";
        valid = false;
    }

    if (valid) {
        estadoExito.style.opacity = '1';
        setTimeout(() => {
            resetForm();
        }, 2000);
    }
}



btnEnviar.addEventListener('click', validación);


[nombreDeUsuario, apellidoDeUsuario, direcciónEmail, mensajeTextarea].forEach(field => {
    field.addEventListener('input', resetErrors);
});
document.querySelectorAll('input[name="radio"], input[name="checkbox"]').forEach(field => {
    field.addEventListener('change', resetErrors);
});
