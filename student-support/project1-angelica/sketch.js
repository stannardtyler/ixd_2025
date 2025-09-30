//variables for shuffle options
let pumpkin1;
let face1;
let candy1;
let pumpkin2;
let face2;
let candy2;
let pumpkin3;
let face3;
let candy3;

//variable to id the options
let candy_id;
let face_id;
let pumpkin_id;

//variable for bg color that we define in setup
let bgColor1;
let bgColor2;

//preload loads our assets before the program runs
function preload() {
  //pumpkin 1
  pumpkin1 = loadImage("/Photos/pumpkin1.png");
  face1 = loadImage("/Photos/face1.png");
  candy1 = loadImage("/Photos/candy1.png");

  //pumpkin 2
  pumpkin2 = loadImage("/Photos/pumpkin2.jpg");
  face2 = loadImage("/Photos/face2.png");
  candy2 = loadImage("/Photos/candy2.png");

  //pumpkin 3
  pumpkin3 = loadImage("/Photos/pumpkin3.png");
  face3 = loadImage("/Photos/face3.png");
  candy3 = loadImage("/Photos/candy3.png");
}

function setup() {
  createCanvas(500, 600);

  //define bgColor variables
  bgColor1 = color(255, 182, 79);
  bgColor2 = color(0, 51, 61);
}

function draw() {
  background(bgColor1);

  fancyBackground(); //calls custom function

  // //head
  // // ellipse(250, 300, 300);
  // image(base, 0, 0, 520, 500);

  // face
  // //line(250, 400, 275, 375);
  if (face_id == 1) {
    image(face1, 0, 0, 520, 500);
  } else if (face_id == 2) {
    image(face2, 0, 0, 520, 500);
  } else if (face_id == 3) {
    image(face3, 0, 0, 520, 500);
  }

  // //pumpkin
  // rectMode(CENTER);
  // // rect(250, 200, 300, 100);
  if (pumpkin_id == 1) {
    image(pumpkin1, 0, 0, 520, 500);
  } else if (pumpkin_id == 2) {
    image(pumpkin2, 0, 0, 520, 500);
  } else if (pumpkin_id == 3) {
    image(pumpkin3, 0, 0, 520, 500);
  }

  // candy
  // //line(250, 400, 275, 375);
  if (candy_id == 1) {
    image(candy1, 0, 0, 520, 500);
  } else if (candy_id == 2) {
    image(candy2, 0, 0, 520, 500);
  } else if (candy_id == 3) {
    image(candy3, 0, 0, 520, 500);
  }

  //controls
  //keyIsDown allows user to hold and shuffle
  if (keyIsDown(LEFT_ARROW)) {
    shuffleCandy();
  }

  if (keyIsDown(UP_ARROW)) {
    shufflePumpkin();
  }

  if (keyIsDown(RIGHT_ARROW)) {
    shuffleFace();
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
  for (let x = 0; x <= width; x += 60) {
    fill(bgColor2);
    for (let y = 0; y <= height; y += 30) {
      ellipse(x, y, 55);
    }
  }
}

//custom functions to reshuffle elements
function shuffleCandy() {
  candy_id = int(random(1, 4));
}

function shuffleFace() {
  face_id = int(random(1, 4));
}

function shufflePumpkin() {
  pumpkin_id = int(random(1, 4));
}

function shuffleBgColor() {
  bgColor1 = color(random(255), random(255), random(255));
  bgColor2 = color(random(255), random(255), random(255));
}
