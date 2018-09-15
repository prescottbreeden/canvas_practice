class Wall {
	constructor(canvas) {

		this.canvas = canvas;
		this.context = this.canvas.getContext('2d');

		// specs
		this.x = this.canvas.width;
		this.y = 0;
		this.w = 100;
		this.h = 0;
		this.gap = 0;
		this.color = getRandomRGBColor();

	}

	draw() {

		let color = `rgb(${this.color.r},${this.color.g},${this.color.b})`
		this.context.fillStyle = color;

		// upper
		this.context.fillRect(this.x, this.y, this.w, this.h);

		// lower
		this.context.fillRect(this.x, this.h + this.gap, this.w, this.canvas.height);
	}
}
