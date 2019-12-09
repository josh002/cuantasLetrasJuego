const palabra = document.getElementById('palabra');
const inicio = document.getElementById('inicio');

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

//score
const score = document.getElementById('resultado');
var puntos = 0;

//Arrray palabras
const arrayPalabras = ['celebra', 'camion', 'cancion', 'helado', 'cantemos', 'cancion', 'parlante', 'computadora', 'teclado', 'celular'];

//IIFE para iniciar juego
(function jugar() {
    inicio.addEventListener('click', function () { main() })
})();

//elegir palabra random
function palabraRandom() {
    let numeroRandom = Math.floor(Math.random() * 10);
    return arrayPalabras[numeroRandom];
}
//cambiar palabra
function cambiarPalabra(palabraSeleccionada) {
    palabra.innerHTML = palabraSeleccionada;
    setTimeout(function () {
        palabra.innerHTML = '__ __ __ __';
    }, 1500);
}
//seleccionar boton
function correcto(numeroSeleccionado, palabraSeleccionada) {
    if (numeroSeleccionado === palabraSeleccionada.length) {
        ganar();
    }
    else {
        perder();
    }
}
//ganar
function ganar() {
    puntos++;
    score.innerHTML = puntos;
}
//perder
function perder() {
    puntos--;
    score.innerHTML = puntos;
}
//funcion principal
function main() {
    palabraSeleccionada = palabraRandom();
    cambiarPalabra(palabraSeleccionada);
    tres.addEventListener('click', function () { correcto(3, palabraSeleccionada) });
    cuatro.addEventListener('click', function () { correcto(4, palabraSeleccionada) });
    cinco.addEventListener('click', function () { correcto(5, palabraSeleccionada) });
    seis.addEventListener('click', function () { correcto(6, palabraSeleccionada) });
    siete.addEventListener('click', function () { correcto(7, palabraSeleccionada) });
    ocho.addEventListener('click', function () { correcto(8, palabraSeleccionada) });
    nueve.addEventListener('click', function () { correcto(9, palabraSeleccionada) });
    diez.addEventListener('click', function () { correcto(10, palabraSeleccionada) });
    once.addEventListener('click', function () { correcto(11, palabraSeleccionada) });
    doce.addEventListener('click', function () { correcto(12, palabraSeleccionada) });
    trece.addEventListener('click', function () { correcto(13, palabraSeleccionada) });
    catorce.addEventListener('click', function () { correcto(14, palabraSeleccionada) });
}
