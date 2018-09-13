window.onload = function() {
	// global variables
	const canvas = document.getElementById('ctx');
	const context = canvas.getContext('2d');
	const WIDTH = window.innerWidth-20;
	const HEIGHT = window.innerHeight-20;
	const radian = Math.PI/180;
	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	// Key Events
	// - keydown
	// - keypress
	// - keyup

	// keyboard definitions
	const KEY_CODE = {
		LEFT: 37,
		UP: 38,
		RIGHT: 39,
		DOWN: 40
	};

	// mouse events
	// - mousedown / mouseup
	// - mouseover / mouseout
	// - mousemove
	// - click
	// - dblclick

	window.addEventListener('keydown', function(event) {
		switch(event.keyCode) {
			case KEY_CODE.LEFT:
				console.log('left');
				break;
			case KEY_CODE.UP:
				console.log('up');
				break;
			case KEY_CODE.RIGHT:
				console.log('right');
				break;
			case KEY_CODE.DOWN:
				console.log('down');
				break;
		}
	})

	canvas.addEventListener('mousedown', function(event) {
		console.log('mousedown');
		console.log(event);	
	})

	canvas.addEventListener('mouseup', function(event) {
		console.log('mouseup');
		console.log(event);	
	})

	canvas.addEventListener('mousemove', function(event) {
		console.log('mousemove');
		console.log(event);	
	})

	canvas.addEventListener('click', function(event) {
		console.log('clicked');
		console.log(event);	
	})
	
	canvas.addEventListener('dblclick', function(event) {
		console.log('dblclick');
		console.log(event);	
	})

	canvas.addEventListener('mouseover', function(event) {
		console.log('mouseover');
		console.log(event);	
	})

	canvas.addEventListener('mouseout', function(event) {
		console.log('mouseout');
		console.log(event);	
	})
}

