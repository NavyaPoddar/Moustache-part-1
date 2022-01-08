nosex="";
nosey="";

function preload(){
    stache=loadImage("https://i.postimg.cc/XvZyvRsS/Moustache.gif");
}

function setup(){
    canvas= createCanvas(700,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide()
    posenetmodel=ml5.poseNet(video,modelloaded);
    posenetmodel.on("pose" , getresults);
}

function draw(){
    image(video,0,0,700,500);
    image(stache,nosex-10,nosey+10,100,50)
}

function modelloaded(){
    console.log("model has loaded");
}

function getresults(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log( "nosex:" , nosex );
        console.log( "nosey:" , nosey );
    }
}


function downloadimg(){
    save("Image.png");
}

