var canvas = document.getElementById("game");

var manifest = {
	"images": {
		"bg": "images/bg-mouse-1f4544x640.png",
		"bgCat": "images/bg-cat-1f4544x640.png",
		"mouse": "images/mouse-1f61x28.png"
	},
	"sounds": {
	},
	"fonts": [
	]
};

var apt213 = new Splat.Game(canvas, manifest);

var scene1;
var scene2;

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
	new Splat.Entity(1102, 48, 202, 36),
	new Splat.Entity(887, -25, 78, 13),
	new Splat.Entity(1003, -61, 168, 50),
	new Splat.Entity(100, -200, 100, 100),
	new Splat.Entity(3466, -59, 151, 59)
];

function assetsLoaded() {
	player = new Splat.AnimatedEntity(673, -57, 40, 8, apt213.images.get("mouse"), -15, -20);
	scene1.camera = new Splat.EntityBoxCamera(player, 400, canvas.height, canvas.width/2, canvas.eight/2);
	scene1.camera.y = -canvas.height + 100 + player.height;
	scene1.goal = new Splat.Entity(4225, -60, 41, 11);
	
	scene2.camera = new Splat.EntityBoxCamera(player, 400, canvas.height, canvas.width/2, canvas.eight/2);
	scene2.camera.y = -canvas.height + 100 + player.height;
	
}

var lmx = 0;
var lmy = 0;
function logMouseClick() {
	if (apt213.mouse.buttons[0]) {
		var mx = scene1.camera.x + apt213.mouse.x;
		var my = scene1.camera.y + apt213.mouse.y;
		var w = mx - lmx;
		var h = my - lmy;
		lmx = mx;
		lmy = my;
		console.log("box w="+w+", h="+h);
		console.log("click at " + mx + ", " + my);
		apt213.mouse.buttons[0] = false;
	}
}

//**************** SCENE 1 ***********************
function constrainPlayerToFloor() {
	if (player.x < 568) {
		player.x = 568;
	}
	if (player.x + player.width > 4543) {
		player.x = 4543 - player.width;
	}
	if (player.y < -59) {
		player.y = -59;
	}
	if (player.y + player.height > 84) {
		player.y = 84 - player.height;
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
	constrainPlayerToFloor();

	if (player.collides(scene1.goal)) {
		scene1.stop();
		scene2.start();
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

//**************** SCENE 2 ***********************
scene2 = new Splat.Scene(canvas, function(elapsedMillis) {
	for (var i in furniture) {
		furniture[i].move(elapsedMillis);
	}
	player.move(elapsedMillis);

	for (var i in furniture) {
		var f = furniture[i];
		if (player.collides(f)) {
			if (player.didOverlapHoriz(f) && player.wasAbove(f)) {
				player.y = f.y - player.height - 0.01;
			}
			if (player.didOverlapHoriz(f) && player.wasBelow(f)) {
				player.y = f.y + f.height + 0.01;
			}
			if (player.didOverlapVert(f) && player.wasLeft(f)) {
				player.x = f.x - player.width - 0.01;
			}
			if (player.didOverlapVert(f) && player.wasRight(f)) {
				player.x = f.x + f.width + 0.01;
			}
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
	scene2.camera.drawAbsolute(context, function() {
		context.fillStyle = "#cccccc";
		context.fillRect(0, 0, canvas.width, canvas.height);
	});
	context.drawImage(apt213.images.get("bgCat"), 0, -canvas.height + 100 + player.height);

	for (var i in furniture) {
		furniture[i].draw(context);
	}

	player.draw(context);
});
