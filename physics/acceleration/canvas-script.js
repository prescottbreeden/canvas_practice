window.onload = function() {
	// global variables
	const canvas = document.getElementById('ctx');
	const context = canvas.getContext('2d');
	const WIDTH = window.innerWidth;
	const HEIGHT = window.innerHeight;
	const radian = Math.PI/180;
	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	const ball = new Ball(30, 'green');
	ball.context = context;
	ball.x = 100;
	ball.y = 250;
	ball.draw();

	// What is acceleration?
	// Change of velocity over change in time
	// vector quantity

	// velocity;
	ball.vx = 1;
	ball.vy = -1.5;

	// acceleration
	let ax = 0.05;
	let ay = 0.005;

	window.requestAnimationFrame(animationLoop);

	function animationLoop() {
		//clear canvas
		context.clearRect(0, 0, WIDTH, HEIGHT);

		// update
		ball.vx += ax;
		ball.vy += ay;

		ball.x += ball.vx;
		ball.y += ball.vy;

		// draw
		ball.draw();

		// animate
		window.requestAnimationFrame(animationLoop);
	}

}

