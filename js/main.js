let cosas = [
  'programador',
  'Joseba Merino Pina', 
  'programador de Java',
'programador de Spring Boot',
'maquetador de HTML con CSS',
'programador de Javascript',
'maquetador de CSS',
'maquetador de Bootstrap 4'];

let numero = Math.round(Math.random() * (cosas.length - 1));
console.log(numero);
slowText(cosas[numero]);

cambiaColor();

function cambiaColor() {
  let bodyEL = document.getElementById("body");

  bodyEL.style.backgroundColor = "rgb("+ Math.random() * 150 + 50 + ","+ Math.random() * 150 + 50 + "," + Math.random() * 150 + 50 + ")";


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


