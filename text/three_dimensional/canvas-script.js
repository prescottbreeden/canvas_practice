window.onload = function() {
	let canvas = document.getElementById('ctx');
	let context = canvas.getContext('2d');
	const WIDTH = 860;
	const HEIGHT = 860;
	const radian = Math.PI/180;
	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	// context.fillText(text, xCoord, yCoord, maxWidth);
	// context.strokeText(text, xCoord, yCoord, maxWidth);
	let text = "This text will be in 3D";
	context.font = 'normal 600 54px monospace';

	// layer 1
	context.fillStyle = 'black';
	context.fillText(text, 38, 198);

	// layer 2
	context.fillText(text, 37, 197);

	// layer 3
	context.fillText(text, 36, 196);

	// layer 4
	context.fillText(text, 35, 195);

	// original text
	context.fillStyle = 'violet';
	context.fillText(text, 40, 200);

	function draw3DText(text, x, y, style, color, size) {
		context.font = style;
		context.fillStyle = 'black';

		for(let i = 0; i < size; i++) {
			context.fillText(text, x-i, y-i);
		}

		context.fillStyle = color;
		context.fillText(text, x, y);
	}

	draw3DText('I\'m a function', 80, 300, 'normal 600 54px monospace', 'steelblue', 24);
}

