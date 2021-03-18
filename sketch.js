const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


function setup(){
    var canvas = createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    box1 = new Dustbin(700,220);
    box2 = new Dustbin(920,220);
    
   // box3 = new Dustbin(1010,160,20, 30);

    

    paper = new Paper(100,100);

}

function draw(){
    background("grey");
    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
    

    //box3.display();
    

    paper.display();
}

function keyPressed(){
  if (keyCode === RIGHT_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 20,
      y: -25
    });
  }

  if (keyCode === LEFT_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: -12,
      y: -13
    });
  }
}
