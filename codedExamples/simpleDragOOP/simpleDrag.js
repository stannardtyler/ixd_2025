let cars = [];

function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 5; i++) {
    let y = random(height);
    let c = new Car(
      color(random(255), random(255), random(255)),
      random(width),
      y,
      random(5)
    );

    cars.push(c);
  }
}

function mousePressed() {
  for (let i = 0; i < cars.length; i++) {
    //calls the click function when true
    if (cars[i].click(mouseX, mouseY)) {
      //cars.splice([i], 1); //deletes from array
    }
  }
}

function draw() {
  background(200);

  for (let i = 0; i < cars.length; i++) {
    //cars[i].drive();
    cars[i].display();

    //using the click() function to act as a roll over
    if (cars[i].click(mouseX, mouseY)) {
      if (mouseIsPressed) {
        cars[i].drag();
      }
      //cars[i].info();
    }
  }
}

// Even though there are multiple objects, we still only need one class.
// No matter how many cookies we make, only one cookie cutter is needed.
class Car {
  constructor(tempC, tempXpos, tempYpos, tempXspeed) {
    this.c = tempC;
    this.xpos = tempXpos;
    this.ypos = tempYpos;
    this.xspeed = tempXspeed;
  }

  click(px, py) {
    let halfW = 50 / 2;
    let halfH = 25 / 2;

    if (abs(px - this.xpos) < halfW && abs(py - this.ypos) < halfH) {
      return true;
    } else {
      return false;
    }
  }

  info() {
    fill(255, 50);
    text(this.xspeed.toFixed(1) + " mph", this.xpos + 25, this.ypos - 25);
    rect(this.xpos + 40, this.ypos - 27, 60, 35);
  }

  display() {
    stroke(0);
    fill(this.c);
    rectMode(CENTER);
    rect(this.xpos, this.ypos, 50, 25);
  }

  drag() {
    this.xpos = mouseX;
    this.ypos = mouseY;
  }

  drive() {
    this.xpos = this.xpos + this.xspeed;
    if (this.xpos > width) {
      this.xpos = 0;
    }
  }
}
