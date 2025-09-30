let studentInput;
let shuffleButton;
let deleteButton;
let clearButton;
let groupNum = 10;

let studentList = [
  "Aashi",
  "Bulli",
  "Daniella",
  "Gabriel",
  "Kim",
  "Michael",
  "Mishelle",
  "Subin",
  "Sam",
  "Yanyan",
];

let testList = [];
let shuffledTestList;

function setup() {
  createCanvas(600, 400);

  createP("");
  studentInput = createInput("Add Names here");
  studentInput.position(windowWidth / 2 - 200, 410);

  createP("");
  shuffleButton = createButton("Shuffle");
  shuffleButton.mousePressed(shuffleNames);
  shuffleButton.position(windowWidth / 2 - 280, 410);

  deleteButton = createButton("Delete");
  deleteButton.mousePressed(deleteNames);
  deleteButton.position(windowWidth / 2 + 230, 450);

  clearButton = createButton("Clear List");
  clearButton.mousePressed(deleteNames);
  clearButton.position(windowWidth / 2 + 150, 450);
}

function draw() {
  background(220);

  for (let i = 0; i < studentList.length; i++) {
    text(studentList[i], 20, 20 + 20 * i);
  }

  if (shuffledTestList) {
    let studentsPerGroup = ceil(shuffledTestList.length / groupNum);

    for (let i = 0; i < shuffledTestList.length; i++) {
      let groupIndex = floor(i / studentsPerGroup); // which group (0..groupNum-1)
      let posInGroup = i % studentsPerGroup; // student’s spot inside group

      // layout groups in a grid
      let groupsPerRow = 3; // how many groups before wrapping to a new "line"
      let groupCol = groupIndex % groupsPerRow;
      let groupRow = floor(groupIndex / groupsPerRow);

      let x = 250 + groupCol * 150; // group spacing horizontally
      let y = 40 + groupRow * 100 + posInGroup * 20; // group spacing vertically

      text(shuffledTestList[i], x, y);
    }
  }
}

function keyPressed() {
  if (keyIsDown(ENTER)) {
    let s = studentInput.value();
    studentList.push(s);
    studentInput.value("");
  }

  console.log(studentList);
}

function shuffleNames() {
  shuffledTestList = shuffle(studentList);
}

function deleteNames() {
  // studentList = [];
  studentList.splice(1, 1);
}

function clearNames() {
  studentList = [];
}
