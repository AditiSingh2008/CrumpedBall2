
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin,paper,ground;


function setup() {
	createCanvas(800, 600);
	engine = Engine.create();
	world = engine.world;
ground=new Ground(400,500,800,20);
dustbin=new Dustbin(600,400);
paper=new Paper(150,450,50);
  Engine.run(engine);
}


function draw() {
  rectMode(CENTER)
  background("skyBlue");
  ground.display();
  dustbin.display();
  paper.display();
}
function keyPressed(){
	if (keyCode === UP_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:30,y:-30})
	}
}



