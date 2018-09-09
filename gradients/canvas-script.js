
window.onload = function() {
	let canvas = document.getElementById('ctx');
	let context = canvas.getContext('2d');
	const WIDTH = window.innerWidth;
	const HEIGHT = window.innerHeight;
	const radian = Math.PI/180;
	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	// context.createLinearGradient(x1, y1, x2, y2);
	// context.createRadialGradient(x1, y1, r1, x2, y2, r2);
	// addColorStop(stop, color);
	
	let gradient = context.createLinearGradient(240, 40, 420, 420);
	gradient.addColorStop(0, 'red');
	gradient.addColorStop(0.25, 'orange');
	gradient.addColorStop(0.5, 'green');
	gradient.addColorStop(0.75, 'blue');
	gradient.addColorStop(1, 'violet');

	let radialGradient = context.createRadialGradient(570, 380, 300, 570, 300, 0);
	radialGradient.addColorStop(0, 'red');
	radialGradient.addColorStop(0.25, 'orange');
	radialGradient.addColorStop(0.5, 'green');
	radialGradient.addColorStop(0.75, 'blue');
	radialGradient.addColorStop(1, 'violet');

	context.strokeStyle = 'blue';
	context.lineWidth = 4;
	// context.fillStyle = gradient;
	context.fillStyle = radialGradient;
	context.rect(240, 40, 420, 420);
	context.stroke();
	context.fill();


}

