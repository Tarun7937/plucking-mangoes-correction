
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground,tree,mango1,stone,launcher,mango2,mango3,mango4,mango5

function preload()
{
	boyimg = loadImage("images/boy.png")
	treeimg = loadImage("images/tree.png")
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	

	ground  = new Ground(600,580,1300,20)
//	tree = new Tree (950,360)
	mango1 = new Mango(950,200,20,20);
	mango2 = new Mango(1100,170,20,20);
	mango3 = new Mango(990,150,20,20);
	mango4 = new Mango(920,140,20,20);
	mango5 = new Mango(940,290,20,20);

	
	stone = new Stone(130,390,30)
	launcher = new Launcher(stone.body,{x:130,y:390});
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  image(boyimg,100, 340 , 200, 300);
  image(treeimg,750,100,500,500);
  //tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  launcher.display();
  detectcollision(stone,mango1);
  detectcollision(stone,mango2);
  detectcollision(stone,mango3);
  detectcollision(stone,mango4);
  detectcollision(stone,mango5);
//  keyPressed();
 // drawSprites();

 
}

function mouseDragged (){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})

}
function mouseReleased(){
    launcher.fly ();
}
 function detectcollision(stoneobj,mangoobj){
	 mangoposition = mangoobj.body.position
	 stoneposition = stoneobj.body.position
	var distance = dist(stoneposition.x,stoneposition.y,mangoposition.x,mangoposition.y);
 if(distance<=stoneobj.r+mangoobj.r){
	 Matter.Body.setStatic(mangoobj.body,false);
 }





}
function keyPressed(){
	if(keyCode === 32 ){
		Matter.Body.setPosition(stone.body,{x:130,y:390})
		launcher.attach(stone.body);
	
	}
}

