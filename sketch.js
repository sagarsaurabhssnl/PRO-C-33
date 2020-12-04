let engine, world;
let ground1;
let particle;
let plinko = [];
let division = [];
let ground = [];
let frame = 0;
let infinite;
let ready = 1;
let score = 0;
let chances = 5;
let stuck;
let stucktext;
let gamestate = 1;


function setup() {
  createCanvas(500, 640);
  engine = Matter.Engine.create();
  world = engine.world;

  ground1 = new Ground(250, 645, 500, 30);
  ground2 = new Ground(5, 320, 10, 640);
  ground3 = new Ground(495, 320, 10, 640);

  for (var j = 50; j <= 500; j = j + 80) {
    objects(30, width - 30, 30, plinko, Plinko, j);
    objects(45, width - 30, 30, plinko, Plinko, j + 40);
  }

  objects(75, width - 70, 70, division, Division, 580);
}

function draw() {
  background(150);
  Matter.Engine.update(engine);
  console.log(mouseX);
  rectMode(CENTER);
  noStroke();
  ground1.show();
  ground2.show();
  ground3.show();
  for (var i = 0; i < division.length; i++) {
    division[i].show();
  }

  for (var i = 0; i < plinko.length; i++) {
    plinko[i].show();
  }
  if (particle) {
    particle.show();
    scoreCounter();
  }
  gameOver();
  text("Score: " + score, 425, 20);
  text("Chances: " + chances, 20, 20);
  text("100", 30, 620);
  text("200", 100, 620);
  text("300", 170, 620);
  text("500", 240, 620);
  text("300", 310, 620);
  text("200", 380, 620);
  text("100", 450, 620);
}

function objects(xaxis, len, dist, obj, clas, yaxis) {
  for (var i = xaxis; i <= len; i = i + dist) {
    obj.push(new clas(i, yaxis));
  }
}

function keyPressed() {
  if (keyCode === 82) {
    document.location.reload();
  }
  if (keyCode === 67) {
    codelink();
  }
}

function codelink() {
  window.location.href = "https://github.com/sagarsaurabhssnl/PRO-C-33";
}

function mousePressed() {
  if (mouseX > 10 && mouseX < 490) {
    if (ready !== null && chances > 0) {
      particle = new Particle();
      chances = chances - 1;
      ready = null;
    }
  }
}

function scoreCounter() {
  if (particle.body.position.y > 624) {
    particleDestroy();
  }
}

function particleDestroy() {
  if (ready === null) {
    particle.destroy();
  }
}

function gameOver() {
  if (chances <= 0 && ready === 1) {
    push();
    textSize(20);
    if (score !== 2500) {
      text("Game Over !", 200, 30);
    }else{
      text("You are at the pinnacle", 150, 30);
    }
    text("Press R to restart", 170, 520);
    pop();
  }
}