function borrarCanvas(){
    pincel.fillStyle = "white";
    pincel.clearRect(0,0,pantalla.width,pantalla.height);
    pincel.fillRect(0,0,pantalla.width,pantalla.heigth);
}

function dibujarLineas(){
    pincel.lineWidth = 3;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.strokeStyle = "#0A3871";
    pincel.beginPath();

    var espacioEntreLetras = 500/palabraSecreta.length;

    for (let i = 0; i < palabraSecreta.length; i++){
        pincel.moveTo(60+(espacioEntreLetras*i),300);
        pincel.lineTo(100+(espacioEntreLetras*i),300);
    }

    pincel.stroke();
    pincel.closePath();
}

function dibujarHorca(){
    pincel.lineWidth = 3;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.strokeStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(240,220); /*x,y*/ 
    pincel.lineTo(360,220);

    pincel.moveTo(260,220);
    pincel.lineTo(260,50);

    pincel.moveTo(260,50);
    pincel.lineTo(310,50);
    
    pincel.moveTo(310,50);
    pincel.lineTo(310,75);
    
    pincel.stroke();
    pincel.closePath();
}

function dibujarCabeza() {
    pincel.lineWidth = 3;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.strokeStyle = "#0A3871";
    pincel.beginPath();
    pincel.arc(310,90,15,0,2*3.14);
    pincel.stroke();
    pincel.closePath();
}

function dibujarCuerpo(){
    pincel.lineWidth = 3;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.strokeStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(310,105); /*x,y*/ 
    pincel.lineTo(310,170);
    pincel.stroke();
    pincel.closePath();
}

function dibujarBrazoIzq(){
    pincel.lineWidth = 3;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.strokeStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(310,105); /*x,y*/ 
    pincel.lineTo(290,140);
    pincel.stroke();
    pincel.closePath();
}

function dibujarBrazoDer(){
    pincel.lineWidth = 3;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.strokeStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(310,105); /*x,y*/ 
    pincel.lineTo(330,140);
    pincel.stroke();
    pincel.closePath();
}

function dibujarPiernaIzq(){
    pincel.lineWidth = 3;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.strokeStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(310,170); /*x,y*/ 
    pincel.lineTo(290,200);
    pincel.stroke();
    pincel.closePath();
}

function dibujarPiernaDer(){
    pincel.lineWidth = 3;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.strokeStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(310,170); /*x,y*/ 
    pincel.lineTo(330,200);
    pincel.stroke();
    pincel.closePath();
}

function escribirLetraCorrecta(indice){
    pincel.font = "bold 30px Inter";
    pincel.lineWidth = 3;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.fillStyle = "#0A3871";

    var ancho = 500/palabraSecreta.length;
    pincel.fillText(palabraSecreta[indice], 70+(ancho*indice),295);
}

function escribirLetraIncorrecta(letra, posicion){
    pincel.font = "bold 30px Inter";
    pincel.lineWidth = 3;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.fillStyle = "red";

    pincel.fillText(letra,70+(50*posicion),360,40);
    
}

function escribirMensajeGanador(){
    pincel.font = "bold 20px Inter";
    pincel.lineWidth = 3;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.fillStyle = "green";

    pincel.fillText("GANASTE,", 400,120);
    pincel.fillText("FELICIDADES!", 385,150);
}

function escribirMensajeFinDelJuego(){
    pincel.font = "bold 20px Inter";
    pincel.lineWidth = 3;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.fillStyle = "red";

    pincel.fillText("FIN DEL JUEGO!", 385,150);
}

function dibujarParteDelCuerpo(posicion){
    switch (posicion){
        case 1: dibujarCabeza(); 
        break
        case 2: dibujarCuerpo();
        break
        case 3: dibujarBrazoIzq();
        break
        case 4: dibujarBrazoDer();
        break
        case 5: dibujarPiernaIzq();
        break
        case 6: dibujarPiernaDer();
        break
    }
}