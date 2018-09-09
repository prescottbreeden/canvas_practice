
window.onload = function() {
	let canvas = document.getElementById('ctx');
	let context = canvas.getContext('2d');
	const WIDTH = window.innerWidth;
	const HEIGHT = window.innerHeight;
	const radian = Math.PI/180;
	canvas.width = WIDTH;
	canvas.height = HEIGHT;
	

	function createRandomRBGColor() {
		var red = getRandomInt(0,257);
		var green = getRandomInt(0,257);
		var blue = getRandomInt(0,257);
		return {r: red, g: green, b: blue};
	}


	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max-min)) + min;
	}


	function drawBall(x, y, radius, color) {
		context.beginPath();
		context.strokeStyle = color;
		context.fillStyle = color;
		context.arc(x, y, radius, 0, 360 * radian, false);
		context.stroke();
		context.fill();
	}

	let ballX = 400;
	let ballY = 300;
	let ballRadius = 30;
	let ballColor = 'orange';
	let changeX = 4;
	let changeY = 4;


	window.requestAnimationFrame(animationLoop);

	function animationLoop() {
	
		// clear canvas
		context.clearRect(0, 0, WIDTH, HEIGHT);

		// update
		if(ballX >= WIDTH-ballRadius || ballX <= 0 + ballRadius) {
			changeX *= -1;
		}

		if(ballY >= HEIGHT-ballRadius || ballY <= 0 + ballRadius) {
			changeY *= -1;
		}

		ballX += changeX;
		ballY += changeY;
		
		// draw
		drawBall(ballX, ballY, ballRadius, ballColor);

		// animate
		window.requestAnimationFrame(animationLoop);
	}
}

