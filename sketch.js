 function setup() {
  createCanvas(900, 800);
}
let olhoX;
let olhoY;

function draw() {
  background("#FF5722");
  fill("#03A9F4");
  circle(400,400,600); // rosto
  fill("white");
  circle(320,350,80); // olho esquerdo
  circle(480, 350, 80); // olho direito
  line(300, 550, 500, 550); // boca
  fill("#3F51B5");
  triangle(400, 420, 370, 480, 430, 480); // nariz
  line(280, 290, 360, 280); // sobrancelha esquerda
  line(440, 280, 520, 290); // sobrancelha direita
  // circle(150,150,10); // pupila esquerda
  //circle(250,150,10); // pupila direita
 
  olhoX = map(mouseX, 0, width, -15, 15);
  olhoY = map(mouseY, 0, height, -15, 15);

  circle(320 + olhoX, 350 + olhoY, 15); // nova pupila esquerda
  circle(480 + olhoX, 350 + olhoY, 15); //nova pupila direita
  if (mouseIsPressed) {
    console.log(mouseX, mouseY);
  }
}