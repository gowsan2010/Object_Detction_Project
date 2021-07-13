var status="";
function preload(){
img = loadImage('electronics.jpeg');
}
function setup(){
    canvas = createCanvas(600, 600);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Detecting Objects";
}
function draw(){
image(img, 0, 0, 600, 600);
}
function modelLoaded(){
    status=true;
    console.log("Model Loaded! Enjoy!!!");
    objectDetector.detect(img, gotResult);
}
function gotResult(results, error){
    if (error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}