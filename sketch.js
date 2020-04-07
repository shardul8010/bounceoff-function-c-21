var fixedRect,movingRect;




function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 10, 30, 80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY = 2;
  movingRect = createSprite(200,390,80,30)
  movingRect.shapeColor = "green";
  movingRect.velocityY = -2;

}


function draw() {
  background(255,255,255);  

  bounceoff(movingRect,fixedRect)
 
 drawSprites();
}

