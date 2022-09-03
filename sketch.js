var raio = 200;
var cx, cy;
var px, py;
var destaque_theta;

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  // centro do desenho e do circulo
  cx = width / 2;
  cy = height / 2;

  // ângulo theta para arco de destaque
  // que é o mesmo theta para o ponto p
  destaque_theta = PI * 1.75;
  // coordenada do ponto p
  // transformado de coord polar para coord cartesiana
  // theta = PI * 1.75
  px = cos(destaque_theta) * raio;
  py = sin(destaque_theta) * raio;
  // corrige p(px,py) para p(px+cx,py+cy);
  px += cx;
  py += cy;
}

function draw() {
  background(220);

  fill(255);
  var inc = 360/60;
  for (var angulo = 0; angulo <= 360; angulo += inc) {
    // transforma o angulo de
    // coord polar para coord cartesiana
    var x = cos(radians(angulo)) * raio;
    var y = sin(radians(angulo)) * raio;

    // desenha uma elipse na coord (x,y)
    // corrige (x,y) para (x+cx,y+cy)
    ellipse(x+cx, y+cy, 5);
  }

  // desenha uma elipse na coord (cx,cy)
  ellipse(cx, cy, 5);

  // preenchimento preto para o texto
  fill(0);
  // texto da coord (cx,cy)
  text('C\n(200,200)', cx, cy + 20);

  // linha de (cx,cy) a (cx+raio, cy)
  line(cx, cy, cx + raio, cy);

  // preenchimento branco
  fill(255);
  // arco para a área de destaque no círculo
  var wh = raio * 2;
  arc(cx, cy, wh, wh, destaque_theta, 0);

  // elipse para destacar o ponto p
  ellipse(px, py, 10);

  // texto do ponto p
  fill(0);
  text('p(r,theta)', px + 35, py - 5);

  // linha de (cx,cy) até o ponto p
  line(cx, cy, px, py);

  // arco para destacar o ângulo formado
  // pelo triângulo interno ao círculo
  noFill();
  arc(cx, cy, 50, 50, destaque_theta, 0);

  // texto 'theta' (ângulo)
  fill(0);
  text('theta', cx + 45, cy - 15);

  // texto 'r' (raio)
  text('r = ' + raio, cx + raio / 2, cy + 15);
}