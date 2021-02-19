
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5,bob6;
var roof1;
var chain1,chain2,chain3,chain4,chain5,chain6;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

      bob1=new Bob(180,400,80,80);
      bob2=new Bob(260,400,80,80);
      bob3=new Bob(340,400,80,80);
      bob4=new Bob(420,400,80,80);
      bob5=new Bob(500,400,80,80);
     

	  roof1=new Roof(335,200,400,20);

    chain1=new Chain(bob1.body,roof1.body,-159,0);
    chain2=new Chain(bob2.body,roof1.body,-80,0);
    chain3=new Chain(bob3.body,roof1.body,0,0);
    chain4=new Chain(bob4.body,roof1.body,80,0);
    chain5=new Chain(bob5.body,roof1.body,160,0);
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
   

   if(keyWentDown("left")){
     bob1.body.position.x=bob1.body.position.x-20;
   }
  
 
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  

  bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
 

  roof1.display();
  
 
  drawSprites();
 
}



