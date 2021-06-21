class Rubber {
	constructor(x, y, r) {
		var options = {
			restitution: 1.1,
			density: 0.5,
			friction: 1
		}
		this.x = x;
		this.y = y;
		this.r = r;
		this.body = Bodies.circle(this.x, this.y, (this.r - 20) / 2, options)
		World.add(world, this.body);
	}
	display() {
		var rubberpos = this.body.position;
		var angle = this.body.angle;
		push();
		translate(rubberpos.x, rubberpos.y);
		rotate(angle);
		strokeWeight(4);
		stroke("black");
		fill("darkblue");
		ellipseMode(CENTER)
		ellipse(0, 0, this.r, this.r);
		pop();
	}

}