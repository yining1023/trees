// Stochastic Tree with angles fluctuating with Perlin noise
// Daniel Shiffman <http://www.shiffman.net>
// Nature of Code, Chapter 8

// Perlin noise offset 
float yoff = 0;
// Random seed to control randomness while drawing the tree
int seed = 5;
float flowerSize = 3;
float flowerCol = 0;
//float i = 0;

void setup() {
  size(1000, 600);
  smooth();
  //frameRate(10);
  //background(#fdf3e5);
}

void draw() {
  background(#fdf3e5);
  //background(#f9e4e4);//light pink
  fill(30);

  stroke(30);
  // Start the tree from the bottom of the screen
  //pushMatrix();
  translate(width/2, height);
  // Move alogn through noise
  yoff += 0.001;
  randomSeed(seed);
  // Start the recursive branching!
  branch(100, 0);
  //popMatrix();
  
  translate(width/4, -height/5);
  branch(60, 0);
  translate(width/10, 0);
  branch(40, 0);
  
  translate(-width/1.5, height/3);
  branch(130, 0);
}


void mousePressed() {
  // New tree starts with new noise offset and new random seed
  yoff = random(1000);
  seed = millis();
}

void animatedLines(float i, float h){
  if(i < h) {
    line(0, 0, 0, -i);
    animatedLines(i + 1, h);
  }
  if(i > h){
    i = h;
  }
}
void branch(float h, float xoff) {
  // thickness of the branch is mapped to its length
  float sw = map(h, 2, 100, 0.3, 4);
  strokeWeight(sw);
  // Draw the branch
  line(0, 0, 0, -h);
  
  if (h < 5) { //when the branch is short enough, add flower
    noStroke();
    
    flowerCol = random(0, 1);
    if(flowerCol <= 0.7){
      fill(255);
    }else{
      fill(250, 146, 183, 100);//pink
      //fill(250, 234, 52, 100);//yellow
    }   
    flowerSize = random(3, 9);
    ellipse(0, -h, flowerSize, flowerSize);
    fill(30);
    stroke(30);
  }
  
  // Move along to end
  translate(0, -h);

  // Each branch will be 2/3rds the size of the previous one
  h *= 0.7f;
  
  // Move along through noise space
  xoff += 0.01;

  if (h > 3) {
    // Random number of branches
    int n = int(random(1, 4));
    for (int i = 0; i < n; i++) {
      
      // Here the angle is controlled by perlin noise
      // This is a totally arbitrary way to do it, try others!
      float theta = map(noise(xoff+i, yoff), 0, 1, -PI/3, PI/3);
      if (n%2==0) theta *= -1;
      
      pushMatrix();      // Save the current state of transformation (i.e. where are we now)
      rotate(theta);     // Rotate by theta
      //i = 0;
      branch(h, xoff);   // Ok, now call myself to branch again
      popMatrix();       // Whenever we get back here, we "pop" in order to restore the previous matrix state
    }
  }
}