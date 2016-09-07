var dot = {
  x: 100,
  y: 50,
  size: 24
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
  col.r = random(0, 255);
  dot.x = random(0, width);
  dot.y = random(0, height);
  dot.size = random(8, 30);
  noFill();
  var colNumber = Math.floor(random(0,5));
  stroke(col[colNumber]);
  ellipse(dot.x, dot.y, dot.size, dot.size);
}