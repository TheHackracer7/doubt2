var heliImg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var options,package,ground,ground2,area1,area2,area3;

function preload()
{


heliImg=loadImage("helicopter.png");



}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	
	
	
	
	options={isStatic:true, restitution: 1}
		
	

	
	
	

	
	

	
	
	
	helicopterSprite=createSprite(width/2,200, 10,10);
	helicopterSprite.addImage(heliImg)
	helicopterSprite.scale=0.6




	package=new Package(400,200,20,20);

    ground=new Ground(400,650,800,10);

	
	ground2=new Ground(300,630,10,50);
	ground3=new Ground(450,630,10,50);
	

	
	


	 
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  Engine.update(engine);

  
 if(keyDown("DOWN_ARROW"))
 {
 
	 this.body=Bodies.rectangle({isStatic:false});
 
 
 
 console.log("true");
 
 
 
 }

 

  
  ground.display();
  package.display();
 ground3.display();
 ground2.display();


 
  drawSprites();
 
}



