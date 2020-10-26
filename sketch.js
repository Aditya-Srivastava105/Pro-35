//Create variables here
var dog;


function preload()
{
  //load images here
  dog = loadImage("images/doglmg.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(200,200,10,10);
}


function draw() {  
  background(100);




  drawSprites();
  //add styles here

}



