var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  
  movingRect = createSprite(600,400,50,50);
  movingRect.debug=true;
  movingRect.shapeColor="green";
  fixedRect = createSprite(400,200.80,100);
  fixedRect.debug=true;
  fixedRect.shapeColor="green";
}

function draw() {
  background(255,255,255);  

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(movingRect.x-fixedRect.x< fixedRect.width/2+movingRect.width/2&&fixedRect.x-movingRect.x< fixedRect.width/2+movingRect.width/2&&
    movingRect.y-fixedRect.y< fixedRect.height/2+movingRect.height/2&&fixedRect.y-movingRect.y< fixedRect.height/2+movingRect.height/2) {
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  

  drawSprites();
}