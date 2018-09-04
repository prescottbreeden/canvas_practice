
window.onload = function() {
	let canvas = document.getElementById('ctx');
	let context = canvas.getContext('2d');
	const WIDTH = 860;
	const HEIGHT = 860;
	const radian = Math.PI/180;
	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	/* rectangle functions:
	
		context.rect(xCoordinate, yCoordinate, width, height)

		context.fillRect(xCoordinate, yCoordinate, width, height)

		context.strokeRect(xCoordinate, yCoordinate, width, height)
		
		context.clearRect(xCoordinate, yCoordinate, width, height)
	 
	*/

	const border = 30;
	const lightSquare = '#ffb56f';
	const darkSquare = '#a0522d';

	// background color of board edge
	context.fillStyle = '#c84c00';
	context.fillRect(0, 0, HEIGHT, WIDTH);

	// outline of board edges
	context.strokeStyle = 'grey';
	context.lineWidth = 11;
	context.strokeRect(0, 0, HEIGHT, WIDTH);
	context.stroke();
	
	// outline of gameplay edge
	context.strokeStyle = 'black';
	context.lineWidth = 11;
	context.rect(border, border, HEIGHT-border*2, WIDTH-border*2);
	context.stroke();

	function drawSquares(height, width) {
		for(let row = 0; row < 8; row++) {
			for(let i = 0; i < 8; i++) {
				if(row % 2 == 0) {
					if(i % 2 == 0) {
						context.fillStyle = lightSquare;
					} else {
						context.fillStyle = darkSquare;
					}
				}
				else {
					if(i % 2 != 0) {
						context.fillStyle = lightSquare;
					} else {
						context.fillStyle = darkSquare;
					}
				}
				context.fillRect(border+(width * i), border + (height * row), width, height)
			}
		}
	}

	drawSquares(100, 100);

}

