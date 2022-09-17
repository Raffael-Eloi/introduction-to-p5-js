var cx, cy;

function setup() {  
  createCanvas(600, 400);

  cxInitial = width;
  cyInitial = height;
  flag = false;
  cx = width/12;
  cy = height - 100;

  ballInitialPositionX = cx+50;
  ballInitialPositionY = cy-45;
  console.log(ballInitialPositionX)
}

function draw() {
  background("pink");  

  fill("pink");
  stroke("black");
  arc(cxInitial/2, cyInitial/1.4, 400, 400, PI, PI*2);
  
  fill("red");
  ellipse(ballInitialPositionX,ballInitialPositionY, 40, 40);

  if (ballInitialPositionX < (cx+450)) ballInitialPositionX += 0.33; 
  if (ballInitialPositionY >= 98 && !flag) {
    ballInitialPositionY -= 0.5;
  } else if (ballInitialPositionX >= 390 && ballInitialPositionX < (cx+450)) {
    ballInitialPositionY += 0.5;
    flag = true;
    // ballInitialPositionX += 0.5;
  }



  noStroke();
  fill("orange");
  rect(cx,cy,100, 50)
  ellipse(cx+50,cy,50, 50)

  noStroke();
  fill("green");
  
  if (ballInitialPositionY == cy) {
    fill("red");
  }
  
  rect(cx+400,cy ,100, 50)
  ellipse(cx+450,cy,50, 50)
}