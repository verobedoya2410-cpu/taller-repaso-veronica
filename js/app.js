
 // =======================================================
 // RETO 1: MODO OSCURO INTERACTIVO
 // =======================================================

// 1. SELECCIÓN DE ELEMENTOS DEL DOM

// Buscamos el botón que permite cambiar el tema de la página.
const btnTema = document.getElementById('btn-toggle-tema');

// Seleccionamos el body para cambiar el tema de toda la página.
const body = document.body;


// 2. MANEJO DE EVENTOS

// El evento click se ejecuta cuando el usuario presiona el botón.
btnTema.addEventListener('click', function() {

    // Agregamos o quitamos la clase tema-oscuro.
    body.classList.toggle('tema-oscuro');

    // Cambiamos el texto del botón según el tema seleccionado.
    if (body.classList.contains('tema-oscuro')) {
        btnTema.textContent = "☀️ Modo Claro";
    } else {
        btnTema.textContent = "🌙 Cambiar Tema";
    }
});


// =======================================================
// RETO 2: SALUDO DINÁMICO
// =======================================================

// 1. SELECCIÓN DEL CONTENEDOR

// Buscamos el párrafo donde aparecerá el saludo.
const textoSaludo = document.getElementById('saludo-tiempo-real');


// 2. OBTENCIÓN DE LA HORA ACTUAL

// Creamos un objeto Date para obtener la fecha y hora del dispositivo.
const fechaActual = new Date();

// Obtenemos la hora en formato de 24 horas.
const horaActual = fechaActual.getHours();

// Creamos una variable para guardar el mensaje.
let mensaje = "";


// 3. CONDICIONES PARA ELEGIR EL SALUDO

// Si la hora está entre las 6:00 y las 11:59.
if (horaActual >= 6 && horaActual < 12) {

    mensaje = "¡Buenos días! Espero que tengas una excelente mañana.";

// Si la hora está entre las 12:00 y las 17:59.
} else if (horaActual >= 12 && horaActual < 18) {

    mensaje = "¡Buenas tardes! Gracias por visitar mi perfil.";

// Para las horas restantes, mostramos el saludo nocturno.
} else {

    mensaje = "¡Buenas noches! Descubre mi trabajo.";
}


// 4. MOSTRAR EL SALUDO EN LA PÁGINA

// textContent permite cambiar el texto de un elemento HTML.
textoSaludo.textContent = mensaje;
