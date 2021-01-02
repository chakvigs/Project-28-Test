
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {
	boyImage = loadImage("images/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	treeObject = new Tree(575, 467, 200, 400);
	groundObject = new Ground(400, 675, 800, 50);
	stoneObject = new Stone(100, 500, 50);
	mangoObject1 = new Mango(450, 400, 30, 30);
	mangoObject2 = new Mango(525, 425, 30, 30);
	mangoObject3 = new Mango(575, 325, 30, 30);
	mangoObject4 = new Mango(625, 375, 30, 30);
	mangoObject5 = new Mango(700, 400, 30, 30);
	elasticObject = new Elastic(stoneObject, {x:110, y:510})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  treeObject.display();
  groundObject.display();
  stoneObject.display();
  mangoObject1.display();
  mangoObject2.display();
  mangoObject3.display();
  mangoObject4.display();
  mangoObject5.display();
  elasticObject.display();
  image(boyImage, 100, 475, 150, 250);
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stoneObject.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    elasticObject.fly();
}