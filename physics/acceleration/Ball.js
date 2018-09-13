class Ball {
	constructor(radius=10, color='red') {
		this.r = radius;
		this.c = color;
		this.x = 0;
		this.y = 0;
		this.m = 0;
		this.vx = 0;
		this.vy = 0;
		this.context = null;
	}

	draw() {
		if(!this.context) {return}
		this.context.beginPath();
		this.context.fillStyle = this.c;
		this.context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
		this.context.fill();
	}
}
