const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var boy
var boyimg
var tree
var treeimg

var ground
var stone
var mango1
var mango2
var mango3
var mango4
var mango5
var mango6
var mango7
var mango8
var mango9
var chain1

function preload()
{
	boyimg = loadImage("boy.png")
	treeimg = loadImage("tree.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = createSprite(150,630,10,10)
	boy.addImage(boyimg)
	boy.scale = 0.09
	tree = createSprite(600,480,10,10)
	tree.addImage(treeimg)
	tree.scale = 0.35
	
	mango1 = new Mango(650,300,50)
	mango2 = new Mango(550,400,40)  
	mango3 = new Mango(500,300,43)
	mango4 = new Mango(650,300,50)
	mango5 = new Mango(700,450,20)
	mango6 = new Mango(600,450,50)
	mango7 = new Mango(600,300,20)
	mango8 = new Mango(450,420,35)
	mango9 = new Mango(600,350,20)
	stone = new Stone()
	ground = new Ground()
	
	chain1 = new Chain(stone.body,{x:100,y:575}) 


	Engine.run(engine);
      

}


function draw() {
  rectMode(CENTER);
  background(200);
  drawSprites();
  detectcolision(stone,mango1)
 detectcolision(stone,mango2)
 detectcolision(stone,mango3)
 detectcolision(stone,mango4)
 detectcolision(stone,mango5)
 detectcolision(stone,mango6)
 detectcolision(stone,mango7)
 detectcolision(stone,mango8)
 detectcolision(stone,mango9)
  ground.display();
  stone.display();
  mango1.display();
  mango2.display()  
  mango3.display()  
  mango4.display()  
  mango5.display() 
  mango6.display() 
  mango7.display()
  mango8.display()
  mango9.display()
 chain1.display()

 

 
}


function mouseDragged(){
	Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	chain1.fly()
}


function detectcolision(bodyA,bodyB){
var	mangopos = bodyA.body.position
var stonepos = bodyB.body.position

	var distance = dist(stonepos.x,stonepos.y,mangopos.x,mangopos.y)
   if (distance<=bodyA.r+bodyB.r){
	   Body.setStatic(bodyB.body,false)
   }
}