class GameBackground {
	constructor(src, canvas) {
		this.canvas = canvas;
		this.context = this.canvas.getContext('2d');

		// specs
		this.x = 0;
		this.y = 0;
		this.w = this.canvas.width;
		this.h = this.canvas.height;
		this.src = src;
		this.img = null;

		// create background image
		this.create();

	}

	create() {
		// create image
		this.img = new Image();
		this.img.src = this.src;
	}

	draw() {
		if(this.img != null) {
			this.context.drawImage(this.img, this.x, this.y, this.w, this.h);
		}
	}
}
