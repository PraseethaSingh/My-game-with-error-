var database, gameState;
var game,form;


function preload(){
    background1 = loadImage("images/background.png")

}
function setup(){
   
createCanvas(displayWidth,600);
database = firebase.database();
game = new Game();
game.getState();
game.start();

}

function draw(){
//background(background1)

}


