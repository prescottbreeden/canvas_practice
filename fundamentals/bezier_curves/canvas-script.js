
window.onload = function() {
	let canvas = document.getElementById('ctx');
	let context = canvas.getContext('2d');
	const WIDTH = 600;
	const HEIGHT = 300;
	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	/*
	 
	bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY)	

	 */

	context.beginPath();
	context.strokeStyle = 'blue';
	context.lineWidth = 10;
	context.moveTo(200, 250);
	context.bezierCurveTo(500, 100, 200, 100, 400, 250);
	context.stroke();

	context.beginPath();
	context.strokeStyle = 'red';
	context.lineWidth = 10;
	context.moveTo(200, 250);
	context.bezierCurveTo(100, 100, 500, 100, 400, 250);
	context.stroke();

	context.beginPath();
	context.strokeStyle = 'green';
	context.lineWidth = 10;
	context.moveTo(200, 250);
	context.bezierCurveTo(200, 380, 380, 100, 400, 250);
	context.stroke();
}

