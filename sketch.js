function setup() {
  createCanvas(400,400);
 angleMode(DEGREES);
  }

function draw() {
  background("black");
  var hr = hour();
  var mn = minute();
  var sc = second();

  translate(200,200);
  rotate(-90);

 /* strokeWeight(8);
  stroke(255,100,150);*/

  strokeWeight(4);
  stroke(255);
  noFill();
 
  var secondAngle = map(sc,0,60,0,360);
  arc(0,0,300,300,0,secondAngle);
  push();
  rotate(secondAngle);
  stroke(255);
  line(0,0,100,0);
  pop();

  var minuteAngle = map(mn,0,60,0,360);
  arc(0,0,280,280,0,minuteAngle);
  push();
  rotate(minuteAngle);
  stroke(255);
  line(0,0,75,0);
  pop();

  var hourAngle = map(hr % 12,0,12,0,360);
  arc(0,0,260,260,0,hourAngle);
  push();
  rotate(hourAngle);
  stroke(255);
  line(0,0,50,0);
  pop();

  // ellipse(200,200,300,300);

  /*  fill(255);
  noStroke();
  text(hr + ':'+ mn + ':' + sc,10,200);*/
   drawSprites();
}