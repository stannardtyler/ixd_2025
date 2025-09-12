let state = 0;

let img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12;

let hat_id;
let face_id;
let bg_id;

//Play Box Parameters
let x1 = 120;
let y1 = 250;
let w1 = 200;
let h1 = 100;

//Hat Box Parameters
let x2 = 200;
let y2 = 125;
let w2 = 50;
let h2 = 50;

//Face Box Parameters
let x3 = 200;
let y3 = 230;
let w3 = 50;
let h3 = 50;

//Background Box Parameters
let x4 = 15;
let y4 = 20;
let w4 = 75;
let h4 = 50;



function preload(){
  
  img1 = loadImage("RandomiSprite.png");
  img2 = loadImage("hat1.png");
  img3 = loadImage("hat2.png");
  img4 = loadImage("hat3.png");
  img5 = loadImage("face1.png");
  img6 = loadImage("face2.png");
  //img7 = loadImage("face3.png");
  img8 = loadImage("bg1.png");
  img9 = loadImage("bg2.png");
  img10 = loadImage("bg3.png");
  img11 = loadImage("mainmenu.png");
  //img12 = loadImage("mouse.png");
}




function setup() {
  createCanvas(450, 450);
  background(0);
  textAlign(CENTER);
  fill(255);
  text("DIRECTIONS: CLICK TO RANDOMIZE: HEAD, STOMACH, AND BOX", 150, 75, 150);
  text("PRESS ENTER TO ALTERNATE SCREENS", 150, 150, 150);
  text("PRESS ENTER TO START", 125, 225, 200);
  //noCursor();
  // image(img12, mouseX, mouseY);
}

function draw() {
  
  if (keyIsPressed == true && keyCode == 13) {
    state = 1;
  }
  if (state == 1) {
    //Main Menu
    draw1();
  } else if (state == 2) {
    //Randomizer
    draw2();
  }
}

function draw1() {
  bPlay();
  background(img11);
  image(img12, mouseX, mouseY);
  
  if (mouseIsPressed == true && (mouseX > x1) && (mouseX < x1 + w1) && (mouseY > y1) && (mouseY < y1 + h1)){
    state = 2;
  }
  
}

function draw2() {
  
  bHat();
  bFace();
  
  background(0);
  
  if (bg_id == 1) {
    image(img8, 0, 0, 500, 500);
  } else if (bg_id == 2) {
    image(img9, 0, 0, 500, 500);
  } else if (bg_id == 3) {
    image(img10, 0, 0, 500, 500);
  }
  
  image(img1, 60, 50, 350, 350);
  
  if (hat_id == 1) {
    image(img2, 65, 50, 350, 350);
  } else if (hat_id == 2) {
    image(img3, 65, 50, 350, 350);
  } else if (hat_id == 3) {
    image(img4, 65, 50, 350, 350);
  }
  
  if (face_id == 1) {
    image(img5, 65, 50, 350, 350);
  } else if (hat_id == 2) {
    image(img6, 65, 50, 350, 350);
  } else if (hat_id == 3) {
    image(img7, 65, 50, 350, 350);
  } 
  
  //To change the hat
  if (mouseIsPressed == true && (mouseX > x2) && (mouseX < x2 + w2) && (mouseY > y2) && (mouseY < y2 + h2)){
    shuffleHat();
  }
  //To change the face
  if (mouseIsPressed == true && (mouseX > x3) && (mouseX < x3 + w3) && (mouseY > y3) && (mouseY < y3 + h3)){
    shuffleFace();
  }
  //To go change background
  if (mouseIsPressed == true && (mouseX > x4) && (mouseX < x4 + w4) && (mouseY > y4) && (mouseY < y4 + h4)){
    // state = 1;
    shuffleBackGround();
  }
  
  bBG();
  
}

function shuffleHat() {
  hat_id = int(random(1, 4));
}

function shuffleFace() {
  face_id = int(random(1, 4));
}

function shuffleBackGround() {
  bg_id = int(random(1, 4));
}

function bPlay() {
  fill(250);
  rect(x1, y1, w1, h1);
}

function bHat() {
  fill(250);
  rect(x2, y2, w2, h2);
}

function bFace() {
  fill(250);
  rect(x3, y3, w3, h3);
}

function bBG() {
  fill(250);
  rect(x4, y4, w4, h4);
}
