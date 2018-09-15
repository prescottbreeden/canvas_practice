class GameScore {
	constructor(canvas) {
		
		this.canvas = canvas;
		this.context = this.canvas.getContext('2d');

		// specs
		this.start = new Date();
		this.score = 0;
		this.x = 0;
		this.y = 0;

	}

	draw() {
		// calc score
		let end = new Date();
		this.score = parseFloat((end - this.start) / 1000).toFixed(1);

		// draw
		this.context.font = '45px Verdana';
		this.context.fillText(this.score, this.x, this.y);
	}
}
