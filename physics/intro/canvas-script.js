window.onload = function() {
	// global variables
	const canvas = document.getElementById('ctx');
	const context = canvas.getContext('2d');
	const WIDTH = window.innerWidth;
	const HEIGHT = window.innerHeight;
	const radian = Math.PI/180;
	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	const ball = new Ball(30, 'purple');
	ball.context = context;
	ball.x = 400;
	ball.y = 320;
	ball.draw();

	// window.requestAnimationFrame(animationLoop);

	function animationLoop() {
		//clear canvas
		context.clearRect(0, 0, WIDTH, HEIGHT);

		// update

		// draw

		// animate
		window.requestAnimationFrame(animationLoop);
	}

}

