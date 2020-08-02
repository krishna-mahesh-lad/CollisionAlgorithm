var movablerect, rect;

function setup() {
  createCanvas(800,400);

  rect = createSprite(300, 200, 50, 100);
  rect.shapeColor = "green";

  movablerect = createSprite(600, 200, 100, 50);
  movablerect.shapeColor = "green";
}

function draw() {
  background(255,255,255);  

  movablerect.x = mouseX;
  movablerect.y = mouseY;

  if(movablerect.x-rect.x<rect.width/2+movablerect.width/2&&rect.x-movablerect.x<rect.width/2+movablerect.width/2&&movablerect.y-rect.y<rect.width/2+movablerect.width/2&&rect.y-movablerect.y<rect.width/2+movablerect.width/2)
  {
    rect.shapeColor = "red";
    movablerect.shapeColor = "red";
  }
  else
  {
    rect.shapeColor = "green";
    movablerect.shapeColor = "green";
  }
  drawSprites();
}