
var dog, happyDog, database, foodS, foodStock
var dogHungry, dogHappy;

function preload()
{
  dogHungry = loadImage("images/dogImg.png")
  dogHappy = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,400,50,50);
  dog.addImage(dogHungry);
  dog.scale = 0.20;

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46, 139, 87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}
  drawSprites();
  textSize(20);
  fill("Orange");
  text("Note: Press UP_ARROW Key to Feed Drago Milk!", 40,100);
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  } else{
    x = x - 1;
  }

  database.ref('/').update({
    Food:x
  });
}



