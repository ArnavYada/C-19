var climber,climberImage 
var door,doorImage
var ghost,ghostImage
var tower,towerImage
var climbersGroup
var doorsGroup
var gameState = "play"

function preload(){
  
  towerImage= loadImage ("tower.png")
  ghostImage= loadImage ("ghost-standing.png")
  climberImage = loadImage ("climber.png")
  doorImage = loadImage ("door.png")
  
  
  
  
}

function setup(){
  createCanvas (600,600)
  tower=createSprite(300,300)
  tower.addImage (towerImage)
  tower.velocityY = 1
  ghost=createSprite (200,200,10,10)
  ghost.addImage(ghostImage)
  ghost.scale= 0.5
  climbersGroup = new Group ()
  doorsGroup = new Group () 
  
  
  
}

function draw (){
  
  background("black")
  if(gameState === "play"){
      
      
  if(tower.y > 400){
    tower.y= 300
    
  }
  if(keyDown ("left_arrow")){
     ghost.x = ghost.x - 5
  }
     if(keyDown ("right_arrow")){
     ghost.x = ghost.x + 5
  }
     if(keyDown("space")){
       ghost.velocityY = -10
     }
  
  ghost.velocityY = ghost.velocityY + 0.8 
    if(climbersGroup. isTouching(ghost) ){
      ghost.velocityY = 0 
    }
    if (ghost.y>600 ){
      ghost.destroy ()
      gameState = "end"

    }
  spawnDoors ()
  drawSprites()
  } 
  if (gameState === "end")
    {
  text ("Game Over",250,250)    
      
      }
  
}

function spawnDoors() {
  if(frameCount% 240 === 0 ){
    door=createSprite(200,-50)
    climber=createSprite(200,10)
    door.x = Math.round (random(120,400))
    climber.x = door.x
    door.addImage (doorImage)
    climber.addImage(climberImage)
    door.velocityY = 1
    climber.velocityY = 1
    ghost.depth = door.depth 
    ghost.depth +=1
    doorsGroup.add (door)
    climbersGroup.add(climber)
    door.lifetime = 800
    climber.lifetime= 800

  }
  
  
  
  
}