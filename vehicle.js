//constructor

function Vehicle(x, y) {
    this.pos = createVector(x, y);
    this.target = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    //size
    this.r = 8;
}

Vehicle.prototype.update = function() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
}

Vehicle.prototype.show = function () {

  stroke(27, 153, 139); // jungle green
  strokeWeight(8);
  point(this.pos.x, this.pos.y);
}
