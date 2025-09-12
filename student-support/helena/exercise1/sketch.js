//state the variables in global scope

//background variables
let bckgrnd = [];
let rndbg; //assigned later

//midground variables
let midground = [];
let rndmg; //assigned later

//foreground variables
let foreground = [];
let rndfg;

//detail variable
let detail = [];
let rnddetail;

function preload() {
  //load the background images
  img1 = loadImage("assets/background/background1.PNG");
  img12 = loadImage("assets/background/background2.PNG");
  img13 = loadImage("assets/background/background3.PNG");
  img14 = loadImage("assets/background/background4.PNG");

  //add imgs to bckgrnd array
  bckgrnd = [img1, img12, img13, img14];

  //load the midground images
  img2 = loadImage("/assets/midground/midground1.png");
  img22 = loadImage("/assets/midground/midground2.png");
  img23 = loadImage("/assets/midground/midground3.png");
  img24 = loadImage("/assets/midground/midground4.png");

  //add imgs to midground array
  midground = [img2, img22, img23, img24];

  // //foreground
  // img3 = loadImage("/assets/foreground/foreground1.png");
  // img32 = loadImage("/assets/foreground/foreground2.png");
  // img33 = loadImage("/assets/foreground/foreground3.png");
  // img34 = loadImage("/assets/foreground/foreground4.png");

  // //detail
  // img4 = loadImage("/assets/detail/detail1.png");
  // img42 = loadImage("/assets/detail/detail2.png");
  // img43 = loadImage("/assets/detail/detail3.png");
  // img44 = loadImage("/assets/detail/detail4.png");
}

//canvas size
function setup() {
  createCanvas(600, 600);
  background(0, 0, 0);
}

//images to make scene
function draw() {
  //-----background
  //review keyIsDown reference
  if (keyIsDown(UP_ARROW)) {
    //randomize the element from the bg array
    rndbg = bckgrnd[int(random(4))];
  }

  //keep the image separate from the if statement or the image won't update
  if (rndbg == null) {
    //if there is no value for rndbg at start, do nothing
  } else {
    //call the image with the random selected array passed to the rndbg variable
    image(rndbg, 0, 0, width, height);
  }

  //-----end background

  //-----midground

  if (keyIsDown(DOWN_ARROW)) {
    rndmg = midground[int(random(4))];
    image(rndmg, 0, 0, width, height);
  }

  if (rndmg == null) {
    //if there is no value for rndmg at start, do nothing
  } else {
    //call the image with the random selected array passed to the rndbg variable
    image(rndmg, 0, 0, width, height);
  }

  //----end midground

  // do the same setup from bg and mg for the foreground and detail. This setup method should allow you to utilize the arrays effectively
}
