
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var score =0;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

var thor1, villan5, strombreaker,gameover, background, powerUp, hammer;
var thor1Img,villan5Img, villan4Img, gameoverImg, backgroundImg, powerUpImg, hammerImg;
var villan5Group, villan4Group;
var score = 0;

var life =20;
var score=0;
var gameState=1

function preload(){
	thor1Img = loadImage("image/thor.png")
	gameoverImg = loadImage("image/gameOver.png")
	villan5Img = loadImage("image/v2.png")
	villan4Img = loadImage("image/v3.png")
	backgroundImg= loadImage("image/gtaGraphic.png")
	hammerImg= loadImage("image/hammer.png")
	//powerUpImg= loadImage("image/powerUp2.png")
}

function setup() {
	createCanvas(15000, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//bg= createSprite(50, width/2, 100,height);
	//bg.addImage(backgroundImg)
	//bg.scale = 50
	
	thor1= createSprite(100, height/2, 50,50);
	thor1.addImage(thor1Img)
	thor1.scale=1
	//hammer = createSprite(100,200,10,10);
	//hammer.addImage(hammerImg)
	//hammer.scale = 0.88
	var options = {
		isStatic: true
	}
    hammer = Bodies.rectangle( thor1.x +120,thor1.y -50,100,100,options);
	World.add(world,hammer);
	//powerUp= createSprite(100, height/2, 100,50);
	//powerUp.addImage(powerUpImg)
	//powerUp.scale=0.2
	 
	villan5Group = createGroup();   
	villan4Group = createGroup(); 


	Engine.run(engine);
  
}

function draw() {
	background(backgroundImg);
	//imageMode(CENTER);
	//image(backgroundImg,800,450,width*10,900)
  
	
	  
  
  
       //thor1.x = camera.position.x-7350
       //camera.position.x = thor1.x +7350;

	   hammer.position.x = thor1.x +120;
	   hammer.position.y = thor1.y -50;

	   if(keyDown("d")){
		   thor1.x += 20;
		 }
		 if(keyDown("a")){
			thor1.x -= 20;
		}
		if(keyDown("w")){
			thor1.y -= 20;
		}
	if(keyDown("s")){
			thor1.y += 20;
		}

		if(keyDown(UP_ARROW)){
          hammer.angle +=1
		}
		//if(keyDown("space") && thor1.y >= 159) {
			//thor1.velocityY = -12;
		 // }
         push();
		 translate(hammer.position.x,hammer.position.y);
		 rotate(hammer.angle)
		 imageMode(CENTER);
		 image(hammerImg,0,0,200,200);
		 pop();
         console.log(hammer);
	  
     spawnVillan();
	  drawSprites();

	   
  }


  function spawnVillan(){
	  if(frameCount % 200 === 0) {
		var villan4 = createSprite(600,120,40,10);
        villan4.y =thor1.y;
		villan4.addImage(villan4Img);
		villan4.scale = 0.3;
		villan4.valocityX = -4;
	  }
  }