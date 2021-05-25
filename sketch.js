var mario, marioImg, marioHappy, marioAni, screen, invisibleGround, startButton, startImage;

var life1, life2, life3, lifeImg;
var lives;
lives=3;
var score;
score=0;
var coin1, coin2, coin3, coin4, coin5, coin6, coin7, coin8, coin9, coin10, coin11, coin12, coin13, coin14, 
coin15, coinImg;


var mushroom1, mushroom2, mushroom3, mushroom4, mushroom5, mushroom6, mushroom7, mushroom8, mushroom9, mushroom10, mushroom11, mushroom12, mushroom13, mushroom14,
mushroomImg, mushroomGroup;


var gameState;
gameState="START";

function preload() {
    screen=loadImage("images/background.png");
    lifeImg=loadImage("images/life.png");
    coinImg=loadImage("images/coin.png");
    marioAni=loadAnimation("images/Mario (1).png","images/Mario (2).png","images/Mario (3).png","images/Mario (4).png","images/Mario (5).png","images/Mario (6).png",
    "images/Mario (7).png","images/Mario (8).png","images/Mario (9).png","images/Mario (10).png","images/Mario (11).png","images/Mario (12).png",);
    mushroomImg=loadImage("images/mushroom.png");
    startImage=loadImage("images/start.png");
    flagImg = loadImage("images/flag.png")
    logoimg = loadImage("images/logo.png")
}
function setup() {
    canvas = createCanvas(displayWidth - 35, displayHeight-170);

    mario=createSprite(50,680);
    mario.addAnimation("running",marioAni);
    mario.frameDelay = 2
    mario.setCollider("rectangle",0,0,120,180)

    invisibleGround=createSprite(3250,850,6500,20);
    invisibleGround.visible=false;    

    mushroomGroup=createGroup();

    life1=createSprite(1150,random(500,680));
    life1.addImage(lifeImg);
    life1.scale=0.6;

    life2=createSprite(3100,random(500,600));
    life2.addImage(lifeImg);
    life2.scale=0.6;

    life3=createSprite(4500,random(480,510));
    life3.addImage(lifeImg);
    life3.scale=0.6;

    coin1=createSprite(300,random(500,600));
    coin1.addImage(coinImg);
    coin1.scale=0.5;
    coin2=createSprite(500,random(400,500));
    coin2.addImage(coinImg);
    coin2.scale=0.5;
    coin3=createSprite(650,random(500,600));
    coin3.addImage(coinImg);
    coin3.scale=0.5;
    coin4=createSprite(780,random(480,550));
    coin4.addImage(coinImg);
    coin4.scale=0.5;
    coin5=createSprite(860,random(450,500));
    coin5.addImage(coinImg);
    coin5.scale=0.5;
    coin6=createSprite(970,random(500,550));
    coin6.addImage(coinImg);
    coin6.scale=0.5;
    coin7=createSprite(1300,random(500,600));
    coin7.addImage(coinImg);
    coin7.scale=0.5;
    coin8=createSprite(1700,random(400,450));
    coin8.addImage(coinImg);
    coin8.scale=0.5;
    coin9=createSprite(1900,random(500,600));
    coin9.addImage(coinImg);
    coin9.scale=0.5;
    coin10=createSprite(2200,random(530,630));
    coin10.addImage(coinImg);
    coin10.scale=0.5;
    coin11=createSprite(2500,random(400,430));
    coin11.addImage(coinImg);
    coin11.scale=0.5;
    coin12=createSprite(2800,random(530,630));
    coin12.addImage(coinImg);
    coin12.scale=0.5;
    coin13=createSprite(3000,random(450,550));
    coin13.addImage(coinImg);
    coin13.scale=0.5;
    coin14=createSprite(3300,random(500,600));
    coin14.addImage(coinImg);
    coin14.scale=0.5;
    coin15=createSprite(3300,random(490,590));
    coin15.addImage(coinImg);
    coin15.scale=0.5;
    coin16=createSprite(3600,random(490,590));
    coin16.addImage(coinImg);
    coin16.scale=0.5;
    coin17=createSprite(3900,random(490,590));
    coin17.addImage(coinImg);
    coin17.scale=0.5;
    coin18=createSprite(4200,random(490,590));
    coin18.addImage(coinImg);
    coin18.scale=0.5;
    coin19=createSprite(4400,random(490,590));
    coin19.addImage(coinImg);
    coin19.scale=0.5;
    coin20=createSprite(4600,random(490,590));
    coin20.addImage(coinImg);
    coin20.scale=0.5;
    
    

    mushroom1=createSprite(random(500,1000),800);
    mushroom1.addImage(mushroomImg);
    mushroom1.scale=0.15

    mushroom2=createSprite(random(1100,1500),800);
    mushroom2.addImage(mushroomImg);
    mushroom2.scale=0.15
    
    mushroom3=createSprite(random(1900,2200),800);
    mushroom3.addImage(mushroomImg);
    mushroom3.scale=0.15

    mushroom4=createSprite(random(2600,3200),800);
    mushroom4.addImage(mushroomImg);
    mushroom4.scale=0.15
    
    mushroom5=createSprite(random(3600,3900),800);
    mushroom5.addImage(mushroomImg);
    mushroom5.scale=0.15
    
    mushroom6=createSprite(random(4400,4900),800);
    mushroom6.addImage(mushroomImg);
    mushroom6.scale=0.15

    mushroom7=createSprite(random(5100,5600),800);
    mushroom7.addImage(mushroomImg);
    mushroom7.scale=0.15
    
    mushroom8=createSprite(random(5600,5700),800);
    mushroom8.addImage(mushroomImg);
    mushroom8.scale=0.15
    
    mushroom9=createSprite(5150,800);
    mushroom9.addImage(mushroomImg);
    mushroom9.scale=0.15


    mushroomGroup.add(mushroom1);
    mushroomGroup.add(mushroom2);
    mushroomGroup.add(mushroom3);
    mushroomGroup.add(mushroom4);
    mushroomGroup.add(mushroom5);
    mushroomGroup.add(mushroom6);
    mushroomGroup.add(mushroom7);
    mushroomGroup.add(mushroom8);
    mushroomGroup.add(mushroom9);

    Flag = createSprite(5300,600)
    Flag.addImage(flagImg)
    Flag.scale=0.35

    logo = createSprite(-250,320)
    logo.addImage(logoimg)
    logo.scale = 0.6

    startButton=createSprite(-280,780);
    startButton.addImage(startImage);
    startButton.scale=0.25


}
function draw() {
    background("skyblue");

    image(screen,-600,130,6700,800);

    camera.position.x=mario.x+100;
    camera.position.y=displayHeight-305;

  if (gameState==="START") {
      mario.visible=false;

      fill("lightblue")
      rect(-570,220,630,600,)
      fill(0);
      textSize(35)
      textFont("cooper")
      stroke("black")
      text("Instruction :",-550,450)
      textSize(25)
      text("► Press right arrow to move right and space to jump",-550,500,600)
      text("► Your life decreases when you touch a mushroom",-550,560,600)
      text("► You die if your lifes are over",-550,620,600)
      text("► You win if you reach the flag",-550,660,600)

      mushroomGroup.setVelocityXEach(0);

      if (mousePressedOver(startButton)) {
          gameState="PLAY";

      }
  }
  if (gameState==="PLAY") {
    mario.visible=true
    startButton.visible = false
    logo.visible = false
    
    mushroom1.velocityX=-2;
    mushroom2.velocityX=-3;
    mushroom3.velocityX=-4;
    mushroom4.velocityX=-2;
    mushroom5.velocityX=-3;
    mushroom6.velocityX=-4;
    mushroom7.velocityX=-2;
    mushroom8.velocityX=-3;
    mushroom9.velocityX=-4;


    if (keyDown(RIGHT_ARROW)) {
        mario.x=mario.x+15;
    }

    mario.velocityY=mario.velocityY+5;
    mario.collide(invisibleGround);

    if (mario.y>700) {
       if (keyDown(32)) {
        mario.velocityY=-60;
       }
    }
    if (mario.isTouching(life1)) {
        life1.destroy();
        lives++;
    } else if (mario.isTouching(life2)) {
        life2.destroy();
        lives++;
    } else if (mario.isTouching(life3)) {
        life3.destroy();
        lives++;
    }
    if (mario.isTouching(coin1)) {coin1.destroy(); score+=10;}
    if (mario.isTouching(coin2)) {coin2.destroy(); score+=10;}
    if (mario.isTouching(coin3)) {coin3.destroy(); score+=10;}
    if (mario.isTouching(coin4)) {coin4.destroy(); score+=10;}
    if (mario.isTouching(coin5)) {coin5.destroy(); score+=10;}
    if (mario.isTouching(coin6)) {coin6.destroy(); score+=10;}
    if (mario.isTouching(coin7)) {coin7.destroy(); score+=10;}
    if (mario.isTouching(coin8)) {coin8.destroy(); score+=10;}
    if (mario.isTouching(coin9)) {coin9.destroy(); score+=10;}
    if (mario.isTouching(coin10)) {coin10.destroy(); score+=10;}
    if (mario.isTouching(coin11)) {coin11.destroy(); score+=10;}
    if (mario.isTouching(coin12)) {coin12.destroy(); score+=10;}
    if (mario.isTouching(coin13)) {coin13.destroy(); score+=10;}
    if (mario.isTouching(coin14)) {coin14.destroy(); score+=10;}
    if (mario.isTouching(coin15)) {coin15.destroy(); score+=10;}
    if (mario.isTouching(coin16)) {coin16.destroy(); score+=10;}
    if (mario.isTouching(coin17)) {coin17.destroy(); score+=10;}
    if (mario.isTouching(coin18)) {coin18.destroy(); score+=10;}
    if (mario.isTouching(coin19)) {coin19.destroy(); score+=10;}
    if (mario.isTouching(coin20)) {coin20.destroy(); score+=10;}

    if (mario.isTouching(mushroom1)) {mushroom1.destroy(); lives--;}
    if (mario.isTouching(mushroom2)) {mushroom2.destroy(); lives--;}
    if (mario.isTouching(mushroom3)) {mushroom3.destroy(); lives--;}
    if (mario.isTouching(mushroom4)) {mushroom4.destroy(); lives--;}
    if (mario.isTouching(mushroom5)) {mushroom5.destroy(); lives--;}
    if (mario.isTouching(mushroom6)) {mushroom6.destroy(); lives--;}
    if (mario.isTouching(mushroom7)) {mushroom7.destroy(); lives--;}
    if (mario.isTouching(mushroom8)) {mushroom8.destroy(); lives--;}
    if (mario.isTouching(mushroom9)) {mushroom9.destroy(); lives--;}
    
    }
    if (lives===0) {
        gameState="LOST";
    }

    
   
    if(gameState === "PLAY"){
        fill(0);
        textFont("cooper")
        stroke("black")

        textSize(40)
        text("Lives: "+lives +" |",mario.x-550,280);
        text(" Coins collected: "+score/10,mario.x-350,285);
        if (mario.x>=5160) {
        swal({
            title: `Awesome!${"\n"}You have reached the finish line${"\n"}`,
            text: "You have "+ lives +" lives left and collected "+score/10 + " coins" ,
            imageUrl:"images/trophy.png",
            imageSize: "150x150",
            cancelButtonText: "Ok",
          });
        }
    }

       if (mario.x>=5160) {
        gameState="WIN";

    }
  
  if (gameState==="WIN") {
        mushroomGroup.setVelocityXEach(0);
        mario.visible=false;

        

        textFont("Comic Sans MS");
        textSize(50);
        fill(0);
        text("VICTORY !!!",mario.x-60,300);
  }
  if (gameState==="LOST") {
      textFont("cooper");
      textSize(50);
      fill(0);
      text("YOU LOSE.",mario.x-100,300);
      mario.visible=false;
      mario.velocityY=0;
      mario.velocityX=0;
      mushroomGroup.setVelocityXEach(0);
  }
    drawSprites();
    
}

