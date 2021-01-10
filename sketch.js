const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box5;
var box1;
var box2;
var box3; 
var box4;
var pig1;
var pig2;
var chuck;
var log1;
var log2;
var log3;
var log4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    pig1 = new Pig(810,350);
    chuck = new Chuck(100,100, 400, 400);
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    log1 = new Loge(810,260,300,PI/2);
    
    pig2 = new Pig(810,220);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    log2 = new Loge(810,180,300,PI/2);

    
    box5 = new Box(810,160,70,70);
    log3 = new Loge(760,120,150,PI/7);
    log4 = new Loge(870,120,150,PI/-7);
    ground = new Ground(600,height,1200,20)



}   


function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    chuck.display();
    ground.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
}