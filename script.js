
//Initial parameters
//branching factor?
var max_iters = 4;
var theta = 45;
var length = 100;

var seed = {x: window.innerWidth/2, y: window.innerHeight - 100};
var trunk = {x: seed.x, y: seed.y-length};
var deg_to_rad = Math.PI / 180.0;

init();
//draw the trunk
drawLine(seed,trunk);
//draw branches
makeTree(max_iters,trunk, theta, length);

function init() {
	var canvas = document.getElementById("canvas");
	canvas.width = document.body.clientWidth;
	canvas.height = document.body.clientHeight;
}

function makeTree(iter, seed, theta, length) {
	if(iter == 0) {
		return;
	}
	var origin = {x:0,y:0};
	var end = {x:0, y:0-length};

	//rotate point
	var branch1 = {
		x: end.x*Math.cos(theta * deg_to_rad) - end.y*Math.sin(theta * deg_to_rad) + seed.x,
		y: end.y*Math.cos(theta * deg_to_rad) + end.x*Math.sin(theta * deg_to_rad) + seed.y
	}

	var branch2 = {
		x: end.x*Math.cos(-1*theta * deg_to_rad) - end.y*Math.sin(-1*theta * deg_to_rad) + seed.x,
		y: end.y*Math.cos(-1*theta * deg_to_rad) + end.x*Math.sin(-1*theta * deg_to_rad) + seed.y
	}

	drawLine(seed,branch1);
	drawLine(seed,branch2);
	makeTree(iter - 1,branch1, theta + 5, length * 0.75);
	makeTree(iter - 1,branch2, theta + 5, length * 0.75);
}

function drawCircle(center) {
	var c=document.getElementById("canvas");
	var context=c.getContext("2d");
	context.beginPath();
  	context.arc(center.x, center.y, 50, 0, 2 * Math.PI, false);
  	context.fillStyle = 'green';
  	context.fill();
  	context.lineWidth = 5;
  	context.strokeStyle = '#003300';
  	context.stroke();
}

function drawLine(start, end) {
	var c=document.getElementById("canvas");
	var ctx=c.getContext("2d");
	ctx.beginPath();
	ctx.moveTo(start.x,start.y);
	ctx.lineTo(end.x,end.y);
	ctx.lineWidth = 5;
	ctx.stroke();
}
