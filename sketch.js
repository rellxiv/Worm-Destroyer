var player;
var score=0;
var wormGroup;
var edges;

function preload() {
  swamp = loadImage("images/swampImg.png");
  frog = loadImage("images/frog.png");
  worm = loadImage("images/worm.png");
}

function setup() {
  createCanvas(600,600);
  swampBackground = createSprite(300,300,30,30);
  swampBackground.scale = 2.5;
  swampBackground.addImage(swamp)
  player = createSprite(300,300,50,50);
  player.addImage(frog);
  player.scale = 0.4;
  wormGroup = new Group();

}

var diff = window. prompt("Type 'Easy', 'Medium', or 'Hard' difficulty: ")
  if (diff === "Easy"){
    function draw() {
      background("black");
      stroke("red");
      noFill();
      player.x = mouseX;
      player.y = mouseY;
      
      generateWorms();
      for (var i = 0; i < (wormGroup).length; i++){
        var temp = (wormGroup).get(i);
        if (player.isTouching(temp)){
          score++;
          temp.destroy();
          temp = null
        }
      }
      drawSprites();
      textSize(20);
      text("No. of Worms Destroyed: "+score, 350, 50);
    }
    
    function generateWorms() {
      if(frameCount % 30 === 0){
        var worms = createSprite(random(40, 380), random(290, 380), 20, 20);
        worms.scale = random(0.1, 0.3);
        worms.addImage(worm);
        worms.velocityX = random(-4, 5);
        worms.velocityY = random(-4, 5);
        wormGroup.add(worms);
      }
    }
  }

  if (diff === "Medium"){
    function draw() {
      background("black");
      stroke("red");
      noFill();
      player.x = mouseX;
      player.y = mouseY;
      
      generateWorms();
      for (var i = 0; i < (wormGroup).length; i++){
        var temp = (wormGroup).get(i);
        if (player.isTouching(temp)){
          score++;
          temp.destroy();
          temp = null
        }
      }
      drawSprites();
      textSize(20);
      text("No. of Worms Destroyed: "+score, 350, 50);
    }
    
    function generateWorms() {
      if(frameCount % 15 === 0){
        var worms = createSprite(random(40, 380), random(290, 380), 20, 20);
        worms.scale = random(0.1, 0.3);
        worms.addImage(worm);
        worms.velocityX = random(-4, 5);
        worms.velocityY = random(-4, 5);
        wormGroup.add(worms);
      }
    }
  }

  if (diff === "Hard"){
    function draw() {
      background("black");
      stroke("red");
      noFill();
      player.x = mouseX;
      player.y = mouseY;
      
      generateWorms();
      for (var i = 0; i < (wormGroup).length; i++){
        var temp = (wormGroup).get(i);
        if (player.isTouching(temp)){
          score++;
          temp.destroy();
          temp = null
        }
      }
      drawSprites();
      textSize(20);
      text("No. of Worms Destroyed: "+score, 350, 50);
    }
    
    function generateWorms() {
      if(frameCount % 5 === 0){
        var worms = createSprite(random(40, 380), random(290, 380), 20, 20);
        worms.scale = random(0.1, 0.3);
        worms.addImage(worm);
        worms.velocityX = random(-4, 5);
        worms.velocityY = random(-4, 5);
        wormGroup.add(worms);
      }
    }
  }

  if (diff != "Easy" && diff != "Medium" && diff != "Hard"){
    alert("What you've entered was not what was asked.");
  }