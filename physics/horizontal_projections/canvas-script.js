window.onload = function() {
	// global variables
	const canvas = document.getElementById('ctx');
	const context = canvas.getContext('2d');
	const WIDTH = window.innerWidth-20;
	const HEIGHT = window.innerHeight-20;
	const DAMPENING = 0.9;
	const REVERSE_DIRECTION = -1;
	const radian = Math.PI/180;
	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	const ball = new Ball(30, 'purple');
	ball.context = context;
	ball.x = 400;
	ball.y = 80;
	ball.vy = 0;
	ball.vx = 0;
	ball.draw();

	const ball2 = new Ball(30, 'green');
	ball2.context = context;
	ball2.x = 600;
	ball2.y = 80;
	ball2.vy = 3;
	ball2.vx = 3;
	ball2.draw();


	const ball3 = new Ball(30, 'red');
	ball3.context = context;
	ball3.x = 800;
	ball3.y = HEIGHT - ball.r;
	ball3.vy = -20;
	ball3.vx = -2;
	ball3.draw();

	// vertical projections:
	// - free fall
	// - fall with initial velocity
	// - from bottom to top with initial velocity

	const g = 0.2 // gravitational constant

	// velocity

	function updatePosition(ball) {
		if(ball.vx > 0) {
			if(ball.x + ball.r >= WIDTH) {
				ball.x = WIDTH-ball.r;
				ball.vx *= DAMPENING;
				ball.vx *= REVERSE_DIRECTION;
			}
		}
		if(ball.vx < 0) {
			if(ball.x - ball.r <= 0) {
				ball.x = ball.r;
				ball.vx *= DAMPENING;
				ball.vx *= REVERSE_DIRECTION;
			}
		}
		if(ball.vy > 0) {
			if(ball.y + ball.r >= HEIGHT) {
				ball.y = HEIGHT-ball.r;
				ball.vy *= DAMPENING;
				ball.vy *= REVERSE_DIRECTION;
			}
		}
		ball.vy += g;
		ball.y += ball.vy;
		ball.x += ball.vx;
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

