class Game {
  constructor(){
    

  }
  
getState(){
  var gameStateRef=database.ref("gameState");
    gameStateRef.on("value",data=>{
    gameState=data.val();
  })
}
update(state){
  database.ref("/").update({
    gameState:state
})
 }
  start() {
    form = new Form();
    form.display();
    player = new Player();
    playerCount=player.getCount();
    car1 = createSprite(width/2-50,height-100);
    car1.addImage("abc",car1Img);
    car2 = createSprite(width/2+100,height-100);
    car2.addImage("abc",car2Img);
    cars=[car1,car2];
  

    fuels=new Group();
    obstacles=new Group();
    power-=new Group();
  }
}
    addSprites(spriteGroup,numberOfSprites,spriteImage,scale,positions=[]){
      for(var i=0; i<numberOfSprites;i++){
        var x,y;
        if(position.lenght>0){
          x=position[i].x
          y=position[i].y;
          spriteImage=position[i].image;
        

        }
        else{x=(width/2-150,width/2+150)
         
        }

      
    


  }
  handelElements(){
    form.hide();
    form.titleImg.position40,50
    form.titleImg.class("gameTitleAfterEffect")

  }
  play(){
    this.handelElements();
    Player.getPlayerInfo();
    if(allPlayers!== undefined){
      image(track1Img,0,-height*5,width,-height*6)
      var index=0;
      for(var plr in allPlayers ){
        index=index+1;
        var x =allPlayers[plr].positionX;
        var y = height- allPlayers[plr].postionY;
        cars[index-1].position.x=x;
        cars[index-1].position.y=y;
        if(index===index){
          stroke(10);
          fill("red");
          ellipse(x,y,60);
         camera.position.x=cars[index-1].position.x;
         camera.position.y=cars[index-1].position.y;
        }
      }
      this.handelPlayerControls()


      
      drawSprites();
    }
  }
  handelPlayerControls(){
    if(keyIsDown("UP_ARROW")){
      player.positionY+=10;
      player.update();
    }
  }
  

}
