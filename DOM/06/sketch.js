// https://p5js.org/reference/#DOM

//activity make something happen inside the canvas once you change the input, think simple but effective. Consider the challenge of the background function in the draw loop, is there a way to leave the shapes? maybe createGraphic()?

let canvas;
let bgcolor;
let button;
let slider;
let input;
let inputP;
let nameP;

function setup() {
  canvas = createCanvas(400, 400);
  bgcolor = color(200);

  //DOM

  //mouseover and mouseout functions can work on canvas and mousePressed function on canvas
  canvas.mouseOver(overpara);
  canvas.mouseOut(outpara);
  canvas.mousePressed(changeColor);

  //mouseover and mouseout functions
  nameP = createP("Your name!");
  nameP.mouseOver(overpara);
  nameP.mouseOut(outpara);

  createP(""); //cheeky way to make space
  button = createButton("Change Color!");
  button.mousePressed(changeColor);

  createP(""); //cheeky way to make space
  slider = createSlider(10, 100, 50);

  createP(""); //cheeky way to make space
  input = createInput("type your name");

  inputP = createP("The Text you Type will be here.");

  input.changed(updateText); //changed checks any change after the action

  input.input(updateText); //input checks any change (even while presently changing)

  noCursor();
}

function updateText() {
  nameP.html(input.value()); //changes nameP once changed
}

function overpara() {
  nameP.html("your mouse is over me!");
}

function outpara() {
  nameP.html("your mouse is out");
}

function changeColor() {
  bgcolor = color(random(255));
}

function draw() {
  background(bgcolor);

  //update DOM
  inputP.html(input.value());
  rectMode(CENTER);
  noFill();
  stroke(255, 255, 255);
  rect(200, 200, slider.value());
  textAlign(CENTER);
  text(input.value(), 200, 200);
}

// function randomShape() {
//   fill(255);
//   rect(random(400), random(400), random(50));
// }
