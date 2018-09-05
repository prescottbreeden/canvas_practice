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

	let text = "I'm a spooky shadow";
	
	// fill text
	context.font = 'normal 700 24px times';
	context.shadowColor = 'red';
	context.shadowOffsetX = 5;
	context.shadowOffsetY = 5;
	context.shadowBlur = 4;
	context.fillText(text, 100, 100);

	// stroke text
	context.font = 'italic 400 48px monospace';
	context.shadowColor = 'purple';
	context.shadowOffsetX = -5;
	context.shadowOffsetY = -5;
	context.shadowBlur = 4;
	context.strokeText(text, 100, 400);

}

