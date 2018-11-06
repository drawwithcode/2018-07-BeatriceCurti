var mic;
var vol;
var j;

function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);

  capture = createCapture(VIDEO);
  capture.size(640, 480);
  capture.hide();

  mic = new p5.AudioIn();

  mic.start();

}

function draw() {
  // put drawing code here
  background(0, 0 , 0);


  var vol = mic.getLevel();
  var j = vol * 1000;

  if(j > 17.5){

    background(255, 255, 255);

    //webcam
    var myImage = capture.loadPixels();
    noStroke();
    image(myImage, width/2.4 + 40, height/8, 640, 480);
    noFill();
    rect(width/2.4 + 40, height/8, 640, 480);


    if(j > 30){
      noStroke();
      fill(random(0,100), random(200,300), random(0,300));
      textSize(40);
      textFont('Helvetica');
      textStyle(NORMAL);
      text('loud!', width/8 - 100 + 20, height/3);
    }

    if(j > 50){
      noStroke();
      fill(random(0,100), random(200,300), random(0,300));
      textSize(40);
      textFont('Helvetica');
      textStyle(NORMAL);
      text('Sooo loud!', width/8 - 100 + 20, height/3 + 80);
    }

    if(j > 70){
      noStroke();
      fill(random(0,255), random(100,255), random(0,100));
      textSize(40);
      textFont('Helvetica');
      textStyle(NORMAL);
      text('Super loud!', width/8 - 100 + 20, height/3 + 160);
    }

    if(j > 70){
      noStroke();
      fill(random(0,255), random(0,100), random(0,100));
      textSize(40);
      textFont('Helvetica');
      textStyle(NORMAL);
      text('Super suuuuper loud!', width/8 - 100 + 20, height/3 + 240);
    }


  }
  else{
    //webcam
    var myImage = capture.loadPixels();
    noStroke();
    image(myImage, width/2.4 + 40, height/8, 640, 480);
    noFill();
    rect(width/2.4 + 40, height/8, 640, 480);

  }

}
