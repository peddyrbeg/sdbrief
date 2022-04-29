let iom;
let ear;

function preload() {
  iom = loadImage('IoM Map.png');
  ear = loadImage('earth.png');
}

function setup() {
  let cnv = createCanvas(1200, 900);
  x = (displayWidth - width) /2;
  cnv.position(x);
  angleMode(DEGREES);
  buttons();
  textBar();
  earthParams();
  for (let i = 0; i < 30; i++) {
    ran[i] = floor(random(435, 760));
  }
}

function draw() {
  background('#191919');
  if (active === -1) introText();
  else if (active === 0) {
    earth(ear);
    causes();
  }
  else if (active === 1) {
    briefReset();
    interview();
  }
  else if (active === 2) {
    briefReset();
    clock();
  }

}
