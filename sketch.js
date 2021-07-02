var database;
var Gamestate = 0;
var Playercount=0;
var game,form,player;
var allplayers;
function setup() {
createCanvas(800,400);

  database=firebase.database();

  game =new Game;
  game.getState();
  game.start();

}

function draw() {
  background(255,255,255); 
  if(Playercount===4){
    game.update(1)
  } 
  if(Gamestate===1){
    game.play();
  }
  drawSprites();
}