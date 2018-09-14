window.onload = function() {
	// setup canvas
	const canvas = document.getElementById('flappy-monster-game');
	const WIDTH = 900;
	const HEIGHT = 600;
	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	const flappyMonster = new FlappyMonster(canvas);
	flappyMonster.start(); 



}
