function setup() {
    createCanvas(800, 800);
}

function draw() {
    if (mouseIsPressed) fill('yellow');
    else fill('blue');

    ellipse(mouseX, mouseY, 80, 80);
}