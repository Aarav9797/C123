var nosex;
var nosey;
var wristleftX;
var wristleftY;
var wristrightX;
var wristrightY;
function setup(){
canvas=createCanvas(600,600)
canvas.position(600,125)
video=createCapture(VIDEO)
video.size(500,500)
console.log("ML5 version",ml5.version)
posenet=ml5.poseNet(video,modelloaded)
posenet.on("pose",gotposes)
}
function gotposes(result){
if(result.length>0){
    console.log(result);
    nosex=result[0].pose.nose.x
    nosey=result[0].pose.nose.y
    wristleftX=result[0].pose.leftWrist.x
    wristleftY=result[0].pose.leftWrist.y
    wristrightX=result[0].pose.rightWrist.x
    wristrightY=result[0].pose.rightWrist.y



}
}
function modelloaded(){
console.log("Your model has been loaded")
}
function draw(){
fill("#c8ff00")
stroke("#c8ff00")
square(100,100,80)
}
function preload(){}