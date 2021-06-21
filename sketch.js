const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var iron;
var wood;
var carbon_fiber;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(200, 200, 100);
    iron = new Iron(500,200,100,100);
    wood = new Wood(650,200,100,100);
    carbon_fiber = new Carbon_fiber(800,200,100,100);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    rubber.display();
    plane.display();
    hammer.display();
    iron.display();
    wood.display();
    carbon_fiber.display();
  
    
}