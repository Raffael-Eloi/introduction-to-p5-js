const acceleration = 1;
const maxVelocity = 4;

function Player() {
  this.location = createVector(width / 4, height / 1.5);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);
  this.topspeed = maxVelocity;
  this.dim = 20;

  this.inverteX = function () {
    this.velocity.x *= -1;
  }
  this.inverteY = function () {
    this.velocity.y *= -1;
  }
  
  this.setAcceleration = function (direction) {
    this.acceleration = direction;
  }
  this.update = function () {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.location.add(this.velocity);
  };
  
  this.display = function () {
    stroke(0);
    fill(0, 0, 255);
    ellipse(this.location.x, this.location.y, this.dim, this.dim);
  };

  this.checkEdges = function () {
    if (this.location.x > width) {
      this.location.x = 0;
    } else if (this.location.x < 0) {
      this.location.x = width;
    }
    
    if (this.location.y > height) {
      this.location.y = 0;
    } else if (this.location.y < 0) {
      this.location.y = width;
    }
  }
}

function Enemy() {
  this.location = createVector(width / 1.5, height / 4);
  this.velocity = createVector(random(-2, 2), random(-2, 2));
  this.acceleration = createVector(0, 0);
  this.topspeed = maxVelocity;
  this.dim = 20;
  this.target = null;
  this.range = false;
  this.visionArea = width / 3;

  this.setTarget = function (target) {
    this.target = target;
  };

  this.update = function () {
    this.checkTarget();
    if (this.range) {
      var dir = p5.Vector.sub(this.target, this.location);
      dir.normalize();
      dir.mult(0.2);
      this.acceleration = dir;

      this.velocity.add(this.acceleration);
      this.velocity.limit(this.topspeed);
      this.location.add(this.velocity);
    } else {
      this.velocity.add(createVector(random(-0.3, 0.3), random(-0.3, 0.3)));
      this.velocity.limit(this.topspeed);
      this.location.add(this.velocity);
    }
  };

  this.checkTarget = function() {
    var distancy = dist(this.target.x, this.target.y, this.location.x, this.location.y);
    if (distancy < this.visionArea) {
      this.range = true;
      if(distancy < this.dim){
        alert("Game over");
        noLoop();
      }
    } else{
      this.range = false;
    }
  }
  
  this.display = function () {
    stroke(0);
    fill(255, 0, 0);
    ellipse(this.location.x, this.location.y, this.dim, this.dim);
    noFill();
  };

  this.checkEdges = function () {
    if (this.location.x > width){
      this.location.x = 0;
      
    } else if(this.location.x < 0) {
      this.location.x = width;
      
    }
    
    if (this.location.y > height){
      this.location.y = 0;
      
    }else if(this.location.y < 0) {
      this.location.y = width;
      
    }
  }
}


var enemy;
var player;

function setup() {
  createCanvas(400, 400);
  smooth();
  background(255);
  enemy = new Enemy();
  player = new Player();
}

function draw() {
  noStroke();
  fill(235);
  rect(0, 0, width, height);

  enemy.setTarget(player.location);
  
  enemy.update();
  enemy.checkEdges();
  enemy.display();
  
  player.update();
  player.checkEdges();
  player.display();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    player.setAcceleration(createVector(-acceleration, 0));
    player.inverteX();
  } else if (keyCode === RIGHT_ARROW) {
    player.setAcceleration(createVector(acceleration, 0));
    player.inverteX();
  }
  else if (keyCode === UP_ARROW) {
    player.setAcceleration(createVector(0, -acceleration));
    player.inverteY();
  }
  else if (keyCode === DOWN_ARROW) {
    player.setAcceleration(createVector(0, acceleration));
    player.inverteY();
  }
}
