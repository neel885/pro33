  const Engine = Matter.Engine
  const World = Matter.World
  const Events = Matter.Events
  const Bodies = Matter.Bodies
 
    var engine,world ;    
    var divisions = []
    var particle;
    var particles = [particle]
    var plinkos = [];
    var line;
    var ball;
    var balls=[]

var divisionHeight=300;

var gameState = "PLAY"
var score =0;
var count = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  
  textSize(35)
  text("Score : "+score,20,40);
  fill("white")
 
  text("500",5,550)
  text("500",80,550)
  text("500",160,550)
  text("500",240,550)

  text("100",320,550)
  text("100",400,550)
  text("100",480,550)

  text("200",568,550)
  text("200",648,550)
  text("200",720,550)

  ground.display();


  if(gameState=="END")
  {
    background= "black"
    fill("red")
    textSize(100)
    text("Game Over",200,400)
  }
  for(var i = 0; i<plinkos.length ; i++)
  {
    
    plinkos[i].display()
  }

  
   
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(ball!=null)
   {
     ball.display()
     var pos = ball.body.position
     if(pos.y>760)
     {
       if(pos.x<300)
       {
         score = score+500
         ball = null
         if(count>= 5)
         {
           gameState = "end"
         }
       }
       else if(pos.x<600 && pos.x>301)
       {
         score = score+100
         ball = null
         if(count>= 5)
         {
           gameState = "end"
         }
       }
       else if(pos.x<900 && pos.x>601)
       {
         score = score+200
         ball = null
         if(count>= 5)
         {
           gameState = "end"
         }
       }
     }
   }
}


function mousePressed()
{
  if(gameState!== 'end')
  {
    count++
    ball = new Ball(mouseX,10,10,10)
  }
}