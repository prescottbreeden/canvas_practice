
window.onload = function() {
	let canvas = document.getElementById('ctx');
	let context = canvas.getContext('2d');
	const WIDTH = 860;
	const HEIGHT = 860;
	const radian = Math.PI/180;
	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	// body
	context.beginPath();
	context.strokeStyle = 'black';
	context.lineWidth = 15;
	context.fillStyle = 'yellow';
	context.moveTo(450, 300);
	context.lineTo(565,395);
	context.arc(450, 300, 150, 37 * radian, 323 * radian, false);
	context.lineTo(450,300);
	context.stroke();
	context.fill();

	// eye
	context.beginPath();
	context.fillStyle = 'black';
	context.arc(460, 230, 20, 0 * radian, 360 * radian, false);
	context.fill();

	// bow
	let bowX = 418;
	let bowY = 150;
	context.beginPath();
	context.lineWidth = 5;
	context.fillStyle = 'pink';
	context.strokeStyle = 'red';
	context.moveTo(bowX, bowY);
	context.lineTo(bowX-50, bowY-20);
	context.lineTo(bowX-50, bowY+20);
	context.lineTo(bowX+50, bowY-20);
	context.lineTo(bowX+50, bowY+20);
	context.lineTo(bowX, bowY);
	context.fill();
	context.stroke();


	// alternate method
	
	context.beginPath();
	context.strokeStyle = 'black';
	context.lineWidth = 15;
	context.fillStyle = 'yellow';
	context.arc(450,650,150,143*radian, 323*radian, false);
	context.stroke();
	context.fill();

	context.beginPath();
	context.arc(450,650,150,37*radian, 217*radian, false);
	context.stroke();
	context.fill();

	// eye
	context.beginPath();
	context.fillStyle = 'black';
	context.strokeStyle = 'black';
	context.arc(460, 580, 20, 0*radian, 360*radian, false);
	context.fill();
	
	// bow
	bowX = 418;
	bowY = 500;
	context.beginPath();
	context.lineWidth = 5;
	context.fillStyle = 'pink';
	context.strokeStyle = 'red';
	context.moveTo(bowX, bowY);
	context.lineTo(bowX-50, bowY-20);
	context.lineTo(bowX-50, bowY+20);
	context.lineTo(bowX+50, bowY-20);
	context.lineTo(bowX+50, bowY+20);
	context.lineTo(bowX, bowY);
	context.fill();
	context.stroke();
}

