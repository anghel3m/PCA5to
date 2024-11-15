function mostrarAlerta() {
    alert('¡Hola desde JavaScript!');
}

function cambiarMensaje1() {
    const elemento = document.getElementById("parrafo1");
    elemento.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
}


function cambiarMensaje(idElemento, nuevoTexto) {
     const elemento = document.getElementById(idElemento); 
     if (elemento) { elemento.innerText = nuevoTexto; } }
     

function cambiarColor() { 
const elemento = document.getElementById("card"); 
elemento.style.backgroundColor = "yellow"; }