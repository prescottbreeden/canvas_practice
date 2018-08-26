
window.onload = function() {
	let canvas = document.getElementById('ctx');
	let context = canvas.getContext('2d');
	const WIDTH = 600;
	const HEIGHT = 300;
	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	// draw line
	context.beginPath(); // reset the context state
	context.strokeStyle = 'red';
	context.lineWidth = 10;
	context.moveTo(30, 70); // moveto(x,y) -> starting point of line
	context.lineTo(130,70); // line(x, y) -> end point of the line
	context.stroke();
}

