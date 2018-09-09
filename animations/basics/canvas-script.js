
window.onload = function() {
	let canvas = document.getElementById('ctx');
	let context = canvas.getContext('2d');
	const WIDTH = window.innerWidth;
	const HEIGHT = window.innerHeight;
	const radian = Math.PI/180;
	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	// Old ways to 'animate' canvas
	// window.setInterval(drawRandomColorRect, 100);
	// window.setTimeout(drawRandomColorRect, 100);
	
	let start = new Date();
	
	window.requestAnimationFrame(drawRandomColorRect);

	function drawRandomColorRect() {

		// clear canvas
		context.clearRect(0, 0, WIDTH, HEIGHT);

		// random colors
		let color = createRandomRBGColor();
		let fillOpacity = Math.random();
		let fillColor =		`rgba(
							${color.r}, 
							${color.g}, 
							${color.b}, 
							${fillOpacity})`;

		let borderColor =	`rgba(
							${color.r}, 
							${color.g}, 
							${color.b})`;

		let x = getRandomInt(0, WIDTH);
		let y = getRandomInt(0, HEIGHT);
		let w = getRandomInt(0, WIDTH - x);
		let h = getRandomInt(0, HEIGHT - y);

		// draw rect
		context.beginPath();
		context.fillStyle = fillColor;
		context.strokeStyle = borderColor;
		context.rect(x, y, w, h);
		context.stroke();
		context.fill();


		// animate
		window.requestAnimationFrame(drawRandomColorRect);
	}

	function drawRandomColorRect2() {

		let now = new Date();
		if(now - start >= 100) {
			start = now;

			// clear canvas
			context.clearRect(0, 0, WIDTH, HEIGHT);

			// random colors
			let color = createRandomRBGColor();
			let fillOpacity = Math.random();
			let fillColor =		`rgba(
								${color.r}, 
								${color.g}, 
								${color.b}, 
								${fillOpacity})`;

			let borderColor =	`rgba(
								${color.r}, 
								${color.g}, 
								${color.b})`;

			let x = getRandomInt(0, WIDTH);
			let y = getRandomInt(0, HEIGHT);
			let w = getRandomInt(0, WIDTH - x);
			let h = getRandomInt(0, HEIGHT - y);

			// draw rect
			context.beginPath();
			context.fillStyle = fillColor;
			context.strokeStyle = borderColor;
			context.rect(x, y, w, h);
			context.stroke();
			context.fill();

		}

		// animate
		window.requestAnimationFrame(drawRandomColorRect);
	}

	// window.requestAnimationFrame = (function() {
	// 	return	window.requestAnimationFrame		||
	// 			window.webkitRequestAnimationFrame	||
	// 			window.mozRequestAnimationFrame	||
	// 			window.msRequestAnimationFrame	||

	// 			function(callback) {
	// 				window.setTimeout(callback, 1000 / 60);
	// 			};
	// })
	
	function createRandomRBGColor() {
		var red = getRandomInt(0,257);
		var green = getRandomInt(0,257);
		var blue = getRandomInt(0,257);
		return {r: red, g: green, b: blue};
	}


	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max-min)) + min;
	}
}

