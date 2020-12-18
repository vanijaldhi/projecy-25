
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground, box1 ,box2 ,box3


function setup() {     
	var canvas =createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var options={
		isStatic: true
	}
   ground = Bodies.rectangle(400,680,800,20,options);
   World.add(world,ground);

   box1 = Bodies.rectangle(700,620,20,100,options)
   World.add(world,box1);
 
   box2 = Bodies.rectangle(500,620,20,100,options)
   World.add(world,box1);
 
   box3 = Bodies.rectangle(600,660,200,20,options)
   World.add(world,box1);

   paper = new Paper();

	Engine.run(engine);
  
}

function draw() {
 
  background(0);

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20);

  rectMode(CENTER)
  rect(box1.position.x,box1.position.y,20,100);

  rectMode(CENTER)
  rect(box2.position.x,box2.position.y,20,100);

  rectMode(CENTER)
  rect(box3.position.x,box3.position.y,200,20);

   paper.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-185});
  }

}



