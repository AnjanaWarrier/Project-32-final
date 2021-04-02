const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var count=0;


function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,395,1200,15);

    platform1 = new Ground(670,300,300,15);
    
    //level one
    block1 = new Box(550,275,30,40); 
    block2 = new Box(580,275,30,40);
    block3 = new Box(610,275,30,40);
    block4 = new Box(640,275,30,40);
    block5 = new Box(670,275,30,40);
    block6 = new Box(700,275,30,40);
    block7 = new Box(730,275,30,40);
    block8 = new Box(760,275,30,40);
    block9 = new Box(790,275,30,40);

    //level two
    block10 = new Box(580,235,30,40);
    block11 = new Box(610,235,30,40);
    block12 = new Box(640,235,30,40);
    block13 = new Box(670,235,30,40);
    block14 = new Box(700,235,30,40);
    block15 = new Box(730,235,30,40);
    block16 = new Box(760,235,30,40);

    //level three
    block17 = new Box(610,195,30,40);
    block18 = new Box(640,195,30,40);
    block19 = new Box(670,195,30,40);
    block20 = new Box(700,195,30,40);
    block21 = new Box(730,195,30,40);

    //level four
    block22 = new Box(640,155,30,40);
    block23 = new Box(670,155,30,40);
    block24 = new Box(700,155,30,40);

    //top level
    block25 = new Box(670,115,30,40);


    platform2 = new Ground(1000,200,200,15);

    //level one
    box1 = new Box(925,175,30,40);
    box2 = new Box(955,175,30,40);
    box3 = new Box(985,175,30,40);
    box4 = new Box(1015,175,30,40);
    box5 = new Box(1045,175,30,40);
    box6 = new Box(1075,175,30,40);

    //level two
    box7 = new Box(955,135,30,40);
    box8 = new Box(985,135,30,40);
    box9 = new Box(1015,135,30,40);
    box10 = new Box(1045,135,30,40);

    //level three
    box11 = new Box(985,95,30,40);
    box12 = new Box(1015,95,30,40);

    // top level
    box13 = new Box(1000,55,30,40)


    polygon = new SlingObj(100,150);

    sling = new SlingShot(polygon.body,{x:100,y:150})
    
}
function draw(){
    background(0);
    Engine.update(engine);

    ground.display();
    platform1.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();

    block10.display()
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();

    block22.display();
    block23.display();
    block24.display();

    block25.display();

    platform2.display();

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

    polygon.display();
    sling.display();


    textSize(40)
    text("SCORE : "+ count, 750,40);


    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();

    box7.score();
    box8.score();
    box9.score();
    box10.score();

    box11.score();
    box12.score();

    box13.score();


    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();

    block10.score()
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();

    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();

    block22.score();
    block23.score();
    block24.score();

    block25.score();
}
function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    sling.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       sling.attach(polygon.body);
    }
}
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        background(255);
    }
    else{
        background(0);
    }

   // backgroundImg = loadImage(bg);
    console.log("backgroundImg");
}