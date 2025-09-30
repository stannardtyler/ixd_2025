let studentInput;
let shuffleButton;

let studentList = [];

let testList = ["tyler", "diana", "rell", "bryce"];
let shuffledTestList;

function setup() {
  createCanvas(400, 400);

  createP("");
  studentInput = createInput("Add Names here");

  createP("");
  shuffleButton = createButton("Shuffle");
  shuffleButton.mousePressed(shuffleNames);
}

function draw() {
  background(220);

  // textAlign(LEFT);
  // text(studentInput.value(), 10, 50);

  // for (let i = 0; i < studentList.length; i++) {
  //   text(studentList[i], 20, 20 + 20 * i);
  // }

  for (let i = 0; i < testList.length; i++) {
    text(testList[i], 100, 100 + 20 * i);
  }

  if (shuffledTestList) {
    for (let i = 0; i < shuffledTestList.length; i++) {
      text(shuffledTestList[i], 200, 100 + 20 * i);
    }
  }
}

function keyPressed() {
  if (keyIsDown(ENTER)) {
    let s = studentInput.value();
    studentList.push(s);
  }

  console.log(studentList);
}

function shuffleNames() {
  for (let i = 0; i < testList.length; i++) {}
}

function mousePressed() {
  shuffledTestList = shuffle(testList);
}
