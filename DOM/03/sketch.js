// https://p5js.org/reference/#DOM

//activity use the button callback to create / change other html or canvas elements

let canvas;
let bgcolor;
let button;

function setup() {
  canvas = createCanvas(400, 400);
  bgcolor = color(200);

  button = createButton("Change Color!");
  button.mousePressed(changeColor);
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
