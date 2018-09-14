/*
 *
 *Global Functions
 *
 *
 *
 *
 */

window.getRandomInt = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}


window.getRandomRGBColor = () => {
	const red = getRandomInt(0,257);
	const green = getRandomInt(0,257);
	const blue = getRandomInt(0,257);
	return {r: red, g: green, b: blue};
}
