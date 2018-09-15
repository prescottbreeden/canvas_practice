class Monster {
	constructor(src, canvas) {
		this.canvas = canvas;
		this.context = this.canvas.getContext('2d');

		// specs
		this.x = 115;
		this.y = 115;
		this.w = 115;
		this.h = 115;
		this.vy = 0;
		this.g = 0.5;
		this.src = src;
		this.img = null;
		this.frame = 0;

		this.create();
	}

	create() {
		this.img = new Image();
		this.img.src = this.src;
	}

	draw() {
		if(this.img != null) {
			this.vy += this.g;
			this.y += this.vy;

			if(this.y + this.h > this.canvas.height) {
				this.y = this.canvas.height - this.h;
				this.vy = 0;
			} else if(this.y < 0) {
				this.y = 0;
				this.vy = 0;
			}

			this.context.drawImage(this.img, this.frame*115, 0, 115, 95, this.x, this.y, this.w, this.h);
			this.frame++;
			this.frame %= 4;
		}
	}
}
