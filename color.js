const botonC = document.getElementById("boton");
const tituloC = document.getElementById("titulo");
const turnoC = document.getElementById("turno");
const tableroC = document.getElementById("tablero");
const resetC = document.getElementById("reset");
const bodyC = document.getElementById("body");
const imagenC = document.getElementById("imagen");
let contador = 1;

botonC.addEventListener("click", cambiarModo);

function cambiarModo() {
    if (imagenC.src == "http://127.0.0.7:5500/moon.svg") {
        imagenC.src = "sun.svg";
    } else {
        imagenC.src = "moon.svg";
    }
    if (bodyC.className == "body-noche") {
        bodyC.className = "body-dia";
    } else {
        bodyC.className = "body-noche";
    }
    if (tituloC.className == "titulo-noche") {
        tituloC.className = "titulo-dia";
    } else {
        tituloC.className = "titulo-noche";
    } if (turnoC.className == "texto-noche") {
        turnoC.className = "texto-dia";
    } else {
        turnoC.className = "texto-noche";
    } if (resetC.className == "boton-noche") {
        resetC.className = "boton-dia";
    } else {
        resetC.className = "boton-noche"
    }
    for (let i = 0; i<tableroC.children.length; i++) {
        if (tableroC.children[i].className == "casilla-noche")  {
            tableroC.children[i].className = "casilla-dia";
        } else {
            tableroC.children[i].className = "casilla-noche";
        }
        if (tableroC.children[i].children[0].className == "content-noche") {
            tableroC.children[i].children[0].className = "content-dia";
        } else {
            tableroC.children[i].children[0].className = "content-noche";
        }
    }
}