//constructor

function Vehicle(x, y) {
    this.pos = createVector(random(width), random(height));
    this.target = createVector(x, y);
    //this.vel = createVector();
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    //size
    this.r = 8;
    this.maxspeed = 5; // def 5
    this.maxforce = 0.3;
}


Vehicle.prototype.behaviors = function() {
    var arrive = this.arrive(this.target);
    var mouse = createVector(mouseX, mouseY);
    var flee = this.flee(mouse);

    arrive.mult(1);
    flee.mult(5);

    this.applyForce(arrive);
    this.applyForce(flee);
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

    stroke(27, 153, 139, 10); // jungle green
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

Vehicle.prototype.flee = function(target) {
    var desired = new p5.Vector.sub(target, this.pos);
    var d = desired.mag();
    if (d < 50) {
        desired.setMag(this.maxspeed);
        desired.mult(-1); // si muove nella direzione opposta alla forza
        // steer force
        var steer = p5.Vector.sub(desired, this.vel);
        steer.limit(this.maxforce);
        return steer;
    } else {
        return createVector(0, 0);
    }

}
