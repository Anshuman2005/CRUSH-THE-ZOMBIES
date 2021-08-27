const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let wall1,wall2,bridge;
let stone1,stone2,stone3,stone4,stone5,stone6,stone7,stone8;

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  wall_options={
    isStatic:true
  };
  
  wall1 = new Base(width-1800,height-400,300,300,wall_options);
  wall2 = new Base(width- 150,height-400,300,300,wall_options);
  bridge =new Bridge(40,{x:-5,y:100});
  Matter.Composite.add(bridge.body,wall2)
  jointLink = new Link(bridge,wall2);
  stone1 = new Stone(width-800,height-1000,40);
  stone2 = new Stone(width-1000,height-1000,40);
  stone3 = new Stone(width-600,height-1000,40);
  stone4 = new Stone(width-800,height-1000,40);
  stone5 = new Stone(width-600,height-1000,40);
  stone6 = new Stone(width-300,height-1000,40);
  stone7 = new Stone(width-830,height-1000,40);
  stone8 = new Stone(width-800,height-1000,40);
}

function draw() {
  background(51);
  Engine.update(engine);

  wall1.show();
  wall2.show();
  bridge.show();
  stone1.show();
  stone2.show();
  stone3.show();
  stone4.show();
  stone5.show();
  stone6.show();
  stone7.show();
  stone8.show();
}
