// script.js

// Al cargar la página, muestra la sección "home" por defecto
window.onload = function () {
    mostrarSeccion('home');
};

function mostrarSeccion(seccion) {
    // Oculta todas las secciones
    var secciones = document.querySelectorAll('.seccion');
    secciones.forEach(function (item) {
        item.style.display = 'none';
    });

    // Muestra la sección correspondiente
    var seccionMostrada = document.querySelector('.' + seccion);
    if (seccionMostrada) {
        seccionMostrada.style.display = 'block';
    }

    // Resalta la opción activa en la barra de navegación
    var opciones = document.querySelectorAll('.barra-navegacion li a');
    opciones.forEach(function (opcion) {
        opcion.classList.remove('active');
    });

    var opcionActiva = document.querySelector('.barra-navegacion li a[href="#"][onclick="mostrarSeccion(\'' + seccion + '\')"]');
    if (opcionActiva) {
        opcionActiva.classList.add('active');
    }
}
