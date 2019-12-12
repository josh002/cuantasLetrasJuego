const palabra = document.getElementById('palabra');
const reinicio = document.getElementById('reinicio');
const resultado = document.getElementById('respuesta');
//estado de tiempo limite
var estado = false;
//clear time , fix de bug 
var paraTimeout;
//palabra a decir
var utterance  = new SpeechSynthesisUtterance();
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
const arrayPalabras = ['celebra', 'camion', 'cancion', 'helado', 'cantemos', 'cancion', 'parlante', 'computadora', 'teclado', 'celular', 'perro', 'montaña', 'celebración', 'heladera', 'castellano', 'pensamiento', 'estimulante', 'desconocido', 'vocabulario', 'ejemplo', 'diccionario', 'considerada', 'sentimientos', 'insoportable', 'poema', 'compasión', 'perdon' , 'incandescencia', 'nostalgia', 'descenlace', 'navidad', 'cultura', 'videos', 'tarde', 'Argentina', 'minuto', 'monto', 'ser', 'lechuga' , 'tomate'];

//palabra seleccionada
let miPalabra = '';

//reiniciar el juego
function reiniciarJuego() {
    user_score = 0;
    score.innerHTML = user_score;
    miPalabra = '';
    siguiente.innerHTML = 'Iniciar Juego';
    cambiaResultado();
}

//elegir palabra random
function palabraRandom() {
    let numeroRandom = Math.floor(Math.random() * 40);
    miPalabra = arrayPalabras[numeroRandom];
    utterance.text = miPalabra;
    speechSynthesis.speak(utterance);
    cambiarPalabra();
    cambiaResultado();
}
//cambiar palabra y resultado
function cambiarPalabra() {
    palabra.innerHTML = miPalabra;
    setTimeout(function () {
        palabra.innerHTML = '__ __ __ __';
    }, 1500);
}
function cambiaResultado() {
    resultado.innerHTML = '--';
}
//seleccionar boton
function correcto(numeroSeleccionado) {
    estado = true;
    if (miPalabra.length === 0) {
    }
    else {
        if (numeroSeleccionado === miPalabra.length) {
            felicitacion();
            ganar();
        }
        else {
            respuestaCorrecta(miPalabra.length);
            perder();
        }
    }
}
//muestra respuesta correcta y mensaje de correcto
function respuestaCorrecta(respuesta) {
    resultado.innerHTML = respuesta;
}
function felicitacion() {
    resultado.innerHTML = '¡Correcta!'
}

//tiempo cumplido
function tiempo(){
    resultado.innerHTML = '¡Tiempo!';
}

//ganar
function ganar() {
    user_score++;
    score.innerHTML = user_score;
    miPalabra = '';
}

//perder
function perder() {
    user_score--;
    score.innerHTML = user_score;
    miPalabra = '';
}

//funcion principal
function main() {
    siguiente.addEventListener('click', function () {
        siguiente.innerHTML = 'Siguiente Palabra';
        palabraRandom();        
       paraTimeout = setTimeout(function () {
            if(estado){

            } else if (estado === false){
                perder();
                miPalabra = '';
                tiempo();
            }                
            },3000);
            estado = false;
    });
    tres.addEventListener('click', function () {clearTimeout(paraTimeout); correcto(3) });
    cuatro.addEventListener('click', function () {clearTimeout(paraTimeout); correcto(4) });
    cinco.addEventListener('click', function () {clearTimeout(paraTimeout); correcto(5) });
    seis.addEventListener('click', function () {clearTimeout(paraTimeout); correcto(6) });
    siete.addEventListener('click', function () {clearTimeout(paraTimeout); correcto(7) });
    ocho.addEventListener('click', function () {clearTimeout(paraTimeout); correcto(8) });
    nueve.addEventListener('click', function () {clearTimeout(paraTimeout); correcto(9) });
    diez.addEventListener('click', function () {clearTimeout(paraTimeout); correcto(10) });
    once.addEventListener('click', function () {clearTimeout(paraTimeout); correcto(11) });
    doce.addEventListener('click', function () {clearTimeout(paraTimeout); correcto(12) });
    trece.addEventListener('click', function () {clearTimeout(paraTimeout); correcto(13) });
    catorce.addEventListener('click', function () {clearTimeout(paraTimeout); correcto(14) });
    reinicio.addEventListener('click', function () {clearTimeout(paraTimeout); reiniciarJuego() });
}
main();