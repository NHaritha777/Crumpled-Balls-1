const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, paperbody,ground	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;
	dustbin1=new dustbin(1100,630,200,20);
	dustbin2= new dustbin(1200,580,20,130);
	dustbin3= new dustbin(1000,580,20,130);
	paperbody=new paper(200,450,40);
	ground=new Ground(width/2,650,width,20);
	//Create a Ground
	
	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paperbody.display();
  ground.display();
  
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperbody.body,paperbody.body.position,{x:85,y:-85});
    
  	}
}
