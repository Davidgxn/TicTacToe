const tablero = document.getElementById("tablero");
const reset = document.getElementById("reset");
const casilla = document.getElementsByClassName("casilla");
const turno = document.getElementById("turno");
let llamadas = 1;
const posiblesFinales = [[1, 2, 3], [1, 4, 7], [1, 5, 9], [2, 5, 8], [3, 5, 7], [3, 6, 9], [4, 5, 6], [7, 8, 9]];
let finDelJuego = false;

reset.addEventListener("click", reiniciarTablero);

function reiniciarTablero() {
    for (let i = 0; i<tablero.children.length; i++){
        tablero.children[i].children[0].innerHTML = "";
        llamadas = 1;
        finDelJuego = false;
        turno.innerText = "Le toca al jugador X";
    }
}

tablero.addEventListener("click", function(event) {
    let casilla = event.target;
    if (!finDelJuego && !casillaOcupada(casilla)) {
        if (llamadas % 2 == 0) {
            casilla.children[0].innerHTML = "O";
            llamadas++;
            actualizarTurno();
            comprobarFinal(casilla);
        } else {
            casilla.children[0].innerHTML = "X";
            llamadas++;
            actualizarTurno();
            comprobarFinal(casilla);
        }
    }
});

function actualizarTurno() {
    if (llamadas % 2 == 0) {
        turno.innerText = "Le toca al jugador O";
    } else {
        turno.innerText = "Le toca al jugador X";
    }
}

function comprobarFinal(casilla) {
    for (let i = 0; i<posiblesFinales.length; i++) {
        for (let j = 0; j<posiblesFinales[i].length; j++) {
            if (posiblesFinales[i][j] == casilla.id) {
                comprobarPosiciones(posiblesFinales[i], casilla);
            }
        }
    }
}

function comprobarPosiciones(finales, casilla) {
    if (tablero.children[finales[0]-1].children[0].innerHTML == casilla.children[0].innerHTML && tablero.children[finales[1]-1].children[0].innerHTML == casilla.children[0].innerHTML && tablero.children[finales[2]-1].children[0].innerHTML == casilla.children[0].innerHTML) {
        turno.innerText = "Ha ganado el jugador "+casilla.children[0].innerHTML;
        finDelJuego = true;
    }
}

function casillaOcupada(casilla) {
    if (casilla.innerHTML == "X" ||casilla.innerHTML == "O") {
        return true;
    } else {
        return false;
    }
}