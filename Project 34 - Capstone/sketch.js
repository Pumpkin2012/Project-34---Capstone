const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world, background_img
var ball, p
var balls = []
var plinkos = []
var cols = 9
var rows = 13
var cols2 = 9
var rows2 = 14
var spacing = 350/8;
var wall1, wall2
var bound, b1, b2, b3, b4, b5, b6, b7, b8

function preload(){
background_img = loadImage("Space.png")
}

function setup() {
  createCanvas(800,600);
  
  engine = Engine.create();
  world = engine.world;
  
  ball = new Ball(random(120,680),random(-50,0),7)
  
  bound = new Drop(160,554,5,50)
  b1 = new Drop(220,554,5,50)
  b2 = new Drop(280,554,5,50)
  b3 = new Drop(340,554,5,50)
  b4 = new Drop(400,554,5,50)
  b5 = new Drop(460,554,5,50)
  b6 = new Drop(520,554,5,50)
  b7 = new Drop(580,554,5,50)
  b8 = new Drop(640,554,5,50)
  for (var r2 = 0; r2 < rows2; r2++){
    for (var c2 = 0; c2 < cols2; c2++){
      var p = new Plinko(117.5+r2*spacing,130+c2*spacing+20,8)
      plinkos.push(p)
    }
  }
  
  for (var r = 0; r < rows; r++){
    for (var c = 0; c < cols; c++){
      var p = new Plinko(140+r*spacing,130+c*spacing,8)
      plinkos.push(p)
    }
  }

  
  wall1 = Bodies.rectangle(101,347.5,10,500,{isStatic:true})
  World.add(world,wall1);
  wall2 = Bodies.rectangle(701,347.5,10,500,{isStatic:true})
  World.add(world,wall2);
  ground = Bodies.rectangle(400,height-10,600,15,{isStatic:true})
  World.add(world,ground);

  
}


function draw() 
{
  background(51);
  
  Engine.update(engine);
  imageMode(CENTER)
  image(background_img,width/2,height/2,width,height)
  push();
  translate(ground.position.x, ground.position.y);
  fill("white");
  rectMode(CENTER);
  rect(0,-10,600,15);
  pop();
  
  push();
  fill("black")
  rectMode(CENTER)
  rect(400,335,600,487.5)
  pop();
  
  push()
  translate(wall1.position.x,wall1.position.y)
  rectMode(CENTER)
  rect(0,-10,10,500)
  pop()

  push()
  translate(wall2.position.x,wall2.position.y)
  rectMode(CENTER)
  rect(0,-10,10,500)
  pop()

  bound.show()
  b1.show()
  b2.show()
  b3.show()
  b4.show()
  b5.show()
  b6.show()
  b7.show()
  b8.show()
  ball.show()
  
  for (var i=0; i<plinkos.length; i++){
    plinkos[i].show()
  }

  
  
}



