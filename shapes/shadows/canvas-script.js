window.onload = function() {
	let canvas = document.getElementById('ctx');
	let context = canvas.getContext('2d');
	const WIDTH = 860;
	const HEIGHT = 860;
	const radian = Math.PI/180;
	canvas.width = WIDTH;
	canvas.height = HEIGHT;


	/*
	 
	Shadow attributes on canvas
	- shadowColor
	- shadowOffsetX
	- shadowOffsetY
	- shadowBlur
	
	*/

	// rectangle
	context.beginPath();
	context.strokeStyle = 'green';
	context.fillStyle = 'green';
	context.shadowColor = 'black';
	context.shadowOffsetX = 10;
	context.shadowOffsetY = 10;
	context.shadowBlur = 5;
	context.rect(150, 100, 150, 400);
	context.stroke();
	context.fill();

	// circle
	context.beginPath();
	context.strokeStyle = 'red';
	context.fillStyle = 'red';
	context.shadowColor = 'black';
	context.shadowOffsetX = -10;
	context.shadowOffsetY = -10;
	context.shadowBlur = 5;
	context.arc(650, 300, 100, 0*radian, 360*radian);
	context.stroke();
	context.fill();

}

