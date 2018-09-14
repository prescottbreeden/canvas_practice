window.onload = function() {
	// setup canvas
	const canvas = document.getElementById('flappy-monster-game');
	const WIDTH = 900;
	const HEIGHT = 600;
	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	const flappyMonster = new FlappyMonster(canvas);
	window.requestAnimationFrame(function() {
		flappyMonster.runGameLoop();
	});

	// physics global variables
	const g = 0 // gravitational constant
	const DAMPENING = 0.5; // energy loss on collisions
	const REVERSE_DIRECTION = -1;
	const radian = Math.PI/180;
	
	let r = getRandomInt(0,11);
	console.log(r);

	// event handlers
	canvas.addEventListener('mousedown', function(e) {

	})

	canvas.addEventListener('mousemove', function(e) {

	})

	canvas.addEventListener('mouseup', function(e) {

	})


	// ===================== //
	// ----- Functions ----- //
	// ===================== //

	function getDistance(obj1, obj2) {
		return (Math.sqrt((obj1.x - obj2.x)**2 + (obj1.y - obj2.y)**2));
	}


	function isCollided(obj1, obj2) {
		return getDistance(obj1, obj2) <= obj1.r + obj2.r;
	}


	function mouseCollision(mouseX, mouseY) {

	}



}
