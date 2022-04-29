let v;
let iCs;
let long = [];
let lat = [];
let radE = 0;
let radM = 0;
let mA = 0;
let ran = [];
let linLen = 0;

function earthParams () {
  v = createVector(width/2, 325);
  for (let i = 0; i < 3; i++) {
    long[i] = [];
    long[i].push(v.x, v.y-200, v.x-i*100, v.y-i*100, v.x-i*100, v.y+i*100, v.x, v.y+200);
    lat[i] = [];
    lat[i].push(v.x, v.y+200, v.x+i*100, v.y+i*100, v.x+i*100, v.y-i*100, v.x, v.y-200);
  }
  iCs = createVector(350, 250);
  
}

function earth (e) {
  frameRate(60);
  imageMode(CENTER)
  image(e, v.x, v.y-10, 393, 393);
  stroke(255);
  strokeWeight(2);
  noFill();
  ellipse(v.x, v.y, 400);
  long.forEach(e => {
    bezier(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]);
  });
  lat.forEach(e => {
    bezier(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]);
  });
  push()
  let h = [];
  for (let i = 1; i <= 6; i++) {
    h[i] = i*22.5;
  }
  translate(v.x, v.y)
    h.forEach(e => line(sin(e)*-200, cos(e)*-200, sin(e)*200, cos(e)*-200));
  pop()
  line(v.x-200, v.y, v.x+200, v.y)
  
  stroke('#ba9207');
  noFill();
  push();
    translate(v.x, v.y);
    for (let i = 0; i < radE; i+=0.1) {
      point(225*sin(i), 225*cos(i));
    }
    if (radE < 223 || radM > 235) radE += 4;
  pop();
  if (radE > 160) mannin(iom);
  
}

function mannin (i) {
  strokeWeight(2);
  if (radM >= 160) {
    if (mA < 255) mA+=17;
    fill(25, 25, 25, mA);
    noStroke();
    ellipse(iCs.x, iCs.y, 250)
    image(i, iCs.x, iCs.y, 200,200);
  }
  push();
    translate(iCs.x, iCs.y);
    stroke('#ba9207');
    for (let i = 133; i < radM; i+=0.1) {
      point(125*sin(i), 125*cos(i));
    }
    if (radM < 493) radM+=8;
  pop();
  
}

function causes () {
  
  stroke('#ba9207');
  rect(900, 150, 200, 130);
  noStroke();
  fill(255);
  const textPos = [920, 190];
  textSize(20);
  textAlign(LEFT);
  text("inequality", textPos[0], textPos[1]);
  text("climate change", textPos[0], textPos[1] + 30);
  text("aid", textPos[0], textPos[1] + 60);
  
}

function interview () {
  
  push();
    translate(250, 250);
    let r = 75;
    noStroke();
    fill(255);
    rectMode(CENTER);
    rect(0, 100, r, 125, 30);
    rect(200, 100, r, 125, 30);
    ellipse(0, 0, r);
    ellipse(200, 0, r);
    stroke('#ba9207');
    fill('#ba9207');
    linLen+= 3;
    if (linLen > 50) linLen = 0;
    strokeWeight(3);
    line(100-linLen, 0, 100+linLen, 0);
    triangle(90-linLen, 0, 100-linLen, 10, 100-linLen, -10);
    triangle(110+linLen, 0, 100+linLen, 10, 100+linLen, -10);
    noFill();
    stroke(255);
    strokeWeight(2);
    rectMode(CORNER);
    rect(-100, -100, 400, 300);
    rect(400, -100, 400, 300);
    for (let i = 0; i < 4; i++) {
      line(425, -75+i*25, 775, -75+i*25);
    }
    fill('#ba9207');
    noStroke();
    frameRate(3);
    for (let j = 0; j < 6; j++) {
      rect(432.5+j*60, 175, 30, random(-20, -150));
    }
    noFill();
    rect(425, 25, 350, 150);
  pop();
  
}

function clock () {
  frameRate(1);
  stroke('#ba9207');
  strokeWeight(3);
  noFill();
  ellipse(v.x, v.y, 400);
  let ang = 360/60;
  push();
    translate(v.x, v.y);
    rotate(frameCount*ang);
    line(0, 0, 0, 180);
  pop();
  push();
    translate(v.x, v.y);
    for (let i = 0; i < 60; i++) {
      point(sin(i*ang)*190, cos(i*ang)*190);
    }
  pop();
}
