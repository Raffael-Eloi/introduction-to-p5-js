var x = 0;

// Execute only one time
function setup() {
    createCanvas(400, 400);
}

// Execute a lot of times
function draw() {
    background('blue');
    fill('green');

    ellipse(50, 50, 80, 80);
    ellipse(x, height/2, 80, 80);
    x = x +1;
    
    // ellipse(x, y, w, h, detail);
    // - x (Number): coordenate x of ellipse
    // - y (Number): coordenate y of ellipse
    // - w (Number): width of ellipse
    // - h (Number): (optional) height of ellipse
    // - detail (Integer): (optional) number of radial sectors to draw (modo WebGL)
}