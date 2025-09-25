// https://p5js.org/reference/#DOM

//https://www.youtube.com/watch?v=HsDVz2_Qgow&list=PLRqwX-V7Uu6bI1SlcCRfLH79HZrFAtBvX&index=6&ab_channel=TheCodingTrain

function setup() {
  createCanvas(400, 400);
  noCursor();

  //DOM
  createP(
    "This text is created with P5js! Take note, that this paragraph tag is added below the canvas."
  );

  createElement("h1", "Your Lucky Number is Below!");

  createImg(
    "https://www.veryokvinyl.com/cdn/shop/files/packshot_1_974x_1.png?v=1731089898",
    200,
    200
  );
}

function draw() {
  background(0);

  rectMode(CENTER);
  noFill();
  stroke(255, 255, 255);
  rect(mouseX, mouseY, 25);
}

function mousePressed() {
  createP("Your lucky number " + int(random(1000)));
}
