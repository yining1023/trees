var dot = {
  x: 100,
  y: 50,
  size: 24,
  leftBranchX: 100 - 24,
  leftBranchY: -24,
  rightBranchX: 24,
  lefttBranchY: -24
}

var col = [
  "#f44b33",//red
  "#FFC927",//green
  "#31b0e3",//blue
  "#F9AA3A",//orange
  "#45D152"//yellow
]

function setup() {
  createCanvas(1000, 600);
  background(250);
}

function draw() {
  dot.x = random(20, width - 20);
  dot.y = random(20, height - 20);
  dot.size = random(8, 30);
  leftBranchX = - dot.size / 2;
  leftBranchY = - dot.size;
  rightBranchX = dot.size * random(1, 1.5);
  rightBranchY = - dot.size;
  noFill();
  var colNumber = Math.floor(random(0,5));
  stroke(col[colNumber]);
  
  push();
  translate(dot.x, dot.y);
  var rotateAngle = random(0, PI);
  rotate(rotateAngle);
  
  //main branch
  line(0, 0, 0, dot.size * random(1, 2));

  line(0, 0, - dot.size / 2, leftBranchY);
  line(0, 0, rightBranchX, rightBranchY);
  line(rightBranchX * 1 / 3, rightBranchY * 1 / 3, rightBranchX * 1 / 3 + dot.size *3 / 4, rightBranchY * 1 / 3);

  pop();
}