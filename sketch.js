const acceleration = 1;
const maxVelocity = 6;

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
  
  this.setAcceleration = function (direcao) {
    this.acceleration = direcao;
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
  this.alvo = null;
  this.range = false;
  this.visionArea = width / 3;

  this.setAlvo = function (alvo) {
    this.alvo = alvo;
  };

  this.update = function () {
    this.checkTarget();
    if (this.range) {
      var dir = p5.Vector.sub(this.alvo, this.location);
      dir.normalize();
      dir.mult(0.2);
      this.acceleration = dir;

      this.velocity.add(this.acceleration);
      this.velocity.limit(this.topspeed);
      this.location.add(this.velocity);
    } else {
      this.location.add(this.velocity);
    }
  };

  this.checkTarget = function() {
    var distancy = dist(this.alvo.x, this.alvo.y, this.location.x, this.location.y);
    if (distancy < this.visionArea) {
      this.range = true;
      if(distancy < this.dim){
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
    stroke(255, 0, 0, 50);
    ellipse(this.location.x, this.location.y, this.visionArea, this.visionArea);
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


var Enemy;
var Player;

function setup() {
  createCanvas(400, 400);
  smooth();
  background(255);
  Enemy = new Enemy();
  Player = new Player();
}

function draw() {
  noStroke();
  fill(235);
  rect(0, 0, width, height);

  Enemy.setAlvo(Player.location);
  
  Enemy.update();
  Enemy.checkEdges();
  Enemy.display();
  
  Player.update();
  Player.checkEdges();
  Player.display();
}

function keyPressed() {
  if (keyCode === ArrowLeft) {
    Player.setAcceleration(createVector(-acceleration, 0));
    Player.inverteX();
  }
  else if (keyCode === ArrowRight) {
    Player.setAcceleration(createVector(acceleration, 0));
    Player.inverteX();
  }
  else if (keyCode === ArrowUp) {
    Player.setAcceleration(createVector(0, -acceleration));
    Player.inverteY();
  }
  else if (keyCode === ArrowDown) {
    Player.setAcceleration(createVector(0, acceleration));
    Player.inverteY();
  }
}
