const campo = document.getElementById("campo");
const $puntos = document.getElementById("puntos");
const $reiniciar = document.createElement("button");
const $mensaje = document.createElement("p");
const $a = document.createElement("a");

let cuadros;
let intervalo;

let comida;
let prueba = "";
let arr = [79, 55, 15, 38];

for (let i = 0; i < 280; i++) {
  cuadros = document.createElement("div");
  cuadros.setAttribute("id", `${i + 1}`);
  cuadros.classList.add("div");
  campo.appendChild(cuadros);
}

const div1 = document.getElementById("1");
const div2 = document.getElementById("2");

div1.style.backgroundColor = "#FF7000";
div2.style.backgroundColor = "#FF7000";


let recorrido;
let contar = 2;
let n1 = 95;
let con = 1;
comida = document.getElementById(n1);
prueba = comida.style.backgroundColor = "#FFBF00";

let cambio = 2;
let c2 = 40;

let y;
let m;

let yd, md;
let yi, mi;
let ya, ma;
let yb, mb;
let puntos=0;

$puntos.textContent= `${puntos}`
$reiniciar.classList.add("reiniciar")
$a.setAttribute("href", "")
$a.textContent="Volver a Jugar"
$mensaje.classList.add("mensaje")


function moverDerecha() {
  console.log("funcion Derecha");
  if((contar + 1)<341){
    recorrido = document.getElementById(`${contar + 1}`);
    yd = contar + 1;
    recorrido.style.backgroundColor = "#FF7000";
    
    contar++;
  
    if((contar - cambio)>0){
      recorrido = document.getElementById(`${contar - cambio}`);
      md = contar - cambio;
    

      if((document.getElementById(`${contar - cambio}`).style.backgroundColor==="rgb(255, 191, 0)")){
          recorrido.document.getElementById(`${contar - cambio}`).style.backgroundColor
         
        }
    
      recorrido.style.backgroundColor = "#10A19D";
          
    
      if (contar === n1 && prueba === "#FFBF00") {
      
        // prueba = comida.style.backgroundColor = "Magenta";
        // recorrido.style.backgroundColor = "Magenta";
        // n1++;
        cambio += 1;
        c2 += 20;
    
        comida = document.getElementById(`${n1 + 10}`);
        prueba = comida.style.backgroundColor = "#FFBF00";
        cambio + 1;
    
        n1 += 10;
        puntos++;
        $puntos.textContent = `${puntos}`
        //Display
        if(puntos===5){
          // campo.style.display="none"
          
          for (let i = 1; i <= 280; i++) {
            cuadros = document.getElementById(`${i}`);
            // cuadros.setAttribute("id", `${i + 1}`);
            // cuadros.classList.add("div");
            // campo.appendChild(cuadros);
            campo.removeChild(cuadros)
          }
          campo.appendChild($reiniciar)
          campo.appendChild($mensaje)
          // $reiniciar.textContent = "Volver a Jugar"
          $reiniciar.appendChild($a)
          
          $mensaje.textContent = "Ganasteee!!"
          // $reiniciar.innerHTML+=` <a href="">Reiniciar</a>`
          clearInterval(intervalo)
        }
      }
    }

  }
}


//Inicar por debajo

function a1() {
  if ((document.getElementById(`${1}`).style.backgroundColor) !="rgb(255, 191, 0)") {
    document.getElementById(`${1}`).style.backgroundColor = "#10A19D";
  }
}
function a2() {
  if ((document.getElementById(`${2}`).style.backgroundColor) !="rgb(255, 191, 0)") {
    document.getElementById(`${2}`).style.backgroundColor = "#10A19D";
  }
}
function a3() {
  if ((document.getElementById(`${3}`).style.backgroundColor) !="rgb(255, 191, 0)") {
    document.getElementById(`${3}`).style.backgroundColor = "#10A19D";
  }
}
function a4() {
  if ((document.getElementById(`${4}`).style.backgroundColor) !="rgb(255, 191, 0)") {
    document.getElementById(`${4}`).style.backgroundColor = "#10A19D";
  }
}
function a5() {
  if ((document.getElementById(`${5}`).style.backgroundColor) !="rgb(255, 191, 0)") {
    document.getElementById(`${5}`).style.backgroundColor = "#10A19D";
  }
}

function moverAbajo() {

  inter = setTimeout(a1, 100 );
  inter = setTimeout(a2, 200 );


  if((contar + 20)<281){

    recorrido = document.getElementById(`${contar + 20}`);
    yb = contar + 20;
    recorrido.style.backgroundColor = "#FF7000";
    
    contar += 20;
    if((contar - c2)>0){
      recorrido = document.getElementById(`${contar - c2}`);
     
      mb = contar - c2;

    
    
      if((document.getElementById(`${contar - c2}`).style.backgroundColor==="rgb(255, 191, 0)")){
        recorrido.document.getElementById(`${contar - c2}`).style.backgroundColor
      }
      recorrido.style.backgroundColor = "#10A19D";
    }
  
  
    if (contar === n1 && prueba === "#FFBF00") {
      // console.log("Entré");
      // prueba = comida.style.backgroundColor = "Magenta";
      // recorrido.style.backgroundColor = "Magenta";
  
      c2 += 20;
      cambio += 1;
  
      comida = document.getElementById(`${n1 + 10}`);
      prueba = comida.style.backgroundColor = "#FFBF00";
      cambio + 1;
      n1 += 10;
      puntos++;
      $puntos.textContent = `${puntos}`

      //Display
      if(puntos===5){
        campo.style.display="none"
        clearInterval(intervalo)
      }

    }
  }
}

function moverArriba() {

  if((contar - 20)>0 ){
    recorrido = document.getElementById(`${contar - 20}`);
    ya = contar - 20;
    recorrido.style.backgroundColor = "#FF7000";
  
    contar -= 20;

    if((contar + c2)<281 ){
      recorrido = document.getElementById(`${contar + c2}`);
      ma = contar + c2;
    
    
      if((document.getElementById(`${contar + c2}`).style.backgroundColor==="rgb(255, 191, 0)")){
        recorrido.document.getElementById(`${contar + c2}`).style.backgroundColor
      }
      recorrido.style.backgroundColor = "#10A19D";
    
      // console.log("1 arr= " + ya); //+20
      // console.log("2 arr= " + ma); //-20
    
      if (contar === n1 && prueba === "#FFBF00") {
        
        // prueba = comida.style.backgroundColor = "Magenta";
        cambio += 1;
        c2 += 20;
    
        comida = document.getElementById(`${n1 + 10}`);
        prueba = comida.style.backgroundColor = "#FFBF00";
        cambio + 1;
        n1 += 10;
        puntos++;
        $puntos.textContent = `${puntos}`

        //Display
        if(puntos===5){
          campo.style.display="none"
          clearInterval(intervalo)
        }

      }
    
    }

  }

  
}

function moverIzquierda() {

  if((contar - 1)>0){
    recorrido = document.getElementById(`${contar - 1}`);
    yi = contar - 1;
    recorrido.style.backgroundColor = "#FF7000";
    contar--;
    recorrido = document.getElementById(`${contar + cambio}`);
    mi = contar + cambio;
    

    if((document.getElementById(`${contar + cambio}`).style.backgroundColor==="rgb(255, 191, 0)")){
      recorrido.document.getElementById(`${contar + cambio}`).style.backgroundColor
    }
    recorrido.style.backgroundColor = "#10A19D";
  
    // console.log("1 iz= " + yi); //+1
    // console.log("2 iz= " + mi); //-1
  
    if (contar === n1 && prueba === "#FFBF00") {
    
      // prueba = comida.style.backgroundColor = "Magenta";
      // recorrido.style.backgroundColor = "Magenta";
  
      cambio += 1;
      c2 += 20;
  
      comida = document.getElementById(`${n1 + 10}`);
      prueba = comida.style.backgroundColor = "#FFBF00";
      cambio + 1;
      n1 += 10;
      puntos++;
      $puntos.textContent = `${puntos}`

        //Display
        if(puntos===5){
          campo.style.display="none"
          clearInterval(intervalo)
        }

    }
  }
}

let inter;

function fDere1() {
  
  if ((document.getElementById(`${yd - 1}`).style.backgroundColor) !="rgb(255, 191, 0)") {
    document.getElementById(`${yd - 1}`).style.backgroundColor = "#10A19D";
  }
}

function fDere2() {
  if ((document.getElementById(`${yd - 2}`).style.backgroundColor) !="rgb(255, 191, 0)"){
    document.getElementById(`${yd - 2}`).style.backgroundColor = "#10A19D";
  }
}

function fDere3() {
  if ((document.getElementById(`${yd - 3}`).style.backgroundColor) !="rgb(255, 191, 0)"){
    document.getElementById(`${yd - 3}`).style.backgroundColor = "#10A19D";
  }
}

function fDere4() {
  if ((document.getElementById(`${yd - 4}`).style.backgroundColor) !="rgb(255, 191, 0)"){
    document.getElementById(`${yd - 4}`).style.backgroundColor = "#10A19D";
  }
}

function fDere5() {
  if ((document.getElementById(`${yd - 5}`).style.backgroundColor) !="rgb(255, 191, 0)"){
    document.getElementById(`${yd - 5}`).style.backgroundColor = "#10A19D";
  }
}
function fDere6() {
  if ((document.getElementById(`${yd - 6}`).style.backgroundColor) !="rgb(255, 191, 0)"){
    document.getElementById(`${yd - 6}`).style.backgroundColor = "#10A19D";
  }
}


function derecha() {
  if (!(yd === undefined)) {
    inter = setTimeout(fDere1, 800 );
    inter = setTimeout(fDere2, 700 );
    inter = setTimeout(fDere3, 600 );
    inter = setTimeout(fDere4, 500 );
    inter = setTimeout(fDere5, 400 );
    inter = setTimeout(fDere6, 300 );
  }
}

function fIzq1() {
  if ((document.getElementById(`${yi + 1}`).style.backgroundColor) !="rgb(255, 191, 0)"){
    document.getElementById(`${yi + 1}`).style.backgroundColor = "#10A19D";
  }
  
}
function fIzq2() {
  if ((document.getElementById(`${yi + 2}`).style.backgroundColor) !="rgb(255, 191, 0)"){
    document.getElementById(`${yi + 2}`).style.backgroundColor = "#10A19D";
  }
}
function fIzq3() {
  if ((document.getElementById(`${yi + 3}`).style.backgroundColor) !="rgb(255, 191, 0)"){
    document.getElementById(`${yi + 3}`).style.backgroundColor = "#10A19D";
  }
}
function fIzq4() {
  if ((document.getElementById(`${yi + 4}`).style.backgroundColor) !="rgb(255, 191, 0)"){
    document.getElementById(`${yi + 4}`).style.backgroundColor = "#10A19D";
  }
}
function fIzq5() {
  if ((document.getElementById(`${yi + 5}`).style.backgroundColor) !="rgb(255, 191, 0)"){
    document.getElementById(`${yi + 5}`).style.backgroundColor = "#10A19D";
  }
}
function fIzq6() {
  if ((document.getElementById(`${yi + 6}`).style.backgroundColor) !="rgb(255, 191, 0)"){
    document.getElementById(`${yi + 6}`).style.backgroundColor = "#10A19D";
  }
}

function izquierda() {
  if (!(yi === undefined)) {
    inter = setTimeout(fIzq1, 800 );
    inter = setTimeout(fIzq2, 700 );
    inter = setTimeout(fIzq3, 600 );
    inter = setTimeout(fIzq4, 500 );
    inter = setTimeout(fIzq5, 400 );
    inter = setTimeout(fIzq6, 300 );

  }
}

function fArri1() {
  if ((document.getElementById(`${ya + 20}`).style.backgroundColor) !="rgb(255, 191, 0)"){
    document.getElementById(`${ya + 20}`).style.backgroundColor = "#10A19D";
  }
}

function fArri2() {
  if ((document.getElementById(`${ya + 40}`).style.backgroundColor) !="rgb(255, 191, 0)"){
    document.getElementById(`${ya + 40}`).style.backgroundColor = "#10A19D";
  }
}

function fArri3() {
  if ((document.getElementById(`${ya + 60}`).style.backgroundColor) !="rgb(255, 191, 0)"){
    document.getElementById(`${ya + 60}`).style.backgroundColor = "#10A19D";
  }
}

function fArri4() {
  if ((document.getElementById(`${ya + 80}`).style.backgroundColor) !="rgb(255, 191, 0)"){
    document.getElementById(`${ya + 80}`).style.backgroundColor = "#10A19D";
  }
}
function fArri5() {
  if ((document.getElementById(`${ya + 100}`).style.backgroundColor) !="rgb(255, 191, 0)"){
    document.getElementById(`${ya + 100}`).style.backgroundColor = "#10A19D";
  }
}
function fArri6() {
  if ((document.getElementById(`${ya + 120}`).style.backgroundColor) !="rgb(255, 191, 0)"){
    document.getElementById(`${ya + 120}`).style.backgroundColor = "#10A19D";
  }
}

function arriba() {
  if (!(ya === undefined)) {
    inter = setTimeout(fArri1, 800 );
    inter = setTimeout(fArri2, 700 );
    inter = setTimeout(fArri3, 600 );
    inter = setTimeout(fArri4, 500 );
    inter = setTimeout(fArri5, 400 );
    inter = setTimeout(fArri6, 300 );
  }
}

function fAbajo1() {
  if((yb - 20)>0){
    if ((document.getElementById(`${yb - 20}`).style.backgroundColor) !="rgb(255, 191, 0)"){
      document.getElementById(`${yb - 20}`).style.backgroundColor = "#10A19D";
    }
  }
}

function fAbajo2() {
  if((yb - 40)>0){
    if ((document.getElementById(`${yb - 40}`).style.backgroundColor) !="rgb(255, 191, 0)"){
      document.getElementById(`${yb - 40}`).style.backgroundColor = "#10A19D";
    }
  }
}
function fAbajo3() {
  if((yb - 60)>0){
    if ((document.getElementById(`${yb - 60}`).style.backgroundColor) !="rgb(255, 191, 0)"){
      document.getElementById(`${yb - 60}`).style.backgroundColor = "#10A19D";
    }
  }
}

function fAbajo4() {
  if((yb - 80)>0){
    if ((document.getElementById(`${yb - 80}`).style.backgroundColor) !="rgb(255, 191, 0)"){
      document.getElementById(`${yb - 80}`).style.backgroundColor = "#10A19D";
    }
  }
}
function fAbajo5() {
  if((yb - 100)>0){
    if ((document.getElementById(`${yb - 100}`).style.backgroundColor) !="rgb(255, 191, 0)"){
      document.getElementById(`${yb - 100}`).style.backgroundColor = "#10A19D";
    }
  }
}
function fAbajo6() {
  if((yb - 120)>0){
    if ((document.getElementById(`${yb - 120}`).style.backgroundColor) !="rgb(255, 191, 0)"){
      document.getElementById(`${yb - 120}`).style.backgroundColor = "#10A19D";
    }
  }
}
function fAbajo7() {
 
  if((yb - 140)>0){
    if ((document.getElementById(`${yb - 140}`).style.backgroundColor) !="rgb(255, 191, 0)"){
      document.getElementById(`${yb - 140}`).style.backgroundColor = "#10A19D";
    }

  }
}
function fAbajo8() {
  if((yb - 160)>0){
    if ((document.getElementById(`${yb - 160}`).style.backgroundColor) !="rgb(255, 191, 0)"){
      document.getElementById(`${yb - 160}`).style.backgroundColor = "#10A19D";
    }

  }
}
function fAbajo9() {
  if((yb - 180)>0){
    if ((document.getElementById(`${yb - 180}`).style.backgroundColor) !="rgb(255, 191, 0)"){
      document.getElementById(`${yb - 180}`).style.backgroundColor = "#10A19D";
    }

  }
}
function fAbajo10() {
  if((yb - 200)>0){
    if ((document.getElementById(`${yb - 200}`).style.backgroundColor) !="rgb(255, 191, 0)"){
      document.getElementById(`${yb - 200}`).style.backgroundColor = "#10A19D";
    }

  }
}
function fAbajo11() {
  if((yb - 220)>0){
    if ((document.getElementById(`${yb - 220}`).style.backgroundColor) !="rgb(255, 191, 0)"){
      document.getElementById(`${yb - 220}`).style.backgroundColor = "#10A19D";
    }

  }
}
function fAbajo12() {
  if((yb - 240)>0){
    if ((document.getElementById(`${yb - 240}`).style.backgroundColor) !="rgb(255, 191, 0)"){
      document.getElementById(`${yb - 240}`).style.backgroundColor = "#10A19D";
    }

  }
}


function abajo() {
  if (!(yb === undefined)) {
    inter = setTimeout(fAbajo1, 800 );
    inter = setTimeout(fAbajo2, 700 );
    inter = setTimeout(fAbajo3, 600 );
    inter = setTimeout(fAbajo4, 500 );
    inter = setTimeout(fAbajo5, 400 );
    inter = setTimeout(fAbajo6, 300 );
  }
}


window.addEventListener("keydown", tecla);
window.addEventListener("keyup", detenerMovimiento);

function tecla(event) {
  //ARRIBA
  if (event.key == "ArrowUp") {
    clearInterval(intervalo);
    intervalo = setInterval(moverArriba, 250);
    derecha();
    izquierda();

    // IZQUIERDA
  } else if (event.key == "ArrowLeft") {
    clearInterval(intervalo);
    intervalo = setInterval(moverIzquierda, 250);
    arriba();
    abajo();

    // ABAJO
  } else if (event.key == "ArrowDown") {
    clearInterval(intervalo);
    intervalo = setInterval(moverAbajo, 250);
    derecha();
    izquierda();

    //    DERECHA
  } else if (event.key == "ArrowRight") {
    clearInterval(intervalo);
    intervalo = setInterval(moverDerecha, 250);
    arriba();
    abajo();
  }
}

function detenerMovimiento(event) {
  if (event.key === " ") {
    clearInterval(intervalo);
  }
}
