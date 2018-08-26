
window.onload = function() {
	let canvas = document.getElementById('ctx');
	let context = canvas.getContext('2d');
	const WIDTH = 600;
	const HEIGHT = 300;
	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	/*
	 
	lineCap = butt|round|square	
	lineJoin = miter|bevel|round	
	shadowColor = color of shadow
	shadowOffsetX = horizontal distance of the shadow from shape
	shadowOffsetY = vertical distance of the shadow from shape
	shadowBlur = amount of blur on shadow
	
	 */

	context.beginPath();
	context.strokeStyle = 'red';
	context.lineWidth = 15;
	context.lineCap = 'butt';
	context.lineJoin = 'miter';
	context.shadowColor = 'blue';
	context.shadowOffsetX = 10;
	context.shadowOffsetY = 10;
	context.shadowBlur = 2;

	context.moveTo(60, 80);
	context.lineTo(160, 80);
	context.lineTo(80, 180);
	context.lineTo(180, 180);
	context.stroke();

	context.beginPath();
	context.strokeStyle = 'blue';
	context.lineWidth = 15;
	context.lineCap = 'round';
	context.lineJoin = 'round';
	context.shadowColor = 'pink';
	context.shadowOffsetX = 10;
	context.shadowOffsetY = 10;
	context.moveTo(340, 80);
	context.lineTo(240, 80);
	context.lineTo(340, 180);
	context.lineTo(240, 180);
	context.stroke();

	context.beginPath();
	context.strokeStyle = 'green';
	context.lineWidth = 15;
	context.lineCap = 'square';
	context.lineJoin = 'bevel';
	context.shadowColor = 'red';
	context.shadowOffsetX = 10;
	context.shadowOffsetY = 10;
	context.moveTo(420, 80);
	context.lineTo(520, 80);
	context.lineTo(430, 180);
	context.lineTo(530, 180);
	context.stroke();
}

