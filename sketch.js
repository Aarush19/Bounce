const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld;
var box1;

function setup() {
  createCanvas(800,400);
  myengine = Engine.create();
  myworld = myengine.world;
  box1 = new box(550,250,80,80);
  box2 = new box(600,50,80,100);
  ground1 = new ground(400,380,800,30);
}

function draw() {
  background(0); 
  Engine.update(myengine);
  box1.display();
  box2.display();
  ground1.display();
}