var slant;
var offsetX;


function setup() {
  createCanvas(400, 400);
  slant=200;
  offsetX=0;
}

function draw() {
  background(0);
  

// x1, y1, x2, y2  

  
/*
for(var offset=0; offset <200; offset+= 20){
  line(offset, 0, offset + slant, height);
*/
  
  
  for(var offsetX=0; offsetX <200; offsetX += 20){
    stroke(255,255,255);
    if(offsetX == 0){stroke(225,0,0)}
    if(offsetX == 150){stroke(150,0,0)}
    line(offsetX, 0, offsetX + slant, height);
    }
  
  line(200, 0, 100 - slant, height);
  line(400, 200, 155 - slant, height);
  strokeWeight(5);
  
 
}
