const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drop1,drop2,drop3,drop4,drop5,drop6,drop7,drop8,drop9,drop10,drop;
var bg;

function preload(){
bg=loadImage("bg.png");
}


function setup() {
  createCanvas(500,400);
  engine = Engine.create();
  world = engine.world;

  drop=new Drop(10,10,10,20);
  drop1=new Drop(10,10,10,20);
  drop2=new Drop(10,10,10,20);
  drop3=new Drop(10,10,10,20); 
  drop4=new Drop(10,10,10,20);
  drop5=new Drop(10,10,10,20);
  drop6=new Drop(10,10,10,20);
  drop7=new Drop(10,10,10,20);
  drop8=new Drop(10,10,10,20); 
  drop9=new Drop(10,10,10,20);
  drop10=new Drop(10,10,10,20);
  

}

function draw() {
  background(bg);  

  Engine.update(engine);

 
    for(var i=10; i<800; i=i+25){
      drop.display(i,0);   
  }

  for(var i=20; i<800; i=i+25){
    drop1.display(i,-50);   
}

for(var i=10; i<800; i=i+25){
  drop2.display(i,-100);   
}

for(var i=20; i<800; i=i+25){
  drop3.display(i,-150);   
}

for(var i=10; i<800; i=i+25){
  drop4.display(i,-200);   
}

for(var i=20; i<800; i=i+25){
  drop5.display(i,-250);   
}
for(var i=20; i<800; i=i+25){
  drop6.display(i,-300);   
}

for(var i=10; i<800; i=i+25){
drop7.display(i,-350);   
}

for(var i=20; i<800; i=i+25){
drop8.display(i,-400);   
}

for(var i=10; i<800; i=i+25){
drop9.display(i,-450);   
}

for(var i=20; i<800; i=i+25){
drop10.display(i,-500);   
}
  

  drawSprites();
  textSize(32);
  fill("coral");
  text("Reset For More Drops",100,200);

}