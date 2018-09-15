class WallFactory {
	constructor(canvas) {

		this.canvas = canvas;
		this.context = this.canvas.getContext('2d');

		// specs
		this.gap = 200;
		this.maxGap = 300;
		this.freq = 1500;
		this.walls = [];
	}

	generateWalls() {
		const wallFactory = this;
		setInterval(function() {
			const gap = getRandomInt(wallFactory.gap, wallFactory.maxGap);
			const height = getRandomInt(0, wallFactory.maxGap);

			const wall = new Wall(wallFactory.canvas);
			wall.gap = gap;
			wall.h = height;

			wallFactory.walls.push(wall);

		}, wallFactory.freq);
	}
}
