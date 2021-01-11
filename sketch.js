var garden, jerry,tom;
var gardenImage, jerryImage,tomImage;
var jeerryHappy,tomHappy;
function preload() {
    //load the images here

 gardenImage = loadImage("garden.png")

 jerryImage = loadAnimation("jerryOne.png","jerryThree.png","jerryTwo.png","jerryFour.png",jeerryHappy)

 tomImage = loadAnimation("tomOne.png","tomThree.png","tomTwo.png","tomFour.png",tomHappy)
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    garden = createSprite(300,800,50,50)
    garden.addImage(gardenImage)
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

    //For moving and changing animation write code here
  
  
  }
  