var canvas = document.getElementById("game");

var manifest = {
	"images": {
	},
	"sounds": {
	},
	"fonts": [
	]
};

var apt213 = new Splat.Game(canvas, manifest);

var scene1;

var loading = new Splat.Scene(canvas, function(elapsedMillis) {
	if (apt213.isLoaded()) {
		loading.stop();
		scene1.start();
	}
},
function(context) {
	context.fillStyle = "#ffffff";
	context.fillRect(0, 0, canvas.width, canvas.height);

	context.font = "36px mono";
	context.fillStyle = "#000000";
	context.fillText("loading", 200, 200);
});
loading.start();

scene1 = new Splat.Scene(canvas, function(elapsedMillis) {
},
function(context) {
	context.fillStyle = "#0000ff";
	context.fillRect(0, 0, canvas.width, canvas.height);
});
