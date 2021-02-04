var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
  
}



function setup() {
  createCanvas(800,200);
  var message = "this is a message";
  console.log(message);
  
  
  
 monkey = createSprite(50,143,20,50);
   monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
 
  ground = createSprite(200,180,900,15);
  ground.x = ground.width/2;
  ground.shapeColor = "brown";
  
  obstacleGroup = createGroup();
  FoodGroup = createGroup();
  
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  monkey.debug = true
  
  score = 0;
  
}


function draw() {
background ("lightgreen");
  
  text("Score: "+ score,500,50);
  
  
  if(gameState === PLAY){
    ground.velocityX = -(4 + 3* score/100)
    score = score +Math.round(getFrameRate()/60);
  if(ground.x<250) {
    ground.x = ground.width/2;
  }
    
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  drawSprites();
}






