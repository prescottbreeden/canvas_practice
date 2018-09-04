
window.onload = function() {
	let canvas = document.getElementById('ctx');
	let context = canvas.getContext('2d');
	const WIDTH = 1000;
	const HEIGHT = 800;
	const radian = Math.PI/180;
	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	/* rectangle functions:
	
		context.rect(xCoordinate, yCoordinate, width, height)

		context.fillRect(xCoordinate, yCoordinate, width, height)

		context.strokeRect(xCoordinate, yCoordinate, width, height)
		
		context.clearRect(xCoordinate, yCoordinate, width, height)
	 
	*/

	// Rect
	context.strokeStyle = 'red';
	context.lineWidth = 11;
	context.lineJoin = "round";
	context.fillStyle = 'blue';
	context.rect(50,200,200,200);
	context.stroke();
	context.fill();

	// fillRect
	context.fillStyle = 'green';
	context.fillRect(300, 200, 200, 200);

	// strokeRect
	context.lineWidth = 3;
	context.strokeStyle = 'purple';
	context.lineJoin = 'square';
	context.strokeRect(550, 200, 200, 200);

	context.clearRect(100, 100, 200, 200);

	// clear canvas
	// context.clearRect(0, 0, WIDTH, HEIGHT);


}

