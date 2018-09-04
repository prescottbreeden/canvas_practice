
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

	context.strokeStyle = 'red';
	context.lineWidth = 11;
	context.lineJoin = "round";
	context.fillStyle = 'blue';

	// Rect
	context.rect(50,200,200,200);
	context.stroke();
	context.fill();



}

