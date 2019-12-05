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
const palabrasArray =['comida', 'estudio', 'cabecera', 'celular', 'dinosaurio', 'herramienta','pectoral','premiación','semántica','algoritmo'];

function elegirPalabra(pos){
    return palabrasArray[pos];
}
function respuesta(valor){
    mirespuesta = valor;
}
function mostrarPalabra(mipalabra){
    let mayus = mipalabra.toUpperCase();
   palabra.innerHTML= mayus;

}

function game(letras,cantidad){
   if(letras === cantidad){
       
       score.innerHTML = 'acertaste';
       main();
       
   }
   else {
    score.innerHTML = 'fallaste';
   
   }
   
}
function voz(texto){
    speechSynthesis.speak(new SpeechSynthesisUtterance(texto))
}

function main(){
    let x = elegirPalabra(Math.floor(Math.random()*10));
    cantidad = x.length;
    voz(x);
    mostrarPalabra(x);    
    setTimeout(function borrarPalabra(){palabra.innerHTML= 'XXXXXX'}, 1500);
    tres.addEventListener('click', function ()   {game(3, cantidad)});
    cuatro.addEventListener('click', function () {game(4, cantidad)});
    cinco.addEventListener('click', function ()  {game(5, cantidad)});
    seis.addEventListener('click', function ()   {game(6, cantidad)});
    siete.addEventListener('click', function ()  {game(7, cantidad)});
    ocho.addEventListener('click', function ()   {game(8, cantidad)});
    nueve.addEventListener('click', function ()  {game(9, cantidad)});
    diez.addEventListener('click', function ()   {game(10, cantidad)});
    once.addEventListener('click', function ()   {game(11, cantidad)});
    doce.addEventListener('click', function ()   {game(12, cantidad)});    
}
function jugar(){
    main();    
    empezar.style.opacity=0;
    empezar.style.zIndex=-1;
}