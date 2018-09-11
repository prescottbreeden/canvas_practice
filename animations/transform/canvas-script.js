
window.onload = function() {
	let canvas = document.getElementById('ctx');
	let context = canvas.getContext('2d');
	const WIDTH = window.innerWidth;
	const HEIGHT = window.innerHeight;
	const radian = Math.PI/180;
	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	// context.transform(m11, m12, m21, m22, dx, dy)
	// context.setTransform(m11, m12, m21, m22, dx, dy)
	// context.resetTransform()

	// rectangle
	context.fillStyle = 'red';
	context.fillRect(150, 150, 200, 100);
	context.fill();

	// scale transform
	context.transform(1.5, 0, 0, 1.5, 0, 0);

	// blue rectangle
	context.fillStyle = 'blue';
	context.fillRect(150, 150, 200, 100);
	context.fill();

	// scale transform
	context.transform(1.5, 0, 0, 1.5, 0, 0);
	// context.setTransform(1.5, 0, 0, 1.5, 0, 0);
	// context.resetTransform();

	// green rectangle
	context.fillStyle = 'green';
	context.fillRect(150, 150, 200, 100);
	context.fill();

	// scale transform
	context.transform(1.5, 0, 0, 1.5, 0, 0);

	// purple rectangle
	context.fillStyle = 'purple';
	context.fillRect(150, 150, 200, 100);
	context.fill();
}

