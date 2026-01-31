function setup() {
  createCanvas(500, 500, WEBGL);
}

function draw() {
  background(0,255,255);
  fill(100, 255, 100)
  rect(-250,125,500,125)
  noStroke();
  fill(255, 192, 203)
  ellipse(0,0,100,75);
  ellipse(25,-25,100,100);
  ellipse(100,37.5,200,100);
  ellipse(50,75,50,100);
  ellipse(150,75,50,100);
  ellipse(175,-25,50,150);
  fill(255, 165, 0);
  circle(-10,-25,20);
  fill(255, 140, 0)
  circle(-50,-10,20);
  fill(0, 128, 128);
  triangle(-37.5,-0,-50,25,-25,25);
  fill(0, 255, 0)
  ellipse(100,37.5,150,75);
  fill(170, 51, 106)
  ellipse(37.5,-25,50,100);
  fill(255, 255, 0)
  ellipse(0,-200,100,100);
}