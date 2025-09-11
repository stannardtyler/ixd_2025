//variables for shuffle options
let base;
let hair1;
let eye1;
let smile1;
let hair2;
let eye2;
let smile2;
let hair3;
let eye3;
let smile3;

//variable to id the options
let smile_id;
let eye_id;
let hair_id;

//variable for bg color that we define in setup
let bgColor1;
let bgColor2;

//preload loads our assets before the program runs
function preload() {
  base = loadImage("base.png");

  //character 1
  hair1 = loadImage("hair1.png");
  eye1 = loadImage("eye1.png");
  smile1 = loadImage("smile1.png");

  //character 2
  hair2 = loadImage("hair2.png");
  eye2 = loadImage("eye2.png");
  smile2 = loadImage("smile2.png");

  //character 3
  hair3 = loadImage("hair3.png");
  eye3 = loadImage("eye3.png");
  smile3 = loadImage("smile3.png");
}

function setup() {
  createCanvas(500, 600);

  //define bgColor variables
  bgColor1 = color(255, 182, 79);
  bgColor2 = color(0, 51, 161);
}

function draw() {
  background(bgColor1);

  fancyBackground(); //calls custom function

  //head
  // ellipse(250, 300, 300);
  image(base, 0, 0, 520, 500);

  //eye
  //line(250, 400, 275, 375);
  if (eye_id == 1) {
    image(eye1, 0, 0, 520, 500);
  } else if (eye_id == 2) {
    image(eye2, 0, 0, 520, 500);
  } else if (eye_id == 3) {
    image(eye3, 0, 0, 520, 500);
  }

  //hair
  rectMode(CENTER);
  // rect(250, 200, 300, 100);
  if (hair_id == 1) {
    image(hair1, 0, 0, 520, 500);
  } else if (hair_id == 2) {
    image(hair2, 0, 0, 520, 500);
  } else if (hair_id == 3) {
    image(hair3, 0, 0, 520, 500);
  }

  //mouth
  //line(250, 400, 275, 375);
  if (smile_id == 1) {
    image(smile1, 0, 0, 520, 500);
  } else if (smile_id == 2) {
    image(smile2, 0, 0, 520, 500);
  } else if (smile_id == 3) {
    image(smile3, 0, 0, 520, 500);
  }

  //controls
  //keyIsDown allows user to hold and shuffle
  if (keyIsDown(LEFT_ARROW)) {
    shuffleSmile();
  }

  if (keyIsDown(UP_ARROW)) {
    shuffleHair();
  }

  if (keyIsDown(RIGHT_ARROW)) {
    shuffleEyes();
  }
}

//using function keyReleased to slow down the bg shuffle
function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    shuffleBgColor();
  }
}

//custom function to setup background
function fancyBackground() {
  for (let x = 0; x <= width; x += 50) {
    fill(bgColor2);
    for (let y = 0; y <= height; y += 50) ellipse(x, y, 25);
  }
}


//custom functions to reshuffle elements
function shuffleSmile() {
  smile_id = int(random(1, 4));
}

function shuffleEyes() {
  eye_id = int(random(1, 4));
}

function shuffleHair() {
  hair_id = int(random(1, 4));
}

function shuffleBgColor() {
  bgColor1 = color(random(255), random(255), random(255));
  bgColor2 = color(random(255), random(255), random(255));
}
