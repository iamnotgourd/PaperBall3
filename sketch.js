
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	dustbinImg = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;
	

	ball = new Ball(300,300,24);
	ground = new Ground(600,height,1200,20);
	dustbinBottom = new Dustbin(990,685,200,10);
	dustbinLeft = new Dustbin(895,630,10,100);
	dustbinRight = new Dustbin(1085,630,10,100);
	band = new Band(ball.body,{x:294,y:465})

	



	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background("white");
  band.display();
  ground.display()
  ball.display();
  
  image(dustbinImg, 881,580, 216,110);
  /*dustbinBottom.display();
  dustbinLeft.display();
  dustbinRight.display();*/
  console.log(mouseX)
  console.log(mouseY)

  
  drawSprites();

}
function keyPressed(){
     if(keyCode === UP_ARROW){
		 Matter.Body.applyForce(ball.body,ball.body.position,{x:95,y:-95})
	 }

}
function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    band.fly();
}