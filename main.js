
video="";
status="";
function setup()
{
    canvas= createCanvas(550,400);
    canvas.center();

}
function preload(){
   
  
}
function draw(){
    
}
function start(){
    object_detector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status:objects detected";
}
function modelLoaded(){
console.log("model Loaded");

}