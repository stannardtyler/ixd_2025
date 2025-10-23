class Button {
  constructor(tempX, tempY, tempW, tempH, tempFunction, tempText) {
    this.x = tempX;
    this.y = tempY;
    this.w = tempW;
    this.h = tempH;
    //this.color = 0;
    this.buttonFunction = tempFunction;
    this.text = tempText;
  }

  rollover(px, py) {
    //checks the vertical and horizontal edges independently
    if (
      px > this.x - this.w / 2 &&
      px < this.x + this.w / 2 &&
      py > this.y - this.h / 2 &&
      py < this.y + this.h / 2
    ) {
      //   this.color = 255;
      return true;
    } else {
      //   this.color = 0;
      return false;
    }
  }

  show() {
    fill(255);
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
    fill(0);
    textSize(12);
    textAlign(CENTER);
    text(this.text, this.x, this.y + 3);
  }
}
