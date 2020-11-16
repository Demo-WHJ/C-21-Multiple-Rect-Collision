var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "green";
}

function draw() {
  background(0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, gameObject1)){
    movingRect.shapeColor = "red";
    gameObject1.shapeColor = "red";
    console.log("gameObject1")
  }
  else if (isTouching(movingRect, gameObject2)){
    movingRect.shapeColor = "yellow";
    gameObject2.shapeColor = "yellow";
    console.log("gameObject2")
  }
  else if (isTouching(movingRect, gameObject3)){
    movingRect.shapeColor = "teal";
    gameObject3.shapeColor = "teal";
    console.log("gameObject3")
  }
  
  else if (isTouching(movingRect, gameObject4)){
    movingRect.shapeColor = "blue";
    gameObject4.shapeColor = "blue";
    console.log("gameObject4")
  }
  else if (isTouching(movingRect, fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
    console.log("fixedRect")
  }
  else  {
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
    gameObject2.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}