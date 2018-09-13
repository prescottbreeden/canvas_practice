window.onload = function() {
	// global variables
	const canvas = document.getElementById('ctx');
	const context = canvas.getContext('2d');
	const WIDTH = window.innerWidth-20;
	const HEIGHT = window.innerHeight-20;
	const g = 0.2 // gravitational constant
	const DAMPENING = 0.5;
	const REVERSE_DIRECTION = -1;
	const radian = Math.PI/180;
	canvas.width = WIDTH;
	canvas.height = HEIGHT;


	const numOfBalls = 10;
	let balls = [];
	let colors = ['red', 'green', 'blue', 'purple'];

	for(let i = 0; i < numOfBalls; i++) {
		const radius = getRandomInt(5,50);
		const color = colors[getRandomInt(0, colors.length)];
		const ball = new Ball(radius, color);
		ball.context = context;
		ball.x = getRandomInt(ball.r, WIDTH-ball.r);
		ball.y = getRandomInt(ball.r, HEIGHT-ball.r);
		ball.m = ball.r*3;
		ball.vy = getRandomInt(0, 5);
		ball.vx = getRandomInt(0, 5);
		ball.draw();
		balls.push(ball);
	}

	window.requestAnimationFrame(animationLoop);

	function animationLoop() {
		//clear canvas
		context.clearRect(0, 0, WIDTH, HEIGHT);

		// detect collision

		// update
		for(let i = 0; i < balls.length; i++) {
			updatePosition(balls[i]);
		}
		checkBallCollisions();

		// animate
		window.requestAnimationFrame(animationLoop);
	}

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
		if(ball.vy < 0) {
			if(ball.y - ball.r <= 0) {
				ball.y = ball.r;
				ball.vy *= DAMPENING;
				ball.vy *= REVERSE_DIRECTION;
			}
		}
		ball.vy += g;
		ball.y += ball.vy;
		ball.x += ball.vx;
		ball.draw();
	}

	function isCollided(ball1, ball2) {
		return	(Math.sqrt((ball1.x - ball2.x)**2 + (ball1.y - ball2.y)**2) <= ball1.r + ball2.r);
	}

	function checkBallCollisions() {
		for(let i = 0; i < numOfBalls-1; i++) {
			let ball1 = balls[i];
			for(let j = i+1; j < numOfBalls; j++) {
				let ball2 = balls[j];
				if(isCollided(ball1, ball2)) {
					let vx1 = ((ball1.m - ball2.m) * ball1.vx) / (ball1.m + ball2.m); 
							vx1 += (2*ball2.m * ball2.vx) / (ball1.m + ball2.m);

					let vx2 = ((ball2.m - ball1.m) * ball2.vx) / (ball2.m + ball1.m); 
							vx2 += (2*ball1.m * ball1.vx) / (ball1.m + ball2.m);

					ball1.vx *= DAMPENING;
					ball1.vx = vx1;
					ball2.vx *= DAMPENING;
					ball2.vx = vx2;

					let vy1 = ((ball1.m - ball2.m) * ball1.vy) / (ball1.m + ball2.m); 
							vy1 += (2*ball2.m * ball2.vy) / (ball1.m + ball2.m);

					let vy2 = ((ball2.m - ball1.m) * ball2.vy) / (ball2.m + ball1.m); 
							vy2 += (2*ball1.m * ball1.vy) / (ball1.m + ball2.m);

					ball1.vy *= DAMPENING;
					ball1.vy = vy1;
					ball2.vy *= DAMPENING;
					ball2.vy = vy2;
				}
			}

		}
	}

	function distanceNextFrame(a, b) {
    return Math.sqrt((a.x + a.dx - b.x - b.dx)**2 + (a.y + a.dy - b.y - b.dy)**2) - a.radius - b.radius;
	}

	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}
}

