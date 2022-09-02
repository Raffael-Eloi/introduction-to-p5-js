var x;
var y;
var w;
var h;
var pi = 3.14;
var initialPosition = 3 * pi / 2;
var start = initialPosition + 0.1;
var stopSecond = initialPosition + 0.1;
var stopMinute = initialPosition + 0.1;
var stopHours = initialPosition + 0.1;
var stopCondition = pi*4 - 1.5

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  x = width / 2;
  y = height / 2;
  w = 400;
  h = 400;
  secondIncrement = 0.1/60;
  minuteIncrement = secondIncrement / 60;
  hourIncrement = minuteIncrement / 60;
}

function arcOfSeconds () {
    arc(x, y, w-20, h-20, initialPosition, stopSecond);
    if (stopSecond < stopCondition) {
        stopSecond += secondIncrement;
    } else stopSecond = start;
}

function arcOfMinutes () {
    arc(x, y, w-70, h-70, initialPosition, stopMinute);
    if (stopMinute < stopCondition) {
        stopMinute += minuteIncrement;
    } else stopMinute = start;
}

function arcOfHours () {
    arc(x, y, w-120, h-120, initialPosition, stopHours);
    if (stopHours < stopCondition) {
        stopHours += hourIncrement;
    } else stopHours = start;
}

function draw() {
  background("pink");
  ellipse(x, y, w+10);
  arcOfSeconds();
  arcOfMinutes();
  arcOfHours();
  text('Relógio com arcos', x, y/6);
  text('12', x, y/4);
  text('9', x/4, y);
  text('6', x, y+250);
  text('3', x+250, y);
}