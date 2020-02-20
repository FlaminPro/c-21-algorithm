var fixedrect,movingrect,gameobject;



function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(400, 600, 50, 80);
fixedrect.shapeColor = "green";
movingrect = createSprite(400,200,80,30);
movingrect.shapeColor = "green";
fixedrect.debug = true;
movingrect.debug = true;
movingrect.velocityY = 5;
fixedrect.velocityY = -5;
gameobject = createSprite(400,400,50,50);
gameobject.velocityY = -5;

}

function draw() {
  background(0,0,0);  
  bounceoff(gameobject,movingrect);
if (isTouching(fixedrect,movingrect)){
  movingrect.shapeColor = "red";
  fixedrect.shapeColor = "red";
}
else {
  movingrect.shapeColor = "green";
  fixedrect.shapeColor = "green";
}
 


  drawSprites();
  
}
