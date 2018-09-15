const INITIAL = 1;
const GAME_PLAYING = 2;
const GAME_OVER = 3;

const KEY_CODE = {
	r: 82
}

class FlappyMonster {

	constructor(canvas) {
		this._currentState = INITIAL;
		this._velocity = 5;
		this.canvas = canvas;
		this.context = this.canvas.getContext('2d');
		this.counter = 0; // temp debugging variable

		// get-set State
		this.getState = () => this._currentState;
		this.setState = (newState) => this._currentState = newState;

		// get-set Velocity
		this.getVelocity = () => this._velocity;
		this.setVelocity = (newVelocity) => this._velocity = newVelocity;

		// bind event listeners
		this.bindEvents();

		// create Game objects
		this.createObjects();

	}


	start() {
		window.requestAnimationFrame(() => {
			this.runGameLoop();
		});
	}


	runGameLoop() {
		switch (this.getState()) {
			case INITIAL:
				this.drawInitialScreen();
				break;

			case GAME_PLAYING:
				this.drawGamePlayingScreen();
				break;

			case GAME_OVER:
				this.drawGameOverScreen();
				break;
		}
		window.requestAnimationFrame(() => {
			this.runGameLoop();
		});
	}


	drawInitialScreen() {
		//background
		this.context.fillStyle = 'black';
		this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

		// text
		this.context.fillStyle = 'white';
		this.context.font = '36px Arial';
		this.context.fillText('Click to Start', this.canvas.width/2-100, this.canvas.height/2);
	}


	drawGamePlayingScreen() {
		// clear canvas
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

		// draw background
		this.animateBackground();

		// draw score
		this.gameScore.draw();

		// draw walls
		this.drawWalls();

		// draw monster
		this.monster.draw();

	}


	drawWalls() {
		const walls = this.wallFactory.walls;
		for(let i = 0; i < walls.length; i++) {
			walls[i].draw();
			walls[i].x -= this.getVelocity();
		}
		this.removeExtraWalls();
	}


	removeExtraWalls() {
		const walls = this.wallFactory.walls;
		for(let i = 0; i < walls.length; i++) {
			if(walls[i].x + walls[i].w < 0) {
				walls.shift();
			}
		}

	}

	drawGameOverScreen() {
		//background
		this.context.fillStyle = 'black';
		this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

		// text
		this.context.fillStyle = 'white';
		this.context.font = '36px Arial';
		this.context.fillText('Game Over', this.canvas.width/2-100, this.canvas.height/2);
		this.context.font = '24px Arial';
		this.context.fillText('Press R to Restart', this.canvas.width/2-100, this.canvas.height/2 + 50);
	}



	createObjects() {
		// background
		this.background1 = new GameBackground('public/images/back.png', this.canvas);
		this.background2 = new GameBackground('public/images/back.png', this.canvas);
		this.background2.x = this.canvas.width;

		// score
		this.gameScore = new GameScore(this.canvas);
		this.gameScore.x = this.canvas.width -120;
		this.gameScore.y = 80;

		// wall factory
		this.wallFactory = new WallFactory(this.canvas);
		this.wallFactory.generateWalls();

		// monster
		this.monster = new Monster('public/images/monster.png', this.canvas);
	}


	animateBackground() {
		//background 1
		this.background1.draw();
		if(Math.abs(this.background1.x) > this.canvas.width) {
			this.background1.x = this.canvas.width - this.getVelocity();
		}
		this.background1.x -= this.getVelocity();

		// background 2
		this.background2.draw();
		if(Math.abs(this.background2.x) > this.canvas.width) {
			this.background2.x = this.canvas.width - this.getVelocity();
		}
		this.background2.x -= this.getVelocity();
	}



	bindEvents() {
		// mouse listeners
		let game = this;
		game.canvas.addEventListener('click', function(e) {

			switch (game.getState()) {
				case INITIAL:
					game.setState(GAME_PLAYING);
					break;

				case GAME_PLAYING:
					console.log('flap flap flap flap');
					// game.monster.frame++;
					// game.monster.frame %= 4;

					game.monster.vy = -10;
					break;
			}
		})

		// key listeners
		window.addEventListener('keyup', function(e) {
			switch(game.getState()) {
				case GAME_OVER:
					if(e.keyCode === KEY_CODE.r) {
						game.setState(INITIAL);
						game.counter = 0;
					}
					break;
			}
		})
	}
}
