var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload() {
 //animation is loaded for trex_running,trex_collided and ground
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");

  groundImage = loadImage("ground2.png")
}

function setup() {

//canvas is created
  createCanvas(600, 200);

//create a trex sprite
trex = createSprite(50,160,20,50);
//animation is added to trex
trex.addAnimation("running", trex_running);
//size of trex is halfed
trex.scale = 0.5;
  
//create a ground sprite
ground = createSprite(200,180,400,20);
//animation is given to trex
ground.addImage("ground",groundImage);
ground.x = ground.width /2;
//velocity is given to the ground
ground.velocityX = -4;
  //invisible ground is created
invisibleGround=createSprite(200,190,400,10)
 //invisibleground is made invisible
invisibleGround.visible=false
}

function draw() {
background(220);
console.log(trex.y)
//jump when the space button is pressed
if (keyDown("space")&& trex.y>=100) {
  trex.velocityY = -10;
}
//gravity is given to trex
trex.velocityY = trex.velocityY + 0.8
//ground is made to reset once it is finished
if (ground.x < 0) {
  ground.x = ground.width / 2;
}
//trex is made to collide with invisible ground
trex.collide(invisibleGround);
drawSprites();
}