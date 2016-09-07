var col = {
  r: 240,
  g: 241,
  b: 96
}

function setup() {
  createCanvas(1000, 700);
  stroke('#533905');
  strokeWeight(1.5);
  col.r = random(200, 240);
  col.g = random(235, 248);
  col.b = random(33, 96);
  img = loadImage("branch.png");
}

function draw() {
  background(250);
  image(img, width/2.17, height/2 + 37);
//1
  push();
  translate(width*0.32, height*0.2);
  rotate(frameCount / 200.0);
  
  fill(col.r+10, col.g+15, col.b+20);
  ellipse(0, 0, 137);
  
  fill(col.r+10, col.g+15, col.b+10);
  ellipse(0, 0, 120);
  
  fill(col.r+10, col.g+15, col.b+10);
  ellipse(0, 0, 110);
  
  fill(col.r+10, col.g+15, col.b+10);
  ellipse(0, 0, 80);
  
  fill(col.r+2, col.g-5, col.b+10);
  ellipse(0, 0, 75);

  fill(col.r, col.g, col.b);
  star(0, 0, 5, 70, 7); 
  pop();
  
//2  
  push();
  translate(width*0.5, height*0.4);
  rotate(frameCount / 50.0);
  
  fill(col.r+10, col.g+15, col.b+10);
  ellipse(0, 0, 200);
  
  fill(col.r - 15, col.g, col.b + 20);
  star(0, 0, 80, 100, 40); 
  
  fill(col.r+10, col.g+15, col.b+10);
  ellipse(0, 0, 110);
  
  fill(col.r+10, col.g+15, col.b+10);
  ellipse(0, 0, 80);
  
  fill(col.r+2, col.g-5, col.b+10);
  ellipse(0, 0, 75);
  
  fill(col.r - 5, col.g, col.b + 10);
  star(0, 0, 20, 35, 30); 
  
  pop();

//3  
  push();
  translate(width*0.69, height*0.18);
  rotate(frameCount / -100.0);
  
  fill(col.r+2, col.g-5, col.b+10);
  ellipse(0, 0, 141);
  
  fill(col.r+10, col.g+15, col.b+10);
  ellipse(0, 0, 60);
  
  fill(col.r+10, col.g+15, col.b+10);
  ellipse(0, 0, 55);
  
  fill(col.r+10, col.g+15, col.b+10);
  ellipse(0, 0, 40);
  
  fill(col.r+2, col.g-5, col.b+10);
  ellipse(0, 0, 25);
  
  
  // fill(col.r + 15, col.g, col.b - 10);
  noFill();
  star(0, 0, 30, 70, 10); 
  pop();
  
//4  
  push();
  translate(width*0.6, height*0.25);
  rotate(frameCount / -100.0);
  
  fill(col.r+10, col.g+15, col.b+10);
  ellipse(0, 0, 60);
  
  fill(col.r+8, col.g+25, col.b+12);
  ellipse(0, 0, 55);
  
  fill(col.r+10, col.g+5, col.b+10);
  ellipse(0, 0, 40);
  
  fill(col.r+12, col.g-5, col.b+7);
  ellipse(0, 0, 25);
  
  
  // fill(col.r + 15, col.g, col.b - 10);
  noFill();
  star(0, 0, 5, 20, 15); 
  pop();
  
//5  
  push();
  translate(width*0.35, height*0.5);
  rotate(frameCount / 50.0);
  
  fill(col.r - 15, col.g, col.b + 20);
  star(0, 0, 20, 30, 10); 
  
  fill(col.r-10, col.g+20, col.b+10);
  ellipse(0, 0, 12);
  
  fill(col.r+10, col.g+25, col.b+10);
  ellipse(0, 0, 40);
  
  fill(col.r-12, col.g+15, col.b+10);
  ellipse(0, 0, 25);
  
  fill(col.r - 15, col.g, col.b + 10);
  star(0, 0, 10, 15, 30); 
  
  pop();
  
  
  //6
  push();
  translate(width*0.45, height*0.21);
  rotate(frameCount / 200.0);
  
  fill(col.r-10, col.g+15, col.b+10);
  ellipse(0, 0, 80);
  
  fill(col.r+2, col.g-5, col.b+10);
  ellipse(0, 0, 75);

  fill(col.r, col.g, col.b);
  star(0, 0, 25, 35, 7); 
  pop();
  
  //7
  push();
  translate(width*0.63, height*0.49);
  rotate(frameCount / 200.0);
  
  fill(col.r-10, col.g+15, col.b+10);
  ellipse(0, 0, 80);
  
  fill(col.r+2, col.g-5, col.b+10);
  ellipse(0, 0, 75);

  fill(col.r, col.g, col.b);
  star(0, 0, 5, 35, 17); 
  pop();
  
  //8  
  push();
  translate(width*0.35, height*0.35);
  rotate(frameCount / 50.0);
  
  fill(col.r - 15, col.g, col.b + 20);
  star(0, 0, 25, 30, 10); 
  
  fill(col.r-10, col.g+20, col.b+10);
  ellipse(0, 0, 12);
  
  fill(col.r+10, col.g+25, col.b+10);
  ellipse(0, 0, 40);
  
  fill(col.r-12, col.g+15, col.b+10);
  ellipse(0, 0, 25);
  
  fill(col.r - 15, col.g, col.b + 10);
  star(0, 0, 10, 15, 6); 
  
  pop();
  
  //9  
  push();
  translate(width*0.53, height*0.15);
  rotate(frameCount / -100.0);
  
  fill(col.r+10, col.g+15, col.b+10);
  ellipse(0, 0, 70);
  
  fill(col.r+8, col.g+25, col.b+12);
  ellipse(0, 0, 55);
  
  fill(col.r+10, col.g+5, col.b+10);
  ellipse(0, 0, 45);
  
  // fill(col.r + 15, col.g, col.b - 10);
  noFill();
  star(0, 0, 5, 20, 5); 
  pop();
  
  //10  
  push();
  translate(width*0.3, height*0.42);
  rotate(frameCount / -100.0);
  
  fill(col.r+10, col.g+15, col.b+10);
  ellipse(0, 0, 70);
  
  fill(col.r+8, col.g+25, col.b+12);
  ellipse(0, 0, 55);
  
  fill(col.r+10, col.g+5, col.b+10);
  ellipse(0, 0, 45);
  
  // fill(col.r + 15, col.g, col.b - 10);
  noFill();
  star(0, 0, 5, 20, 5); 
  pop();
  
  //11  
  push();
  translate(width*0.68, height*0.38);
  rotate(frameCount / 50.0);
  
  fill(col.r+10, col.g+25, col.b+10);
  ellipse(0, 0, 105);
  
  fill(col.r - 15, col.g, col.b + 20);
  star(0, 0, 20, 50, 10); 
  
  fill(col.r-10, col.g+20, col.b+10);
  ellipse(0, 0, 12);
  
  fill(col.r+10, col.g+25, col.b+10);
  ellipse(0, 0, 40);
  
  fill(col.r-12, col.g+15, col.b+10);
  ellipse(0, 0, 25);
  
  fill(col.r - 15, col.g, col.b + 10);
  star(0, 0, 10, 5, 3); 
  
  pop();
}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}