window.onload = function() {
	// global variables
	var canvas = document.getElementById('ctx');
	var context = canvas.getContext('2d');
	var WIDTH = window.innerWidth - 20;
	var HEIGHT = window.innerHeight -20;
	var radian = Math.PI/180;
	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	// ===============//
	// -- velocity -- //
	// ===============//
	
	// rate of change in the object's position
	// has a magnitude (speed) and a direction
	// is a vector quantity
	// velocity = change in position / change in time

	const colors = ['red', 'blue', 'green', 'purple', 'black'];
	const numBalls = 500;
	let balls = []
	
	makeBalls(numBalls);
	console.log(balls);

	// initialize balls
	function makeBalls(num) {
		for (let i = 0; i < num; i++) {
			let ball = new Ball(30, colors[Math.floor(Math.random()*4)]);
			ball.context = context;
			ball.r = Math.random()*50;
			ball.x = Math.random()*(WIDTH-2*ball.r) + ball.r;
			ball.y = Math.random()*(HEIGHT-2*ball.r) + ball.r;
			ball.draw();

			// velocity
			ball.vx = Math.floor(Math.random()*2) + 1;
			ball.vy = Math.floor(Math.random()*2) + 1;

			randDirection = Math.floor(Math.random()*2);
			if(randDirection === 0) {
				ball.vx *= -1;
				ball.vy *= -1;
			}

			balls.push(ball);
		}
	}

	function updatePosition(ball) {
		if(ball.x + ball.r >= WIDTH || ball.x - ball.r <= 0) {
			ball.vx *= -1;
		}
		if(ball.y + ball.r >= HEIGHT || ball.y - ball.r <= 0) {
			ball.vy *= -1;
		}
		ball.x += ball.vx;
		ball.y += ball.vy;
		
		ball.draw();
	}

	function updateBalls() {
		for(let i = 0; i < balls.length; i++) {
			updatePosition(balls[i]);
		}
	}
	
	window.requestAnimationFrame(animationLoop);

	function animationLoop() {
		//clear canvas
		context.clearRect(0, 0, WIDTH, HEIGHT);

		// update
		updateBalls();
		// draw

		// animate
		window.requestAnimationFrame(animationLoop);
	}

}

