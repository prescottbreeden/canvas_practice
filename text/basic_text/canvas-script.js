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
	
	let text = "Rubber Baby Buggy Bumpers";
	context.font = '45px Verdana';
	context.fillText(text, 80, 100);
	context.strokeText(text, 80, 200);

}

