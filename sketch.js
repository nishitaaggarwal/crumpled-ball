
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1,ground,dustbin2,dustbin3,ball1
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;
	ground=Bodies.rectangle(600,400,1200,20,{isStatic:true})
	World.add(world,ground);
dustbin1=new dustbin(900,375,200,30)
dustbin2=new dustbin(1000,370,30,200)
dustbin3=new dustbin(800,370,30,200)
ball1=new crumpledball(200,370,40,)
	//Create the Bodies Here.
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);
rect(this.ground.position.x,this.ground.position.y,1200,20)

dustbin1.display();
dustbin2.display();
dustbin3.display();


ball1.display();
keypressed();
console.log(ball1)
drawSprites();

}
function keypressed(){
if(keyCode === UP_ARROW){
Body.applyForce(ball1.body,ball1.position,{x:85,y:85})

}	
}



