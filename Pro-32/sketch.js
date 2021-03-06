const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1000,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
    }

    Engine.update(engine);

    // write code to display time in correct format here
   
}

async function getBackgroundImg(){
var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var responseJSON= await response.json();
var dateTime= responseJSON.datetime;
var hour= dateTime.slice(11,13);
if(hour>=04 && hour<=05){
    bg="sunrise1.png";
} else if(hour>=05 && hour<=06){
    bg="sunrise2.png";
} else if(hour>=06 && hour<=7){
    bg="sunrise3.png";
} else if(hour>=7 && hour<=8){
    bg="sunrise4.png";
} else if(hour>=8 && hour<=11){
    bg="sunrise5.png";
} else if(hour>=11 && hour<=16){
    bg="sunrise6.png";
} else if(hour>=16 && hour<=19){
    bg="sunset7.png";
} else if(hour>=19 && hour<=21){
    bg="sunset8.png";
} else if(hour>=21 && hour<=22){
    bg="sunset9.png";
} else if(hour>=22 && hour<=23){
    bg="sunset10.png";
} else if(hour>=23 && hour<=00){
    bg="sunset11.png";
} else {
    bg="sunset12.png";
} 
backgroundImg=loadImage(bg);
}
