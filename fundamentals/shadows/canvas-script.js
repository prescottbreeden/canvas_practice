
window.onload = function() {
	let canvas = document.getElementById('ctx');
	let context = canvas.getContext('2d');
	const WIDTH = 600;
	const HEIGHT = 300;
	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	/*
	
	Shadow Attributes on canvas 
	- shadowColor
	- shadowOffsetX
	- shadowOffsetY
	- shadowBlur
	
	 */

	context.beginPath();
	context.strokeStyle = "red";
	context.shadowColor = "blue";
	context.shadowOffsetX = 10;
	context.shadowOffsetY = 10;
	context.shadowBlur = 5;
	context.lineWidth = 20;
	context.moveTo(100, 60);
	context.lineTo(200,60);
	context.stroke();

	context.beginPath();
	context.strokeStyle = "red";
	context.shadowColor = "green";
	context.shadowOffsetX = -10;
	context.shadowOffsetY = 10;
	context.shadowBlur = 5;
	context.lineWidth = 20;
	context.moveTo(350, 60);
	context.lineTo(450,60);
	context.stroke();

	context.beginPath();
	context.strokeStyle = "red";
	context.shadowColor = "purple";
	context.shadowOffsetX = 10;
	context.shadowOffsetY = -10;
	context.shadowBlur = 5;
	context.lineWidth = 20;
	context.moveTo(100, 200);
	context.lineTo(200, 200);
	context.stroke();

	context.beginPath();
	context.strokeStyle = "red";
	context.shadowColor = "brown";
	context.shadowOffsetX = -10;
	context.shadowOffsetY = -10;
	context.shadowBlur = 5;
	context.lineWidth = 20;
	context.moveTo(350, 200);
	context.lineTo(450, 200);
	context.stroke();
}

