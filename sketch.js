var car,wall,speed,weight,deformation
function setup() {
  createCanvas(1600,400);
 car=createSprite(50, 200, 50, 50);
  wall=createSprite(1300,200,60,200);
  car.shapeColor="Grey";
  wall.shapeColor=80,80,80;
  speed=random(50,90);
  weight=random(400,1500);
  deformation=(0.5*weight*speed*speed)/22500
}

function draw() {
  background(0);  
  drawSprites();
  car.velocityX=speed;
  if(wall.x-car.x<wall.width/2+car.width/2){
    car.velocityX=0;
    if(deformation<100){
      car.shapeColor="green";
    }
    if(deformation>100&&deformation<180){
      car.shapeColor="yellow"
    }
    if(deformation>180){
      car.shapeColor="red";
    }
  }
}
/*var car,wall
var speed,weight,deformation
function setup() {
  createCanvas(1600,400);
  speed=random(50,90);
  weight=random(400,1500);
  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed;
  wall=createSprite(1500,200,60,800);
  wall.shapeColor(80,80,80);
  deformation=(speed*weight*0.5*speed)/22500;
}

function draw() {
  background(0,0,0);  
  drawSprites();
  if(wall.x-car.x<wall.width/2+car.width/2){
  text(deformation,100,300);
  }
} */