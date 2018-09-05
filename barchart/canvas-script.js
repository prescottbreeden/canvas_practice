// chart specifications
const targetId = 'chart';
const WIDTH = 600;
const HEIGHT = 450;
const radian = Math.PI/180;

window.onload = function() {

	// chart data
	let min = 1;
	let max = 200;

	let data = [
		{label: 'Jan', value: getRandomInt(min, max)},
		{label: 'Feb', value: getRandomInt(min, max)},
		{label: 'March', value: getRandomInt(min, max)},
		{label: 'April', value: getRandomInt(min, max)},
		{label: 'May', value: getRandomInt(min, max)}
	];


	// create chart
	var chart = new BarChart(targetId, WIDTH, HEIGHT, data);

	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min;
	}

}

