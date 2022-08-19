function setup() {
    createCanvas(800, 800);
    background("gray");
    strokeWeight(2);
}

function draw() {
    if (mouseIsPressed) stroke('255');
    else stroke('red');

    line(mouseX -66, mouseY, mouseX + 66, mouseY);
    line(mouseX, mouseY - 66, mouseX, mouseY + 66);
}