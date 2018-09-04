window.onload = function() {
	let canvas = document.getElementById('ctx');
	let context = canvas.getContext('2d');
	const WIDTH = 860;
	const HEIGHT = 860;
	const radian = Math.PI/180;
	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	// context.fillText(text, xCoord, yCoord, maxWidth);
	// context.strokeText(text, xCoord, yCoord, maxWidth);
	
	let text = "Rubber Baby Buggy Bumpers";
	context.font = 'italic 800 45px Verdana';
	context.fillText(text, 40, 100);
	context.strokeText(text, 80, 200);

	/*
	 context.font = "font-style font-weight font-size font-family";

		font-style:
			- normal (default)
			- italic
			- oblique
			- inherit (from parent)

		font-weight: 
			- normal (default)
			- bold
			- bolder
			- lighter
			- 100 | 200 | 300 | 400 | 500 | 600 | 7000 \ 800 | 900
			- inherit (from parent)

		font-size:
			- xx-small | x-small | small | smaller | medium | large | larger | x-large | xx-large
			- exact number in px, pt, em, rem
			- inherit

		font-family:
			- family name (eg 'times', 'courier', 'arial'... )
			- generic family (e.g. 'serif', 'sans-serif', cursive', 'fantasy', 'monospace'... )
			- inherit (from parent)

	*/
}

