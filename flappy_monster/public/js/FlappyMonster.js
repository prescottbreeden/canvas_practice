const INITIAL = 1;
const GAME_PLAYING = 2;
const GAME_OVER = 3;

class FlappyMonster {
	constructor(canvas) {
		this.canvas = canvas;
		this.context = this.canvas.getContext('2d');
		this.currentState = INITIAL;
	}

	runGameLoop() {
		console.log('floppy');
		switch (this.currentState) {
			case INITIAL:
				console.log('initial');
				this.drawInitialScreen();
				break;

			case GAME_PLAYING:
				console.log('playing');
				this.drawGamePlayingScreen();
				break;


			case GAME_OVER:
				console.log('game over');
				this.drawGameOverScreen();
				break;
		}
	}

	drawInitialScreen() {
		//background
		this.context.fillStyle = 'black';
		this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

		// text
		this.context.fillStyle = 'white';
		this.context.font = '36px Arial';
		this.context.fillText('INITIAL', this.canvas.width/2, this.canvas.height/2);
	}

	drawGamePlayingScreen() {
		//background
		this.context.fillStyle = 'black';
		this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

		// text
		this.context.fillStyle = 'white';
		this.context.font = '36px Arial';
		this.context.fillText('Game Playing', this.canvas.width/2, this.canvas.height/2);
	}

	drawGameOverScreen() {
		//background
		this.context.fillStyle = 'black';
		this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

		// text
		this.context.fillStyle = 'white';
		this.context.font = '36px Arial';
		this.context.fillText('Game Over', this.canvas.width/2, this.canvas.height/2);
	}
}


//initial screen
//game playing screen
//game over screen
