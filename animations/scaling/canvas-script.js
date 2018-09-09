
window.onload = function() {
	let canvas = document.getElementById('ctx');
	let context = canvas.getContext('2d');
	const WIDTH = window.innerWidth;
	const HEIGHT = window.innerHeight;
	const radian = Math.PI/180;
	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	// context.scale(horizontalScaleFactor, verticalScaleFactor) -> Scales the canvas context
	// horizontalScaleFactor (double): Scales the width of the current drawing (1 = 100%)
	// verticalScaleFactor (double): Scales the height of the current drawing (1 = 100%)
	

	// red rectangle
	context.fillStyle = 'red';
	context.fillRect(50, 50, 100, 40);
	context.fill();

	// scale
	context.scale(2, 2);

	// blue rectangle
	context.fillStyle = 'blue';
	context.fillRect(50, 50, 100, 40);
	context.fill();

	// scale
	context.scale(2, 2);

	// green rectangle
	context.fillStyle = 'green';
	context.fillRect(50, 50, 100, 40);
	context.fill();



	// purple rectangle
	context.fillStyle = 'purple';
	context.fillRect(250, 250, 100, 40);
	context.fill();

	// scale
	context.scale(0.5, 0.5);

	// blue rectangle
	context.fillStyle = 'steelblue';
	context.fillRect(250, 250, 100, 40);
	context.fill();

	// scale
	context.scale(0.5, 0.5);

	// green rectangle
	context.fillStyle = 'orange';
	context.fillRect(250, 250, 100, 40);
	context.fill();



}

