class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
    car1 = createSprite(100,200);
    car2 = createSprite(300,200);
    car3 = createSprite(500,200);
    car4 = createSprite(700,200);

    cars=[car1,car2,car3,car4]
    
  }




  play(){
    form.hide();
    textSize(20);
    text("START GAME", 200,150)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      //var display_position = 200;          
      var index = 0;
      var x = 0;
      var y;       
      for (var plr in allPlayers){
        console.log(player.index);
        index += 1;
        x +=100;
        y = displayHeight-allPlayers[plr].distance;

// player1  index =1 cars=[car1,car2,car3,car4];------player1 - car1---cars[0]---
// sprite.x and sprite.y --- cars[0]---cars[index-1].x = x;

        cars[index-1].x=x;
        cars[index-1].y=y;
        if(index=== player.index){
          cars[index-1].shapeColor="Red";
        }
       else{
        cars[index-1].shapeColor="Black";
       }
      //  display_position += 25;
      // textSize(18);
      // text(allPlayers[plr].name + " : " + allPlayers[plr].distance,130,display_position);
      }
      
      // Muhammed : 100 
    }
  if(keyIsDown(UP_ARROW)&& player.index !== null){
    player.distance += 50;
    player.update();
  }
    
  }

}
