nose_x=0
nose_y=0
function preload(){
lips=loadImage("lips.png")

}
function setup(){
    canvas=createCanvas(300,300)
    canvas.center();
    video = createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses)
}
function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(lips,nose_x-17,nose_y, 38, 38)
}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x)
        console.log("nose y = " + results[0].pose.nose.y)
        nose_x= results[0].pose.nose.x
        nose_y= results[0].pose.nose.y
    }
}
