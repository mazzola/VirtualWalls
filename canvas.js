$(document).ready( function() {
	var stage = new Kinetic.Stage({
		container: 'container',
		width: 1119,
	    height: 600
	});

	var layer = new Kinetic.Layer();

	var circleRadius = 20;
	var initX = stage.getWidth() / 2 - circleRadius;
	var initY = stage.getHeight() / 2 - circleRadius;

	var circle = new Kinetic.Circle({
		x: initX,
		y: initY,
		radius: circleRadius,
		fill: 'red',
		stroke: 'black',
		strokeWidth: 2,
		draggable: true
	}) ;

	layer.add(circle);
	stage.add(layer);

	// Set onclick listener for button
	$('#location-button').click(function() {
		console.log(circle.getPosition());
		$('#location').text('x: ' + circle.getX() + ' y: ' + circle.getY());
	});
	
});