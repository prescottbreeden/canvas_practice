window.onload = function() {
	// global variables
	const canvas = document.getElementById('ctx');
	const context = canvas.getContext('2d');
	const WIDTH = window.innerWidth-20;
	const HEIGHT = window.innerHeight-20;
	const radian = Math.PI/180;
	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	const ball = new Ball(30, 'purple');
	ball.context = context;
	ball.x = 400;
	ball.y = 80;
	ball.draw();

	const ball2 = new Ball(30, 'green');
	ball2.context = context;
	ball2.x = 600;
	ball2.y = 80;
	ball2.draw();


	const ball3 = new Ball(30, 'red');
	ball3.context = context;
	ball3.x = 800;
	ball3.y = HEIGHT - ball.r;
	ball3.draw();

	// vertical projections:
	// - free fall
	// - fall with initial velocity
	// - from bottom to top with initial velocity

	const g = 0.2 // gravitational constant

	// velocity
	ball.vy = 0;
	ball2.vy = 3;
	ball3.vy = -20;

	function updatePosition(ball) {
		// if(ball.vy < 0 && ball.y >= HEIGHT - ball.r) { return; }
		if(ball.vy > 0) {
			if(ball.y + ball.r >= HEIGHT) {
				ball.y = HEIGHT-ball.r;
				ball.vy *= .9;
				ball.vy *= -1;
			}
		}
		ball.vy += g;
		ball.y += ball.vy;
		ball.draw();
	}


	window.requestAnimationFrame(animationLoop);

	function animationLoop() {
		//clear canvas
		context.clearRect(0, 0, WIDTH, HEIGHT);

		// update
		updatePosition(ball);
		updatePosition(ball2);
		updatePosition(ball3);

		// animate
		window.requestAnimationFrame(animationLoop);
	}

}

