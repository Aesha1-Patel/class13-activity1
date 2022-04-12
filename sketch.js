var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var score=0;
var cloud, cloudsGroup, cloudImage;



var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  obstacle1=loadImage("obstacle1.png");
  obstacle2=loadImage("obstacle2.png");
  obstacle3=loadImage("obstacle3.png");
  obstacle4=loadImage("obstacle4.png");
  obstacle5=loadImage("obstacle5.png");
  obstacle6=loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  text("score: "+score, 500,30)
  
  if(keyDown("space")&& trex.y >= 161) {
    trex.velocityY = -13;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
  spawnObstacles();
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,100))
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 210;
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }

}
function spawnObstacles(){
  if (frameCount%60==0){
    obstacle=createSprite(600,165,10,40);
    obstacle.velocityX=-4;
    var select=Math.round(random(1,6));
    
    switch(select){
      case 1: obstacle.addImage("o1", obstacle1)
      break;
      case 2: obstacle.addImage("o2", obstacle2)
      break;
      case 3: obstacle.addImage("o3", obstacle3)
      break;
      case 4: obstacle.addImage("o4", obstacle4)
      break;
      case 5: obstacle.addImage("o5", obstacle5)
      break;
      case 6: obstacle.addImage("o6", obstacle6)
      break;
      default: break;
    }
    obstacle.scale=0.5
    obstacle.lifetime=160;
  }
}

