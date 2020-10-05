var papere
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);
groundSprite = createSprite(width/2,400,1900,30);
groundSprite.shapeColor = color(255,0,0)
 paper1 = createSprite(100,300,50,50)
 paper1.visible = false;
 
 papere = new Paper(500,400,50,50);
 papere.visible = true;
 
 dustbinSprite = createSprite(1020,375,200,20);
 dustbinSprite.shapeColor = "white";

 sidebin1 = createSprite(920,335,20,100);
 sidebin1.shapeColor = "white";

 sidebin2 = createSprite(1120,335,20,100);
 sidebin2.shapeColor = "white";
 
	engine = Engine.create();
	world = engine.world;

 
	//Create the Bodies Here.
Ground = Bodies.rectangle(100,400,2500,30);
World.add(world, Ground)

Dustbin = Bodies.rectangle(1000,390, 200, 10)
World.add(world, Dustbin)

Dustbin2 = Bodies.rectangle(920,335, 20, 70)
World.add(world, Dustbin2)

Dustbin3 = Bodies.rectangle(1120, 335 , 20, 70)
World.add(world, Dustbin3)

papere = Bodies.circle(100,340,55,55);
World.add(world, papere);
	Engine.run(engine);
  
}


function draw() {
	background(0)
  Engine.update(engine);
  rectMode(CENTER);
  paper1.x=papere.position.x
  paper1.y = papere.position.y
  ellipse(paper1.x, paper1.y, 55, 55);
  Matter.Body.setStatic(Ground, true);
  Matter.Body.setStatic(Dustbin, true);
  Matter.Body.setStatic(Dustbin2, true);
  Matter.Body.setStatic(Dustbin3, true);
  
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    
	Matter.Body.applyForce(papere,papere.position,{x:0.5,y:-0.5})
  }

}


