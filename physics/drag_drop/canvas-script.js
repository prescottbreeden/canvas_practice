window.onload = function() {
	// setup canvas
	const canvas = document.getElementById('ctx');
	const context = canvas.getContext('2d');
	const WIDTH = window.innerWidth-20;
	const HEIGHT = window.innerHeight-20;
	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	// physics global variables
	const g = 0 // gravitational constant
	const DAMPENING = 0.5; // energy loss on collisions
	const REVERSE_DIRECTION = -1;
	const radian = Math.PI/180;
	let currentBall;

	// draw balls
	const numOfBalls = 50;
	let balls = [];

	for(let i = 0; i < numOfBalls; i++) {
		const radius = getRandomInt(25,50);
		const colors = getRandomRGBColor();
		const color = `rgb(${colors.r},${colors.g},${colors.b})`;
		const ball = new Ball(radius, color);
		ball.context = context;
		ball.x = getRandomInt(ball.r, (WIDTH-ball.r)/2);
		ball.y = getRandomInt(ball.r, (HEIGHT-ball.r)/2);
		ball.m = ball.r*3;
		ball.vy = getRandomInt(0, 10);
		ball.vx = getRandomInt(0, 10);
		let coinFlip = getRandomInt(0, 2);
		if(coinFlip) {
			ball.vy *= -1;
		}
		coinFlip = getRandomInt(0, 2);
		if(coinFlip) {
			ball.vx *= -1;
		}
		ball.draw();
		balls.push(ball);
	}

	// event handlers
	canvas.addEventListener('mousedown', function(e) {
		let mouseDownX = e.layerX;
		let mouseDownY = e.layerY;
		mouseCollision(mouseDownX, mouseDownY);
	})

	canvas.addEventListener('mousemove', function(e) {
		let mouseMoveX = e.clientX;
		let mouseMoveY = e.clientY;
		if(currentBall) {
			currentBall.x = mouseMoveX;
			currentBall.y = mouseMoveY;

			drawBalls();
		}

	})

	canvas.addEventListener('mouseup', function(e) {
		currentBall = null;
	})

	window.requestAnimationFrame(animationLoop);

	// ===================== //
	// ----- Functions ----- //
	// ===================== //


	function animationLoop() {
		//clear canvas
		context.clearRect(0, 0, WIDTH, HEIGHT);

		// update
		updatePositions();
		checkBallCollisions();

		// animate
		window.requestAnimationFrame(animationLoop);
	}


	function updatePositions() {
		for(let i = 0; i < balls.length; i++) {
		 const ball = balls[i];
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
	}


	function getDistance(ball1, ball2) {
		return (Math.sqrt((ball1.x - ball2.x)**2 + (ball1.y - ball2.y)**2));
	}


	function isCollided(ball1, ball2) {
		return getDistance(ball1, ball2) <= ball1.r + ball2.r;
	}

	function mouseCollision(mouseX, mouseY) {
		for(let i = 0; i < numOfBalls; i++) {
			if(Math.sqrt((mouseX-balls[i].x)**2+(mouseY-balls[i].y)**2) <= balls[i].r) {
				currentBall = balls[i];
				break;
			}
		}	
	}


	function checkBallCollisions() {
		for(let i = 0; i < numOfBalls-1; i++) {
			const ball1 = balls[i];
			for(let j = i+1; j < numOfBalls; j++) {
				const ball2 = balls[j];
				if(isCollided(ball1, ball2)) {

					// redraw balls to point where radii touch but don't overlap
					const totalDistance = getDistance(ball1, ball2);
					const A = totalDistance - ball1.r;
					const B = totalDistance - ball2.r;
					const overlap = totalDistance - A - B;
					const overlapRatio = overlap/totalDistance;

					// adjust the position of the smaller collided object
					// REFACTOR: both objects should have position adjusted
					let adjustPosition;
					if(ball1.r < ball2.r) {
						adjustPosition = ball1.r * overlapRatio;	
					} else {
						adjustPosition = ball2.r * overlapRatio;		
					}
					if(ball1.x > ball2.x) {
						ball1.x += adjustPosition;
					} else {
						ball2.x += adjustPosition;
					}
					if(ball1.y > ball2.y) {
						ball1.y += adjustPosition;
					} else {
						ball2.y += adjustPosition;
					}

					// adjust velocities while conserving momentum
					let totalMass = ball1.m + ball2.m;
					let vx1 = ((ball1.m-ball2.m)/totalMass)*ball1.vx;
							vx1 += (2*ball2.m/totalMass)*ball2.vx;

					let vx2 = ((ball2.m-ball1.m)/totalMass)*ball2.vx; 
							vx2 += (2*ball1.m/totalMass)*ball1.vx;

					ball1.vx *= DAMPENING;
					ball1.vx = vx1;
					ball2.vx *= DAMPENING;
					ball2.vx = vx2;

					let vy1 = ((ball1.m-ball2.m)/totalMass)*ball1.vy;
							vy1 += (2*ball2.m/totalMass)*ball2.vy;

					let vy2 = ((ball2.m-ball1.m)/totalMass)*ball2.vy; 
							vy2 += (2*ball1.m/totalMass)*ball1.vy;

					ball1.vy *= DAMPENING;
					ball1.vy = vy1;
					ball2.vy *= DAMPENING;
					ball2.vy = vy2;
				}
			}

		}
	}


	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}


	function getRandomRGBColor() {
		const red = getRandomInt(0,257);
		const green = getRandomInt(0,257);
		const blue = getRandomInt(0,257);
		return {r: red, g: green, b: blue};
	}
}



