Status=""
Object=""
function preload(){
img=loadImage("dog_cat.jpg")
}
function setup(){
    Canvas=createCanvas(500,410);
    Canvas.center();
    Objectdetector=ml5.objectDetector('cocossd', modelLoaded)
}
function modelLoaded(){
Status=true;
Objectdetector.detect(img,gotresult);
}
function gotresult(error,result){
if(error){
    console.log(error);
}
console.log(result)
Object=result
}
function draw(){
    image(img,0,0,500,360)
    if(Status!="")
    {
        for(i=0;i<Object.length;i++){
            document.getElementById("st").innerHTML="Status:object Detected";
            fill("blue");
            precent=floor(Object[i].confidence*100);
            text(Object[i].label +" "+ precent +"%",Object[i].x+15,Object[i].y+15);
            noFill();
            stroke("blue");
            rect(Object[i].x,Object[i].y,Object[i].width,Object[i].height);
        }
    }
}