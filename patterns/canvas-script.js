
window.onload = function() {
	let canvas = document.getElementById('ctx');
	let context = canvas.getContext('2d');
	const WIDTH = window.innerWidth;
	const HEIGHT = window.innerHeight;
	const radian = Math.PI/180;
	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	// context.createPattern(image, reptition);
	// repetition:
	// - repeat: both directions
	// - repeat-x: horizontal only
	// - repeat-y: vertical only
	// - no-repeat: do not repeat
	

	let patternImage = new Image();
	patternImage.src = 'mushroom.png';


	patternImage.onload = function() {
		let pattern = context.createPattern(patternImage, 'repeat');
		context.fillStyle = pattern;
		context.fillRect(0, 0, HEIGHT, WIDTH);
	}



}

