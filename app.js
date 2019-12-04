//palabra empezar score
const palabra = document.getElementById('palabra');
const score = document.getElementById('acertadas');
const empezar = document.getElementById('empezar');
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


//palabras para usar
const palabrasArray =['COMIDA', 'ESTUDIO', 'CABECERA', 'PIGMENTACION'];

function elegirPalabra(pos){
    return palabrasArray[pos];
}
function respuesta(valor){
    mirespuesta = valor;
}
function mostrarPalabra(mipalabra){
   palabra.innerHTML= mipalabra;

}

function game(letras){
   if(letras == palabrasArray[1].length){
       score.innerHTML = 'acertaste';
       main();
   }
   else {
       main()
   }
   
}
function voz(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto))}
function main(){
    let x = elegirPalabra(2);
    voz(x);
    mostrarPalabra(x);
    
    setTimeout(function borrarPalabra(){palabra.innerHTML= 'XXXXXX'}, 1500);
    tres.addEventListener('click', function () {game(3)});
    cuatro.addEventListener('click', function () {game(4)});
    cinco.addEventListener('click', function () {game(5)});
    seis.addEventListener('click', function () {game(6)});
    siete.addEventListener('click', function () {game(7)});
    ocho.addEventListener('click', function () {game(8)});
    nueve.addEventListener('click', function () {game(9)});
    diez.addEventListener('click', function () {game(10)});
    once.addEventListener('click', function () {game(11)});
    doce.addEventListener('click', function () {game(12)});   
}
function jugar(){
    main();    
    empezar.style.opacity=0;
    empezar.style.zIndex=-1;
}