// https://p5js.org/reference/#DOM

//activity

let canvas;
let bgcolor;
let button;
let txt;

function setup() {
  canvas = createCanvas(400, 400);
  bgcolor = color(200);

  //DOM

  txt = createP("some text");

  noCursor();
}

function draw() {
  background(bgcolor);

  //update DOM
  noFill();
  stroke(255, 255, 255);
  rect(200, 200, 50);
  textAlign(CENTER);
}
