//Create variables here
var dog
var happyDog
var database
var foodS
var foodStock
var button1, button2
var fedTime, lastFed
function preload()
{
  //load images here
  dogHungry = loadImage("images/dogImg.png");
  dogHappy = loadImage("images/dogImg1.png");

}

function setup() {
  createCanvas(500,500);
  dog = createSprite(250,250,50,50);
  dog.addImage(dogHungry);
  database = firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46, 139, 87)
  if(keyWentUp(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

  drawSprites();

  //add styles here

}

function readStock(data){
  foodS-data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}


