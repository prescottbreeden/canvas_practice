
window.onload = function() {
	let canvas = document.getElementById('ctx');
	let context = canvas.getContext('2d');
	const WIDTH = window.innerWidth;
	const HEIGHT = window.innerHeight;
	const radian = Math.PI/180;
	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	// context.rotate(rotationAmount) -> Rotate the canvas context
	// rotationAmount (radian): the angle amount of rotation
	
	// context.translate(x,y) -> moves the canvas and its origin to (x,y)
	// x: distance to move in the horizontal direction
	// y: distance to move in the vertical direction
	

	// rotate
	context.rotate(25 * radian);

	// rectangle
	context.fillStyle = 'red';
	context.fillRect(50, 50, 160, 160);
	context.fill();

	// translate canvas
	context.translate(WIDTH/2, HEIGHT/2 - 160);

	// rectangle
	context.fillStyle = 'red';
	context.fillRect(0, 0, 160, 160);
	context.fill();
}

