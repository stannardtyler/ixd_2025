// https://p5js.org/reference/#DOM

//activity use the button callback to create / change other html or canvas elements

let canvas;
let bgcolor;

function setup() {
  canvas = createCanvas(400, 400);
  bgcolor = color(200);

  //DOM
  button = createButton("Change Color!");
  button.mousePressed(changeColor);

  noCursor();
}

function changeColor() {
  bgcolor = color(random(255));
}

function draw() {
  background(bgcolor);

  rectMode(CENTER);
  noFill();
  stroke(255, 255, 255);
  rect(200, 200, 25);
}
