img = "";
status = "";
objects = [];
alert = "alert.wav";

function preload() {
    img = loadImage('baby.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = " Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    console.log(results);
    objects = results;
}

function draw() {
    image(video, 0, 0, 380, 380);
    if (status != "") {
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video, gotResults);
        for (i = 0; i < objects.length; i++) {
            if (objects == person) {
                document.getElementById("status").innerHTML = "Status: Baby Detected";
                console.log("Baby Detected");
                alert.stop();

            } else {
                document.getElementById().innerHTML = "Status : Baby is Not Detected";
                console.log("Baby is Not Detected");
                alert.play();
            }
        }
    }


}