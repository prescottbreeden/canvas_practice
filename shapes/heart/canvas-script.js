
window.onload = function() {
	let canvas = document.getElementById('ctx');
	let context = canvas.getContext('2d');
	const WIDTH = 875;
	const HEIGHT = 650;
	const radian = Math.PI/180;
	canvas.width = WIDTH;
	canvas.height = HEIGHT;

	function drawQuadraticCurve(startX, startY, 
								controlX, controlY, 
								endX, endY, 
								color, width, drawControls=0) {

		//draw quadratic curve	
		context.beginPath();
		context.strokeStyle = color;
		context.fillStyle = 'red';
		context.lineWidth = width;
		context.moveTo(startX, startY);
		context.quadraticCurveTo(controlX, controlY, endX, endY);
		context.fill();

		if(drawControls) {
			// draw the control points as a circle
			context.beginPath();
			context.strokeStyle = "black";
			context.lineWidth = 10;
			context.arc(controlX, controlY, 5, 0*radian, 360*radian, false);
			context.stroke();

			// draw the lines between control point and path
			context.beginPath();
			context.lineWidth = 1;
			context.moveTo(startX, startY);
			context.lineTo(controlX, controlY);
			context.lineTo(endX, endY);
			context.stroke();
		}
	}

	function drawBezierCurve(startX, startY, 
							controlX1, controlY1, 
							controlX2, controlY2, 
							endX, endY, 
							color, width, drawControls=0) {

		//draw bezier curve
		context.beginPath();
		context.strokeStyle = color;
		context.fillStyle = 'red'
		context.lineWidth = width;
		context.moveTo(startX, startY);
		context.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY);
		context.fill();
		//	context.stroke();

		if(drawControls) {
			// draw the first control point as a circle
			context.beginPath();
			context.strokeStyle = "black";
			context.lineWidth = 10;
			context.arc(controlX1, controlY1, 5, 0*radian, 360*radian, false);
			context.stroke();

			// draw the second control point as a circle
			context.beginPath();
			context.lineWidth = 10;
			context.arc(controlX2, controlY2, 5, 0*radian, 360*radian, false);
			context.stroke();

			// draw the lines between control points and path
			context.beginPath();
			context.lineWidth=1;
			context.moveTo(startX, startY);
			context.lineTo(controlX1, controlY1);
			context.lineTo(controlX2, controlY2);
			context.lineTo(endX, endY);
			context.stroke();
		}
	}
	
	//left side
	drawBezierCurve(430, 130, 
					400, 10, 
					190, 10,
					190, 180,
					'red', 2, 0);
	//context.fillStyle = 'red'
	context.fill();

	drawQuadraticCurve(190, 180,
						190, 380,
						430, 520,
						'red', 2, 0);
	context.fill();

	//right side
	drawBezierCurve(430, 130, 
					470, 10, 
					670, 10,
					670, 180,
					'red', 2, 0);
	context.fill();

	drawQuadraticCurve(670, 180,
						670, 380,
						430, 520,
						'red', 2, 0);

	context.fill();

	context.beginPath();
	context.lineWidth=1;
	context.strokeStyle = 'green';
	context.moveTo(430, 130);
	context.lineTo(190, 180);
	context.lineTo(430, 520);
	context.lineTo(670, 180);
	context.moveTo(430, 130);
	context.fill();

}

