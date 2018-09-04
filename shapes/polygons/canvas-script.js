
window.onload = function() {
	let canvas = document.getElementById('ctx');
	let context = canvas.getContext('2d');
	const WIDTH = 860;
	const HEIGHT = 860;
	const radian = Math.PI/180;
	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	let sides = 8;
	let radius = WIDTH/sides;
	let centerX = radius;
	let centerY = radius;
	let startAngle = 0;
	let angle = (2 * Math.PI)/sides;

	context.beginPath();
	context.fillStyle = 'green';
	context.fillRect(0, 0, HEIGHT, WIDTH);

	function drawPolygon(x, y) {
		context.beginPath();
		context.strokeStyle = 'green';
		context.lineWidth = 5;
		context.lineJoin = 'round';

		// first point
		let beginX = x + radius * Math.cos(startAngle);
		let beginY = y - radius * Math.sin(startAngle);

		context.moveTo(beginX, beginY);

		for(let i = 0; i < sides; i++) {
			// define current
			let currentAngle = startAngle + i * angle; 
			let currentPointX = x + radius * Math.cos(currentAngle);
			let currentPointY = y - radius * Math.sin(currentAngle);

			//draw line
			context.lineTo(currentPointX, currentPointY);
		}
		
	}
	
	// draw canvas
	for(let i = 0; i < sides/2; i++) {
		for(let j = 0; j < sides/2; j++) {
			drawPolygon(centerX + (j*radius*2), centerY + (i*radius*2));
			context.fillStyle = 'lightblue';
			context.closePath();
			context.fill();
			context.stroke();
		}
	}

}

