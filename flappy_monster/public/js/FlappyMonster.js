const INITIAL = 1;
const GAME_PLAYING = 2;
const GAME_OVER = 3;

const KEY_CODE = {
	r: 82
}

class FlappyMonster {

	constructor(canvas) {
		this._currentState = INITIAL;
		this.canvas = canvas;
		this.context = this.canvas.getContext('2d');
		this.counter = 0; // temp debugging variable

		// get-set
		this.getState = () => this._currentState;
		this.setState = (newState) => this._currentState = newState;

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
		//background
		this.context.fillStyle = 'black';
		this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

		// text
		this.context.fillStyle = 'white';
		this.context.font = '36px Arial';
		this.context.fillText('Game Playing', this.canvas.width/2-100, this.canvas.height/2);
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
					game.counter++;
					if(game.counter === 5) {
						game.setState(GAME_OVER);
					}
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

	createObjects() {

	}



}

