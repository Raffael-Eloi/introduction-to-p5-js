function setup() {
    createCanvas(400, 400);
}

function draw() {
    background("pink");
    
    rectMode(CENTER);

    // specify an amount to displace
    translate(width/2, height/2);

    translate(p5.Vector.fromAngle(millis() / 300, 40));
    
    fill("blue");

    // sets the width of the stroke used for lines
    strokeWeight(5);
    
    
    ellipse(50,50, 33, 33);

}