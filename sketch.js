const Engine = Matter.Engine
const World = Matter.worldWorld
const Bodies = Matter.Bodies




var boyImg,boy,thunderImg,thunder;
var maxDrops = 100

function preload(){
thunderImg = loadAnimation("images/thunderbolt/1.png","images/thunderbolt/2.png","images/thunderbolt/3.png","images/thunderbolt/4.png")
boyImg = loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png")


}

function setup(){
   createCanvas(1200,800)
 engine = Engine.create()
world = engine.world

    if(frameCount%60 === 0){
        for(var i = 0;i < maxDrops;i++ ){
              drops.push(new createDrops(random(0,400),random(0,400)))
        }
    }

}

function draw(){
    background(0)
    
    Engine.update(engine)
}   

