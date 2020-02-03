
cambiaColor();

function cambiaColor() {
  let bodyEL = document.getElementById("body");

  bodyEL.style.backgroundColor = "rgb("+ Math.random() * 100 + 50 + ","+ Math.random() * 100 + 50 + "," + Math.random() * 100 + 50 + ")";


}
