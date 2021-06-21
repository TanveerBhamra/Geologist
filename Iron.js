class Iron {
    constructor(x, y, width, height) {
        var options = {
            restitution: 0.3,
            density: 15,
            friction: 1
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        World.add(world, this.body);
    }
    display() {
        var ironPos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(ironPos.x, ironPos.y);
        rotate(angle);
        strokeWeight(4);
        stroke("black");
        fill("gray");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }

}