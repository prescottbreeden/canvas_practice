
window.onload = function () {

	// Definitions
	let canvas = document.getElementById("sprite-lab-canvas");
	let context = canvas.getContext("2d");

	let isBackgroundLoaded = false;
	let isHeroLoaded = false;

	// background
	let background = new Image();
	background.src = 'back.png';
	background.onload = function () {
		isBackgroundLoaded = true;
	}

	// character
	let hero = new Image();
	hero.src = 'sprite.png';
	hero.onload = function() {
		isHeroLoaded = true;
	}


	window.requestAnimationFrame(animationLoop);


	// cell specifications
	let cellWidth = 256;
	let cellHeight = 256;
	let currentCell = 0;

	// time specifications
	let aStart = new Date();

	// move specifications
	let moveAmount = 5;
	let moveX = 100;

	function animationLoop() {
		let aNow = new Date();
		if(aNow - aStart >= 10) {
			aStart = aNow;

			// clear
			context.clearRect(0, 0, canvas.width, canvas.height);

			// update
			currentCell++;
			currentCell %= 6;
			if(moveX >= canvas.width) {
				moveX = -1*cellWidth;
			} else {
				moveX += moveAmount;
			}

			// draw
			if(isBackgroundLoaded) {
				context.drawImage(background, 0, 0, canvas.width, canvas.height);
			}

			if(isHeroLoaded) {
				context.drawImage(hero, currentCell * cellWidth, 0, cellWidth, cellHeight, moveX, 280, 100, 100);
			}

		}

		// animate
		window.requestAnimationFrame(animationLoop);
	}


	window.requestAnimationFrame = (function(){
		return  window.requestAnimationFrame       ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame    ||
			window.msRequestAnimationFrame     ||
			function(callback){
				window.setTimeout(callback, 1000 / 60);
			};
	})();

};
