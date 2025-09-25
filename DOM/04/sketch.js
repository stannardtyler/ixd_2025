// https://p5js.org/reference/#DOM

//activity make a "submit" button to only change the text once.

let canvas;
let bgcolor;
let button;
let slider;
let input;
let inputP;

function setup() {
  canvas = createCanvas(400, 400);
  bgcolor = color(200);

  //DOM
  createP(""); //cheeky way to make space
  button = createButton("Change Color!");
  button.mousePressed(changeColor);

  slider = createSlider(10, 100, 50);
}

function changeColor() {
  bgcolor = color(random(255));
}

function draw() {
  background(bgcolor);

  //update DOM
  //inputP.html(input.value());
  rectMode(CENTER);
  noFill();
  stroke(255, 255, 255);
  rect(200, 200, slider.value());
  textAlign(CENTER);
  //text(input.value(), 200, 200);
}
