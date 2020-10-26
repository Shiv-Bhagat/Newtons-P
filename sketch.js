
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Roof1 = new Roof(500,100,400,40)
bob1 = new Bobball(400,400,25)
	chain1 = new Chain(bob1.body,{x:400,y:100})
	bob2 = new Bobball(450,400,25)

	bob3 = new Bobball(500,400,25)

	bob4 = new Bobball(550,400,25)

	bob5 = new Bobball(600,400,25)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  Roof1.display();
  chain1.display();
  drawSprites();
 
}
function mouseDragged() {
//if (keyCode === UP_ARROW){
	console.log("its working")
	Matter.Body.setPosition(bob1.body , bob1.body.position , {x:mouseX,y :mouseY});
	//Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-85,y:-85})
}
//}



