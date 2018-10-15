
window.onload = function() {
	let canvas = document.getElementById('ctx');
	let context = canvas.getContext('2d');
	const WIDTH = 860;
	const HEIGHT = 860;
	const radian = Math.PI/180;
	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	context.beginPath();
	context.strokeStyle = 'green';
	context.lineWidth = 15;
	context.fillStyle = 'red';
	context.arc(450, 300, 150, 0 * radian, 180 * radian, false);
	context.stroke();
	context.fill();

	context.beginPath();
	context.strokStyle = 'purple';
	context.lineWidth = 10;
	context.arc(200, 200, 100, 0, 90* radian, false);
	context.stroke();
}

