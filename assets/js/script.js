let imagen = document.getElementById('pollito-base');
let botonSi = document.getElementById('boton-si');
let botonNo = document.getElementById('boton-no');
let noHayOpcion = document.getElementById('no-hay-opcion')
let textoPollito = document.getElementById('texto-pollito');

// Función para cambiar la imagen
function cambiarImagen() {
    imagen.src = 'assets/img/pollito_estrellado.png';
}

// Función para cambiar el texto con animación de opacidad
function cambiarTexto(texto) {
    if (texto.style.display == 'none'){
        // Establece la opacidad inicial
        texto.style.opacity = '0';

        // Muestra el texto
        texto.style.display = 'block';

        // Realiza la animación de opacidad
        let opacidad = 0;
        let intervalo = setInterval(function() {
            if (opacidad < 1) {
                opacidad += 0.1; // Incrementa la opacidad gradualmente
                texto.style.opacity = opacidad; // Actualiza la opacidad del texto
            } else {
                clearInterval(intervalo); // Detiene la animación cuando la opacidad alcanza 1
            }
        }, 10); // Cambia la opacidad cada 100 milisegundos
    }
}

noHayOpcion.style.display = 'none';
// Event listener para el no
botonNo.addEventListener('click', function() {
    cambiarTexto(noHayOpcion);
});

// Oculta el texto inicialmente
textoPollito.style.display = 'none';

// Event listener para el botón si
botonSi.addEventListener('click', function() {
    cambiarImagen();
    cambiarTexto(textoPollito);
});

