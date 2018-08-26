
window.onload = function() {
	let canvas = document.getElementById('ctx');
	let context = canvas.getContext('2d');
	const WIDTH = 600;
	const HEIGHT = 300;
	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	/*
	 
	arc(x, y, radius, startAngle, endAngle, counterClockWise)	

	 */

	const radian = Math.PI / 180;

	context.beginPath();
	context.strokeStyle = 'blue';
	context.lineWidth = 10;
	context.arc(100, 100, 50, 0, 180 * radian, false);
	context.stroke();

	context.beginPath();
	context.strokeStyle = 'red';
	context.lineWidth = 10;
	context.arc(300, 200, 50, 45 * radian, 130 * radian, false);
	context.stroke();

	context.beginPath();
	context.strokeStyle = 'green';
	context.lineWidth = 10;
	context.arc(300, 100, 50, 45 * radian, 130 * radian, true);
	context.stroke();
}

