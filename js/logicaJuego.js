/*Variables*/
var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
var palabras = ["CASA", "PERRO", "TELA", "TELE","MOSCA","CABLE","BONDI"];
var palabraSecreta = "";
var palabraNueva = "";
var letrasCorrectas = "";
var letrasIngresadas = [];
var posicion = 1;
var intentos = 7;

/*Listeners*/
var botonIniciarJuego = document.querySelector("#button_inicio");
botonIniciarJuego.addEventListener("click", function(){
    let inicio = document.querySelector(".content_menuP").style.display="none";
    let juego = document.querySelector("#ahorcado").style.display="inline-block";
    juegoNuevo();
});

var botonAgregarNuevaPalabra = document.querySelector("#button_agregarPalabra");
botonAgregarNuevaPalabra.addEventListener("click", function(){
    let inicio = document.querySelector(".content_menuP").style.display="none";
    let agregarPalabra = document.querySelector("#agregar_palabra").style.display="inline-block";
});

var botonCancelarNuevaPalabra = document.querySelector("#button_cancelarPalabra");
botonCancelarNuevaPalabra.addEventListener("click", function(){
    let agregarPalabra = document.querySelector("#agregar_palabra").style.display="none";
    let inicio = document.querySelector(".content_menuP").style.display="inline-block";
});

var botonDesistir = document.querySelector("#button_desistir");
botonDesistir.addEventListener("click", function(){
    let juego = document.querySelector("#ahorcado").style.display="none";
    let inicio = document.querySelector(".content_menuP").style.display="inline-block";
    borrarCanvas();
});

var botonGuardarYEmpezar = document.querySelector("#button_guardarYEmpezar");
botonGuardarYEmpezar.addEventListener("click", function(){
    palabraNueva = document.querySelector("#ingresa_palabraNueva").value;
    agregarPalabraNuevaAlArray(palabraNueva.toUpperCase());
    let agregarPalabra = document.querySelector("#agregar_palabra").style.display="none";
    let juego = document.querySelector("#ahorcado").style.display="inline-block";
    juegoNuevo();
});

var botonNuevoJuego = document.querySelector("#button_nuevoJuego");
botonNuevoJuego.addEventListener("click", function(){
    borrarCanvas();
    juegoNuevo();
});

var botonComprobarLetra = document.querySelector("#button_comprobarLetra");
botonComprobarLetra.addEventListener("click", function(){
    let letra = obtenerLetraIngresada();
    validarLetraIngresada(letra);
});

/*Funciones del Juego*/
function juegoNuevo(){
    reiniciarIntentos();
    reiniciarPosicion();
    reiniciarLetrasCorrectas();
    vaciarArrayLetrasIngresadas();
    dibujarHorca();
    escojerPalabraSecreta();
    dibujarLineas();
    mostrarIntentos(intentos);
    let input = document.querySelector("#ingresa_letra").style.display="inline-block";
    let botonComprobarLetra = document.querySelector("#button_comprobarLetra").style.display="inline-block";
}

function reiniciarIntentos(){
    intentos = 7;
}

function reiniciarPosicion(){
    posicion = 1;
}

function reiniciarLetrasCorrectas(){
    letrasCorrectas = "";
}

function vaciarArrayLetrasIngresadas(){
    letrasIngresadas.length = 0;
}

function agregarPalabraNuevaAlArray(palabraNueva){
    palabras.push(palabraNueva);
    alert("Palabra ingresada correctamente.")
}

function escojerPalabraSecreta() {
    palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)]
}

function obtenerLetraIngresada(){
    let letra = document.querySelector("#ingresa_letra").value;
    return letra.toUpperCase();
}

function agregarLetraIngresadaAlArray(letra){
    letrasIngresadas.push(letra);
}

function validarLetraIngresada(letra){
    if (letrasIngresadas.includes(letra)){
        alert("Letra ya ingresada, intente nuevamente.");
        document.querySelector("#ingresa_letra").value="";
    } else {
        verificarLetraCorrectaOIncorrecta(letra);
        agregarLetraIngresadaAlArray(letra);
    }
}

function verificarLetraCorrectaOIncorrecta(letra){

    for (i=0;i<palabraSecreta.length;i++){
        if(palabraSecreta[i] == letra){
            escribirLetraCorrecta(i);
            agregarLetraCorrectaAlArray(letra);
            verificarGanador();
        } else if (!palabraSecreta.includes(letra)){
            escribirLetraIncorrecta(letra, posicion);
            dibujarParteDelCuerpo(posicion);
            descontarIntento(intentos);
            posicion++;
            intentos--;
            break;
        }
    }
    document.querySelector("#ingresa_letra").value="";
}

function agregarLetraCorrectaAlArray(letra){
    letrasCorrectas = letrasCorrectas.concat(letra);
}

function verificarGanador(){
    if (letrasCorrectas.length == palabraSecreta.length){
        var input = document.querySelector("#ingresa_letra").style.display="none";
        var botonComprobarLetra = document.querySelector("#button_comprobarLetra").style.display="none";
        escribirMensajeGanador();
    }
}

function mostrarIntentos(intentos){
    let intento = document.querySelector(".num_intentos");
    intento.textContent = intentos;
}

function descontarIntento(intentos){
    let intento = document.querySelector(".num_intentos");
    intento.textContent = intentos-1;
    if (intentos == 1){
        var input = document.querySelector("#ingresa_letra").style.display="none";
        var botonComprobarLetra = document.querySelector("#button_comprobarLetra").style.display="none";
        escribirMensajeFinDelJuego();
    }
}