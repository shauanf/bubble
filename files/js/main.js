let bubble;
let itBe;

function setup() {
  createCanvas(600, 500);
  bubble = new Bubble();
  console.log(bubble.x, bubble.y)
}

function draw() {
  background(0);
  // move();
  // show();
}

class Bubble {
  constructor() {
    this.x = 200;
    this.y = 150;
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }


  show() {
    stroke(255);
    strokeweight(4);
    noFill();
    ellipse(bubble.x, bubble.y, 24, 24);
  }

}
