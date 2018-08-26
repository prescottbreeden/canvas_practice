
window.onload = function() {
	let canvas = document.getElementById('ctx');
	let context = canvas.getContext('2d');
	const WIDTH = 600;
	const HEIGHT = 300;
	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	/*
	 
	quadraticCurveTo(controlX, controlY, endX, endY)

	 */

	const radian = Math.PI / 180;

	context.beginPath();
	context.strokeStyle = 'blue';
	context.lineWidth = 10;
	context.moveTo(200, 250);
	context.quadraticCurveTo(500, 100, 400, 250);
	context.stroke();

}

