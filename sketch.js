var moving, fixed;
var car1, car2;

function setup() {
  createCanvas(800,400);

  moving = createSprite(200, 200, 80, 50);
  moving.shapeColor="green";

  fixed = createSprite(400, 200, 50, 80);
  fixed.shapeColor="green";

  car1=createSprite(100, 300, 30, 30);
  car1.shapeColor="blue";
  car1.velocityX=5;

  car2=createSprite(700, 300, 30, 30);
  car2.shapeColor="purple";
  car2.velocityX=-5;
}


function draw() {
  background(0);
  
  moving.x= mouseX

  moving.y= mouseY

  if(moving.x - fixed.x <= moving.width/2 + fixed.width/2 &&
  fixed.x -moving.x <= moving.width/2 + fixed.width/2 &&
  moving.y - fixed.y <= moving.height/2 + fixed.height/2 &&
  fixed.y -moving.y <= moving.height/2 + fixed.height/2){

moving.shapeColor= "red";
fixed.shapeColor= "red";
  }
  else{

    moving.shapeColor= "green";
fixed.shapeColor= "green";
  }

if(car1.x - car2.x <= car1.width/2 + car2.width/2 &&
  car2.x -car1.x <= car2.width/2 + car1.width/2){
car1.velocityX= car1.velocityX*-1;
car2.velocityX= car2.velocityX*-1;
}

  drawSprites();
}