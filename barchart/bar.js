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

	// ------------------------ //
	// ------ DRAW CHART ------ //
	// ------------------------ //

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


		// vertical labels
		this.drawVerticalLabels = () => {
			// define font
			let labelFont = `${this.fontStyle} ${this.fontWeight} ${this.verticalFontSize} ${this.fontFamily}`;
			this.context.font = labelFont;
			this.context.textAlign = 'right';
			this.context.fillStyle = this.fontColor;

			// scale axis values
			let scaledVerticalLabelFrequency = (this.verticalAxisWidth / this.verticalUpperBound) * this.verticalLabelFrequency;
			
			// draw labels
			for(let i = 0; i <= this.itemsNum; i++) {
				let labelText = this.verticalUpperBound - i * this.verticalLabelFrequency;
				let verticalLabelX = this.horizontalMargin - this.horizontalMargin / this.axisRatio;
				let verticalLabelY = this.verticalMargin + i * scaledVerticalLabelFrequency;

				this.context.fillText(labelText, verticalLabelX, verticalLabelY);
			}
		}


		// horizontal labels
		this.drawHorizontalLabels = () => {
			// define font
			let labelFont = `${this.fontStyle} ${this.fontWeight} ${this.verticalFontSize} ${this.fontFamily}`;
			this.context.font = labelFont;
			this.context.textAlign = 'center';
			this.context.textBaseline = 'top';
			this.context.fillStyle = this.fontColor;

			// draw labels
			for(let i = 0; i < this.itemsNum; i++) {
				let horizontalLabelX = this.horizontalMargin + i * this.horizontalLabelFrequency + this.horizontalLabelFrequency/2;
				let horizontalLabelY = this.getHeight() - this.verticalMargin  + this.verticalMargin / this.axisRatio;
				let labels = this.getLabels();
				this.context.fillText(labels[i], horizontalLabelX, horizontalLabelY);
			}
		}


		this.drawHorizontalGuides = () => {
				
			// define style
			this.context.strokeStyle = this.guidelineColor;
			this.context.lineWidth = this.guidelineWidth;

			// scale axis values
			let scaledVerticalLabelFrequency = (this.verticalAxisWidth / this.verticalUpperBound) * this.verticalLabelFrequency;
			
			// draw guides
			for(let i = 0; i <= this.itemsNum; i++) {
				let horizontalGuideStartX = this.horizontalMargin;
				let horizontalGuideStartY = this.verticalMargin + i * scaledVerticalLabelFrequency;
				let horizontalGuideEndX = this.horizontalMargin + this.horizontalAxisWidth;
				let horizontalGuideEndY = this.verticalMargin + i * scaledVerticalLabelFrequency;

				this.context.beginPath();
				this.context.moveTo(horizontalGuideStartX, horizontalGuideStartY);
				this.context.lineTo(horizontalGuideEndX, horizontalGuideEndY);
				this.context.stroke();
			}


		}


		this.drawVerticalGuides = () => {
			// define style
			let labelFont = `${this.fontStyle} ${this.fontWeight} ${this.verticalFontSize} ${this.fontFamily}`;
			this.context.font = labelFont;
			this.context.textAlign = 'center';
			this.context.textBaseline = 'top';
			this.context.fillStyle = this.fontColor;
			
			// draw guides
			for(let i = 0; i <= this.itemsNum; i++) {
				let verticalGuideStartX = this.horizontalMargin + i * this.horizontalLabelFrequency;
				let verticalGuideStartY = this.getHeight() - this.verticalMargin;
				let verticalGuideEndX = this.horizontalMargin + i * this.horizontalLabelFrequency;
				let verticalGuideEndY = this.verticalMargin;

				this.context.beginPath();
				this.context.moveTo(verticalGuideStartX, verticalGuideStartY);
				this.context.lineTo(verticalGuideEndX, verticalGuideEndY);
				this.context.stroke();
			}
		}
	

		// draw bars
		this.drawBars = () => {
			let values = this.getValues();
			let color = this.createRandomColor();

			for(let i = 0; i < this.itemsNum; i++) {
				let fillOpacity = '0.3';
				let fillColor = `rgba(${color.r}, ${color.g}, ${color.b}, ${fillOpacity})`;
				let borderColor = `rgba(${color.r}, ${color.g}, ${color.b})`;

				console.log(fillColor);

				this.context.beginPath();
				let barX = this.horizontalMargin + i * this.horizontalLabelFrequency + this.horizontalLabelFrequency / this.axisRatio;
				let barY = this.getHeight() - this.verticalMargin;
				let barWidth = this.horizontalLabelFrequency -2 * this.horizontalLabelFrequency / this.axisRatio;
				let barHeight = -1 * this.verticalAxisWidth * values[i] / this.maxValue;

				this.context.fillStyle = fillColor;
				this.context.rect(barX, barY, barWidth, barHeight);
				this.context.stroke();
				this.context.fill();
			}
		}


		// pick random color for chart bars
		this.createRandomColor = () => {
			let red = Math.floor(Math.random() * 255);
			let green = Math.floor(Math.random() * 255);
			let blue = Math.floor(Math.random() * 255);
			return {r: red, g: green, b: blue};
		}


		// Draw Chart
		this.drawVerticalAxis();
		this.drawHorizontalAxis();
		this.drawVerticalLabels();
		this.drawHorizontalLabels();
		this.drawHorizontalGuides();
		this.drawVerticalGuides();
		this.drawBars();

	}
}

