// cc 59

var font;
var vehicles = [];

function preload() {
    font = loadFont('RubikMonoOne-Regular.ttf');
  //font = loadFont("AvenirNextLTPro-Demi.otf");
}

function setup() {
  createCanvas(800,300);
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
    //disegn i punti basandomi sul constructor
    var vehicle = new Vehicle(pt.x, pt.y);
    //aggiungo all'array
    vehicles.push(vehicle);
    // stroke(27, 153, 139); // jungle green
    // strokeWeight(8);
    // point(pt.x,pt.y);
  }

}

function draw() {
  background(45,48,71); //gunmetal
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.update();
    v.show();
  }
}
