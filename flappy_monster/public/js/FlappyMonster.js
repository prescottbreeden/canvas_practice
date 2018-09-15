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
		this.monster.frame++;
		this.monster.frame %= 4;
		this.monster.draw();

		// check collision
		this.checkCollisions();

	}


	drawGameOverScreen() {
		// stop animation
		// clear canvas
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

		// draw background
		this.freezeBackground();

		// draw score
		this.gameScore.draw(this.getState(), this.gameScore.score);

		// draw walls
		this.freezeWalls();

		// draw monster
		this.monster.vx = 0;
		this.monster.frame = 0;
		this.monster.draw();

		// text
		this.context.fillStyle = 'black';
		this.context.font = '36px Arial';
		this.context.fillText('Doink!', this.canvas.width/2-100, this.canvas.height/2);
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

		// monster
		this.monster = new Monster('public/images/monster.png', this.canvas);
	}


	drawWalls() {
		const walls = this.wallFactory.walls;
		for(let i = 0; i < walls.length; i++) {
			walls[i].draw();
			walls[i].x -= this.getVelocity();
		}
		this.removeExtraWalls();
	}


	freezeWalls() {
		const walls = this.wallFactory.walls;
		for(let i = 0; i < walls.length; i++) {
			walls[i].draw();
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


	freezeBackground() {
		//background 1
		this.background1.draw();
		if(Math.abs(this.background1.x) > this.canvas.width) {
			this.background1.x = this.canvas.width - this.getVelocity();
		}

		// background 2
		this.background2.draw();
		if(Math.abs(this.background2.x) > this.canvas.width) {
			this.background2.x = this.canvas.width - this.getVelocity();
		}
	}


	checkCollisions() {
		const walls = this.wallFactory.walls;
		for(let i = 0; i < walls.length; i++) {
			if(this.isCollided(this.monster, walls[i])) {
				this.setState(GAME_OVER);
			}
		}
	}


	isCollided(monster, wall) {
		let collision = false;

		// monster boundaries
		const monsterTop = monster.y;
		const monsterBottom = monster.y + monster.h;
		const monsterLeft = monster.x;
		const monsterRight = monster.x + monster.w;

		// wall boundaries
		const wallTop = wall.h;
		const wallBottom = wall.h + wall.gap;
		const wallLeft = wall.x;
		const wallRight = wall.x + wall.w;
		
		if(monsterRight > wallLeft && monsterLeft < wallRight) {
			if(monsterTop < wallTop || monsterBottom > wallBottom) {
				console.log('doink');
				collision = true;
			}
		}

		return collision;
	}

	reset() {
		this.gameScore.start = new Date();
		this.gameScore.score = 0;
		this.wallFactory.walls = [];
		this.monster.x = 115;
		this.monster.y = 115;
	}


	bindEvents() {
		// mouse listeners
		let game = this;
		game.canvas.addEventListener('click', function(e) {

			switch (game.getState()) {
				case INITIAL:
					game.wallFactory.generateWalls();
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
		window.addEventListener('keydown', function(e) {
			switch(game.getState()) {
				case GAME_OVER:
					if(e.keyCode === KEY_CODE.r) {
						game.reset();
						game.setState(GAME_PLAYING);
						game.counter = 0;
					}
					break;
			}
		})
	}
}

