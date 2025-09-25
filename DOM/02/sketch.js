// https://p5js.org/reference/#DOM

//activity try other interactions available to create dom elements. Experiment with different html variables

let canvas;
let h1;

function setup() {
  canvas = createCanvas(400, 400);
  canvas.position(400, 300);

  noCursor();

  //DOM
  createP(
    "This text is created with P5js! Take note, that this paragraph tag is added below the canvas."
  );

  h1 = createElement("h1", "Waiting");

  //h1.position(400, 300);

  createImg(
    "https://www.veryokvinyl.com/cdn/shop/files/packshot_1_974x_1.png?v=1731089898",
    200,
    200
  );
}

function draw() {
  // background(0);
  clear();

  h1.position(mouseX - 100 + random(-1, 1), mouseY);

  rectMode(CENTER);
  noFill();
  stroke(255, 255, 255);
  rect(200 + random(-5, 5), 200, 25);
}

function mousePressed() {
  h1.html("Now I will show you my luck number");

  createP("Your lucky number " + int(random(1000)));
}
