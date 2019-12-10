const palabra = document.getElementById('palabra');
const reinicio = document.getElementById('reinicio');

//botones
const tres = document.getElementById('tres');
const cuatro = document.getElementById('cuatro');
const cinco = document.getElementById('cinco');
const seis = document.getElementById('seis');
const siete = document.getElementById('siete');
const ocho = document.getElementById('ocho');
const nueve = document.getElementById('nueve');
const diez = document.getElementById('diez');
const once = document.getElementById('once');
const doce = document.getElementById('doce');
const trece = document.getElementById('trece');
const catorce = document.getElementById('catorce');
//fin botones
//siguiente palabra
const siguiente = document.getElementById('siguientePalabra');
//score
const score = document.getElementById('resultado');
let user_score = 0;
//Arrray palabras
const arrayPalabras = ['celebra', 'camion', 'cancion', 'helado', 'cantemos', 'cancion', 'parlante', 'computadora', 'teclado', 'celular'];

//palabra seleccionada
let miPalabra = '';
//reiniciar el juego
function reiniciarJuego() {
    user_score = 0;
    score.innerHTML = user_score;
    miPalabra = '';
}
//elegir palabra random
function palabraRandom() {
    let numeroRandom = Math.floor(Math.random() * 10);
    miPalabra = arrayPalabras[numeroRandom];
    cambiarPalabra();
}
//cambiar palabra
function cambiarPalabra() {
    palabra.innerHTML = miPalabra;
    setTimeout(function () {
        palabra.innerHTML = '__ __ __ __';
    }, 1500);
}
//seleccionar boton
function correcto(numeroSeleccionado) {
    if (miPalabra.length === 0) {
    }
    else {
        if (numeroSeleccionado === miPalabra.length) {
            ganar();
        }
        else {
            perder();
        }
    }

}
//ganar
function ganar() {
    user_score++;
    score.innerHTML = user_score;
}
//perder
function perder() {
    user_score--;
    score.innerHTML = user_score;
}

//funcion principal
function main() {
    siguiente.addEventListener('click', function () { palabraRandom() });
    tres.addEventListener('click', function () { correcto(3) });
    cuatro.addEventListener('click', function () { correcto(4) });
    cinco.addEventListener('click', function () { correcto(5) });
    seis.addEventListener('click', function () { correcto(6) });
    siete.addEventListener('click', function () { correcto(7) });
    ocho.addEventListener('click', function () { correcto(8) });
    nueve.addEventListener('click', function () { correcto(9) });
    diez.addEventListener('click', function () { correcto(10) });
    once.addEventListener('click', function () { correcto(11) });
    doce.addEventListener('click', function () { correcto(12) });
    trece.addEventListener('click', function () { correcto(13) });
    catorce.addEventListener('click', function () { correcto(14) });
    reinicio.addEventListener('click', function () { reiniciarJuego() });
}

main();