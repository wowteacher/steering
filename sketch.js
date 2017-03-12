// cc 59

var font;

function preload() {
  font = loadFont("data/AvenirNextLTPro-Demi.otf", arial);
}

function setup() {
  createCanvas(800,300);
  background(0);
  textFont(font);
  textSize(128);
  fill(255);
  noStroke();
  text("Gina", 10, 200);

}

function draw() {

}
