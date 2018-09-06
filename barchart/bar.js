/*
 *
 * bar.js
 * simple, elegant bar chart library
 * {date} ~ version 1.0
 * {url}
 *
 * Copyright 2018 Prescott Breeden
 * Released under the MIT License
 * {license url}
 *
 */

'use strict';

class BarChart {

	constructor(targetId, width, height, data) {
		const _id = targetId;
		const _width = width;
		const _height = height;
		const _data = data;
		const _labels = [];
		const _values = [];

		// this.drawVerticalAxis = this.drawVerticalAxis.bind(this);
		this.getId = () => {return _id;}
		this.getWidth = () => {return _width;}
		this.getHeight = () => {return _height;}
		this.getData = () => {return _data;}
		this.getLabels = () => {return _labels;}
		this.getValues = () => {return _values;}

		this.setChartParameters();
		this.createCanvas();	
		this.importData();
		this.prepareData();
		this.drawChart();
		
		console.log(this);
	}


	setChartParameters() {
		// Axis Configurations
		this.axisRatio = 10; // in terms of percentage
		this.verticalMargin = (this.getHeight() * this.axisRatio) / 100;
		this.horizontalMargin = (this.getWidth() * this.axisRatio) / 100;
		this.axisColor = '#b1b1b1';
		this.axisWidth = 1.75;

		// Label Specifications
		this.fontRatio = 3; // in terms of percentage
		this.fontFamily = 'times';
		this.fontStyle = 'normal';
		this.fontWeight = '300';
		this.fontColor = '#666';
		this.verticalFontSize = (this.getHeight() * this.fontRatio) / 100;
		this.horizontalFontSize = (this.getWidth() * this.fontRatio) / 100;

		// Guideline Configurations
		this.guidelineColor = '#e5e5e5';
		this.guidelineWidth = 0.5;

	}


	createCanvas() {
		let canvas = document.createElement('canvas');
		canvas.id = this.getId() + '-' + Math.random();
		canvas.width = this.getWidth();
		canvas.height = this.getHeight();

		// append canvas to target container
		document.getElementById(this.getId()).innerHTML = ''; // clean container
		document.getElementById(this.getId()).appendChild(canvas); // add canvas to clean container

		// add canvas to chart object
		this.canvas = canvas;
		this.context = canvas.getContext('2d');

	}


	importData() {
		// Data sets
		this.getData().forEach((item) => { 
			this.getLabels().push(item.label);
			this.getValues().push(item.value);
		});
	}


	prepareData() {
		console.log('inside prep data');
		this.itemsNum = this.getData().length;
		this.maxValue = Math.max.apply(null, this.getValues());
		this.minValue = Math.min.apply(null, this.getValues());

		// axis specifications
		this.verticalAxisWidth = this.getHeight() - 2 * this.verticalMargin; // bottom and top margins
		this.horizontalAxisWidth = this.getWidth() - 2 * this.horizontalMargin; // bottom and top margins

		// label specifications
		this.verticalUpperBound = Math.ceil(this.maxValue / 10) * 10;
		this.verticalLabelFrequency = this.verticalUpperBound / this.itemsNum;
		this.horizontalLabelFrequency = this.horizontalAxisWidth / this.itemsNum;

	}


	drawChart() {
		// vertical axis
		this.drawVerticalAxis = () => {
			this.context.beginPath();
			this.context.strokeStyle = this.axisColor;
			this.context.lineWidth = this.axisWidth;
			this.context.moveTo(this.horizontalMargin, this.verticalMargin);
			this.context.lineTo(this.horizontalMargin, this.getHeight() - this.verticalMargin);
			this.context.stroke();
		}
		
		// horizontal axis
		this.drawHorizontalAxis = () => {
			this.context.beginPath();
			this.context.strokeStyle = this.axisColor;
			this.context.lineWidth = this.axisWidth;
			this.context.moveTo(this.horizontalMargin, this.getHeight() - this.verticalMargin);
			this.context.lineTo(this.getWidth() - this.horizontalMargin, this.getHeight() - this.verticalMargin);
			this.context.stroke();
		}

		this.drawVerticalAxis();
		this.drawHorizontalAxis();

	}


}

