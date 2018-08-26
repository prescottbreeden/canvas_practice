
window.onload = function() {
	let canvas = document.getElementById('ctx');
	let context = canvas.getContext('2d');
	const WIDTH = 600;
	const HEIGHT = 300;
	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	// draw line
	context.beginPath(); // reset the context state
	context.lineWidth = 5;
	context.moveTo(30, 30); // moveto(x,y) -> starting point of line
	context.lineTo(80, 80); // line(x, y) -> end point of the line
	context.lineTo(130, 30); // line(x, y) -> end point of the line
	context.lineTo(180, 80); // line(x, y) -> end point of the line
	context.lineTo(230, 30); // line(x, y) -> end point of the line
	context.lineTo(280, 80); // line(x, y) -> end point of the line
	context.lineTo(330, 30); // line(x, y) -> end point of the line
	context.lineTo(380, 80); // line(x, y) -> end point of the line
	context.lineTo(430, 30); // line(x, y) -> end point of the line
	context.lineTo(480, 80); // line(x, y) -> end point of the line
	context.stroke();

	// // draw line
	// context.beginPath(); // reset the context state
	// context.moveTo(80, 80); // moveto(x,y) -> starting point of line
	// context.lineTo(130, 30); // line(x, y) -> end point of the line
	// context.stroke();

	// // draw line
	// context.beginPath(); // reset the context state
	// context.moveTo(130, 30); // moveto(x,y) -> starting point of line
	// context.lineTo(180, 80); // line(x, y) -> end point of the line
	// context.stroke();

	// // draw line
	// context.beginPath(); // reset the context state
	// context.moveTo(180, 80); // moveto(x,y) -> starting point of line
	// context.lineTo(230, 30); // line(x, y) -> end point of the line
	// context.stroke();
}

