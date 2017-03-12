// cc 59

var font;

function preload() {
    font = loadFont('RubikMonoOne-Regular.ttf');
  //font = loadFont("AvenirNextLTPro-Demi.otf");
}

function setup() {
  createCanvas(600,300);
  background(45,48,71); //gunmetal
  // textFont(font);
  // textSize(150);
  // fill(27, 153, 139); // jungle green
  // noStroke();
  // text("Gina", 100, 200);

  //uso textToPoints per creare la scritta con i punti
  var points = font.textToPoints ('Gina', 100, 200, 150);

  for (var i = 0; i < points.length; i++){
    var pt = points[i];
    stroke(27, 153, 139); // jungle green
    strokeWeight(8);
    point(pt.x,pt.y);
  }

}

function draw() {

}
