
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(800,675,40);
	bobObject2 = new Bob(810,675,40);
	bobObject3 = new Bob(820,675,40);
	bobObject4 = new Bob(790,675,40);
	bobObject5 = new Bob(780,675,40);

	roof = new Roof(800,175,230,20);

	rope1 = new Rope(bobObject5.body, roof.body, -80, 0);
	rope2 = new Rope(bobObject4.body, roof.body, -40, 0);
	rope3 = new Rope(bobObject1.body, roof.body, 0, 0);
	rope4 = new Rope(bobObject2.body, roof.body, 40, 0);
	rope5 = new Rope(bobObject3.body, roof.body, 80, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("Grey");
  
	roof.display();
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();

  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(bobObject5.body, bobObject5.body.position,{x: -50, y:-50})
	}
}