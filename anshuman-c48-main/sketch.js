var canvas;
var backgroundImage;

var database;
var form, player;
var playerCount;
var gameState;
var cars,car1 , car2,car3,car4,car5,car6,car7,car8,car9,track1,track2;
var allPlayers;
var cars=[]
var obstacles,fuel,power;

function preload(){
car1Img=loadImage("assets/car1.png");
car2Img=loadImage("assets/car2.png");
/*car3Img=loadImage("assets/.png");
car4Img=loadImage("assests/download (4).png");
car5Img=loadImage("assests/download (5).png");
car6Img=loadImage("assests/download (6).png");
car7Img=loadImage("assets/download (7).png");
car8Img=loadImage("assets/download.png");*/
track1Img=loadImage("assets/track.jpeg");
track2Img=loadImage("assets/track2.jpeg");
obstacle1Img=loadImage("assets/obstacle1.png");
obstacle2Img=loadImage("assets/obstacle2.png");
powerImg=loadImage("assets/power.png");
fuelImg=loadImage("assets/fuel.png");


}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  
}

function draw() {
  background(0);
  if(playerCount===2){
    game.update(1);
  }
  if(gameState===1){
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
