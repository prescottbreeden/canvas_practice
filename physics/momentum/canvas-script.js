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

	const ball1 = new Ball(50, 'blue');
	ball1.context = context;
	ball1.x = 290;
	ball1.y = 250;
	ball1.m = ball1.r/5;
	ball1.vy = 0;
	ball1.vx = 6;
	ball1.draw();

	const ball2 = new Ball(30, 'green');
	ball2.context = context;
	ball2.x = 550;
	ball2.y = 250;
	ball2.m = ball2.r/5;
	ball2.vy = 0;
	ball2.vx = -3;
	ball2.draw();

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

		// detect collision
		if(Math.abs(ball1.x - ball2.x) < ball1.r + ball2.r) {

			let v1 = ((ball1.m - ball2.m) * ball1.vx) / (ball1.m + ball2.m); 
					v1 += (2*ball2.m * ball2.vx) / (ball1.m + ball2.m);

			let v2 = ((ball2.m - ball1.m) * ball2.vx) / (ball2.m + ball1.m); 
					v2 += (2*ball1.m * ball1.vx) / (ball1.m + ball2.m);

			ball1.vx *= DAMPENING;
			ball1.vx = v1;
			ball2.vx *= DAMPENING;
			ball2.vx = v2;
		}

		// update
		updatePosition(ball1);
		updatePosition(ball2);

		// animate
		window.requestAnimationFrame(animationLoop);
	}

}

