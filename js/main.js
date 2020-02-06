let cosas = [ 'programador de Angular 2', 'Joseba Merino Pina', 'muy trabajador', 'programador de Java', 'bastante majo'];

let numero = Math.round(Math.random() * (cosas.length - 1));
console.log(numero);
slowText(cosas[numero]);

cambiaColor();

function cambiaColor() {
  let bodyEL = document.getElementById("body");

  bodyEL.style.backgroundColor = "rgb("+ Math.random() * 100 + 50 + ","+ Math.random() * 100 + 50 + "," + Math.random() * 100 + 50 + ")";


}

function slowText(cosa) {
  let mensaje = 'Hola, soy ' + cosa;
  let saludoEL = document.getElementById('saludo');
  unTrozo(saludoEL, mensaje);
}

function unTrozo(saludoEL, mensaje) {
  if(mensaje.substring(0,1) === ' '){
    cambiaColor()
  }
  saludoEL.innerHTML += mensaje.substring(0,1) ;
  if(mensaje.substring(1) === '') {
    return;
  } else {
    setTimeout(() => unTrozo(saludoEL, mensaje.substring(1)), 100)
  }
}


