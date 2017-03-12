//constructor

function Vehicle(x, y) {
    this.pos = createVector(random(width), random(height));
    this.target = createVector(x, y);
    //this.vel = createVector();
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    //size
    this.r = 8;
    this.maxspeed = 5;
    this.maxforce = 0.3;
}


Vehicle.prototype.behaviors = function() {
    var arrive = this.seek(this.target);
    this.applyForce(arrive);
}

Vehicle.prototype.applyForce = function(f) {
    this.acc.add(f);
}

Vehicle.prototype.update = function() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    //resetta la forza f
    this.acc.mult(0);
}

Vehicle.prototype.show = function() {

    stroke(27, 153, 139); // jungle green
    strokeWeight(8);
    point(this.pos.x, this.pos.y);
}

Vehicle.prototype.arrive = function(target) {
    var desired = new p5.Vector.sub(target, this.pos);
    var d = desired.mag();
    var speed = this.maxspeed;
    if (d < 100) {
        speed = map(d, 0, 100, 0, this.maxspeed);

    } else {
        speed
    }
    desired.setMag(speed);
    // steer force
    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    return steer;
}

Vehicle.prototype.seek = function(target) {
    var desired = new p5.Vector.sub(target, this.pos);
    desired.setMag(this.maxspeed);
    // steer force
    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    return steer;
}
