
window.onload = function() {
	let canvas = document.getElementById('ctx');
	let context = canvas.getContext('2d');
	const WIDTH = 600;
	const HEIGHT = 300;
	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	/*
	
	Line Caps -> context.lineCap = "";
	- butt -> default
	- round
	- square
	
	 */

	context.beginPath();
	context.lineCap = 'butt';
	context.strokeStyle="red";
	context.lineWidth = 10;
	context.moveTo(100,100);
	context.lineTo(300,100);
	context.stroke();

	context.beginPath();
	context.lineCap = 'round';
	context.strokeStyle="blue";
	context.lineWidth = 10;
	context.moveTo(100,125);
	context.lineTo(300,125);
	context.stroke();

	context.beginPath();
	context.lineCap = 'square';
	context.strokeStyle="green";
	context.lineWidth = 10;
	context.moveTo(100,150);
	context.lineTo(300,150);
	context.stroke();
}

