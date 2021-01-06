function preload(){
  bg = loadImage("Clocky.png")
}
//Alden Ryan
function setup() {
  createCanvas(450,450);
  angleMode(DEGREES);
}

function draw() {
//Bg
  background(bg);

  fill(255);
  textSize(24);
  fill("black");
  text("Ticky Tocky Clocky hehehe😀😀", 10,400); 
  text("Alden Ryan..AJ😀😀", 10,420); 
  

translate(200,200)
rotate (-90);
//time
  var hr = hour();
  var mn = minute();
  var sc = second();
  
  strokeWeight(8);
  stroke("blue");
  noFill();
  var end = map(sc,0,60,0,360);
  arc(0,0,300,300,0,end);
  
  stroke("gold");
  var end2 = map(mn,0,60,0,360);
  arc(0,0,280,280,0,end2);
  
  stroke("red");
  var end3 = map(hr%12,0,12,-0,360);
  arc(0,0,260,260,0,end3);
  
  push();
  rotate(end);
  stroke("red");
  line(0,0,100,0);
  pop();
  //colours
  
  push();
  rotate(end2);
  stroke("blue");
  line(0,0,75,0);
  pop();
  
  push();
  rotate(end3);
  stroke("Orange");
  line(0,0,50,0);
  pop();
  
  stroke("Gold");
  point (0,0);

  }