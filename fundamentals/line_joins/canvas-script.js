
window.onload = function() {
	let canvas = document.getElementById('ctx');
	let context = canvas.getContext('2d');
	const WIDTH = 600;
	const HEIGHT = 300;
	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	/*
	
	Line Joins -> context.lineJoin = "";
	- miter -> default
	- bevel
	- round
	
	 */

	context.beginPath();
	context.lineWidth = 20;
	context.lineJoin = 'bevel';
	context.moveTo(30,30);
	context.lineTo(130,30);
	context.lineTo(130,130);
	context.lineTo(30,130);
	context.lineTo(30,230);
	context.stroke();

	context.beginPath();
	context.strokeStyle = 'green';
	context.lineWidth = 20;
	context.lineJoin = 'round';
	context.moveTo(60,60);
	context.lineTo(160,60);
	context.lineTo(160,160);
	context.lineTo(60,160);
	context.lineTo(60,260);
	context.stroke();

	context.beginPath();
	context.strokeStyle = 'blue';
	context.lineWidth = 20;
	context.lineJoin = 'miter';
	context.moveTo(90,90);
	context.lineTo(190,90);
	context.lineTo(190,190);
	context.lineTo(90,190);
	context.lineTo(90,290);
	context.stroke();
}

