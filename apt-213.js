var canvas = document.getElementById("game");

var manifest = {
	"images": {
		"bg": "images/bg-test1f2298x640.jpg",
		"mouse": "images/mouse-1f61x28.png"
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
		assetsLoaded();
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

var player;
var furniture = [
	new Splat.Entity(100, -200, 100, 100)
];

function assetsLoaded() {
	player = new Splat.AnimatedEntity(0, 0, 40, 8, apt213.images.get("mouse"), -15, -20);
	scene1.camera = new Splat.EntityBoxCamera(player, 400, canvas.height, canvas.width/2, canvas.eight/2);
	scene1.camera.y = -canvas.height + 100 + player.height;
}

function logMouseClick() {
	if (apt213.mouse.buttons[0]) {
		var mx = scene1.camera.x + apt213.mouse.x;
		var my = scene1.camera.y + apt213.mouse.y;
		console.log("click at " + mx + ", " + my);
		apt213.mouse.buttons[0] = false;
	}
}

scene1 = new Splat.Scene(canvas, function(elapsedMillis) {
	logMouseClick();

	for (var i in furniture) {
		furniture[i].move(elapsedMillis);
	}
	player.move(elapsedMillis);

	for (var i in furniture) {
		var f = furniture[i];
		if (player.collides(f)) {
			player.resolveCollisionWith(f);
		}
	}

	player.vx *= 0.5;
	player.vy *= 0.75;
	if (apt213.keyboard.isPressed("left")) {
		player.vx = -0.7;
	}
	if (apt213.keyboard.isPressed("right")) {
		player.vx = 0.7;
	}
	if (apt213.keyboard.isPressed("up")) {
		player.vy = -0.2;
	}
	if (apt213.keyboard.isPressed("down")) {
		player.vy = 0.2;
	}
},
function(context) {
	scene1.camera.drawAbsolute(context, function() {
		context.fillStyle = "#cccccc";
		context.fillRect(0, 0, canvas.width, canvas.height);
	});
	context.drawImage(apt213.images.get("bg"), 0, -canvas.height + 100 + player.height);

	for (var i in furniture) {
		furniture[i].draw(context);
	}

	player.draw(context);
});
