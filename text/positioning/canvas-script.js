window.onload = function() {
	let canvas = document.getElementById('ctx');
	let context = canvas.getContext('2d');
	const WIDTH = 860;
	const HEIGHT = 860;
	const radian = Math.PI/180;
	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	/*
	context.textAlign = "center | end | left | right | start";
	specifies how text is aligned horizontally
	default value is 'start'

	context.textBaseline = 'alphabetic | top | hanging | middle | ideographic | bottom';
	specifies how text is aligned vertically
	default value is 'alphabetic'

	*/

	// default styling
	context.font = 'italic 400 20px monospace';

	// ------------------------------------- //
	//			VERTICAL ALIGNMENTS			 //
	// ------------------------------------- //

	// vertical reference line
	context.strokeStyle = 'red';
	context.moveTo(WIDTH/2, 20);
	context.lineTo(WIDTH/2, HEIGHT-20);
	context.stroke();

	context.textAlign = 'start';
	context.fillText('start', WIDTH/2, 120)

	context.textAlign = 'left';
	context.fillText('left', WIDTH/2, 140)

	context.textAlign = 'center';
	context.fillText('center', WIDTH/2, 200)

	context.textAlign = 'end';
	context.fillText('end', WIDTH/2, 300)

	context.textAlign = 'right';
	context.fillText('right', WIDTH/2, 320)


	// ------------------------------------- //
	//			HORIZONTAL ALIGNMENTS		 //
	// ------------------------------------- //

	// horizontal reference line
	context.strokeStyle = 'red';
	context.moveTo(20, HEIGHT/2);
	context.lineTo(WIDTH-20, HEIGHT/2);
	context.stroke();

	context.textAlign = 'left';

	context.textBaseline = 'alphabetic'; // used in latin-based languages
	context.fillText('alphabetic', 20, HEIGHT/2);

	context.textBaseline = 'top';
	context.fillText('top', 200, HEIGHT/2);

	context.textBaseline = 'hanging';
	context.fillText('hanging', 300, HEIGHT/2);

	context.textBaseline = 'middle';
	context.fillText('middle', 400, HEIGHT/2);

	context.textBaseline = 'ideographic'; // ideographic used in character-based languages
	context.fillText('ideographic', 500, HEIGHT/2);

	context.textBaseline = 'bottom';
	context.fillText('bottom', 700, HEIGHT/2);
}

