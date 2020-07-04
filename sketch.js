const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, slingShot,platform,platform2;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    platform = new Ground(600,250,200,10)
    platform2 = new Ground(1000,350,200,10)
    ground = new Ground(600,height,1200,20);

    box1 = new Box(525,200,30,30);
    box2 = new Box(555,200,30,30);
    box3 = new Box(585,200,30,30);
    box4 = new Box(615,200,30,30);
    box5 = new Box(645,200,30,30);
    box6 = new Box(675,200,30,30);
    
   
    box7 = new Box(555,150,30,30);
    box8 = new Box(585,150,30,30);
    box9 = new Box(615,150,30,30);
    box10 = new Box(645,150,30,30);
    
    box11 = new Box(585,100,30,30);
    box12 = new Box(615,100,30,30);
    
    box13 = new Box(925,300,30,30);
    box14 = new Box(955,300,30,30);
    box15 = new Box(985,300,30,30);
    box16 = new Box(1015,300,30,30); 
    box17 = new Box(1045,300,30,30);
    box18 = new Box(1075,300,30,30);
    
   
    box19 = new Box(955,250,30,30);
    box20 = new Box(985,250,30,30);
    box21 = new Box(1015,250,30,30);
    box22 = new Box(1045,250,30,30);
    
    box23 = new Box(985,200,30,30);
    box24 = new Box(1015,200,30,30);
    
    
    
   
   
    ball = new Ball(100,180,25 );
    
    slingshot = new SlingShot(ball.body,{x:200, y:180});
}

function draw(){
    background(100);
    Engine.update(engine);
    strokeWeight(2);
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    box7.display();
    box8.display();
    box9.display();
    box10.display();

    box11.display();
    box12.display();
    
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();

    box19.display();
    box20.display();
    box21.display();
    box22.display();

    box23.display();
    box24.display();
    
    
    
    ground.display();
    platform.display();
    platform2.display();

    ball.display();
    
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(ball.body);
    }

   } 
