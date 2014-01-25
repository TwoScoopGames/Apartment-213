var canvas = document.getElementById("game");

var manifest = {
	"images": {
		"bg": 		"images/bg-mouse-1f4544x640.png",
		"bgCat": 	"images/bg-cat-1f4544x640.png",
		"mouse": 	"images/mouse-1f61x28.png",
		"cat":		"images/cat-1f143x86.png"
		//"owl":		"images/"	
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
		scene2.start();
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

var playerMouse;
var playerCat;
var npcOwl;

var furniture = [
	new Splat.Entity(100, -200, 100, 100)
];

function assetsLoaded() {
	
	//stage1
	playerMouse = new Splat.AnimatedEntity(0, 0, 40, 8, apt213.images.get("mouse"), -15, -20);
	
	scene1.camera = new Splat.EntityBoxCamera(playerMouse, 400, canvas.height, canvas.width/2, canvas.eight/2);
	scene1.camera.y = -canvas.height + 100 + playerMouse.height;
	
	//stage2
	playerCat = new Splat.AnimatedEntity(0, 0, 85, 15, apt213.images.get("cat"), -38, -70);
	npcOwl = new Splat.AnimatedEntity(0, 0, 100, 15, apt213.images.get("owl"), -50, -50);
	
	scene2.camera = new Splat.EntityBoxCamera(playerMouse, 400, canvas.height, canvas.width/2, canvas.eight/2);
	scene2.camera.y = -canvas.height + 100 + playerMouse.height;
}

function logMouseClick() {
	if (apt213.mouse.buttons[0]) {
		var mx = scene1.camera.x + apt213.mouse.x;
		var my = scene1.camera.y + apt213.mouse.y;
		console.log("click at " + mx + ", " + my);
		apt213.mouse.buttons[0] = false;
	}
}

//**************** SCENE 1 ***********************
scene1 = new Splat.Scene(canvas, function(elapsedMillis) {
	logMouseClick();

	for (var i in furniture) {
		furniture[i].move(elapsedMillis);
	}
	playerMouse.move(elapsedMillis);

	for (var i in furniture) {
		var f = furniture[i];
		if (playerMouse.collides(f)) {
			playerMouse.resolveCollisionWith(f);
		}
	}

	playerMouse.vx *= 0.5;
	playerMouse.vy *= 0.75;
	if (apt213.keyboard.isPressed("left")) {
		playerMouse.vx = -0.7;
	}
	if (apt213.keyboard.isPressed("right")) {
		playerMouse.vx = 0.7;
	}
	if (apt213.keyboard.isPressed("up")) {
		playerMouse.vy = -0.2;
	}
	if (apt213.keyboard.isPressed("down")) {
		playerMouse.vy = 0.2;
	}
},
function(context) {
	scene1.camera.drawAbsolute(context, function() {
		context.fillStyle = "#cccccc";
		context.fillRect(0, 0, canvas.width, canvas.height);
	});
	context.drawImage(apt213.images.get("bg"), 0, -canvas.height + 100 + playerMouse.height);

	for (var i in furniture) {
		furniture[i].draw(context);
	}

	playerMouse.draw(context);
});

//**************** SCENE 2 ***********************
scene2 = new Splat.Scene(canvas, function(elapsedMillis) {
	for (var i in furniture) {
		furniture[i].move(elapsedMillis);
	}
	playerCat.move(elapsedMillis);

	for (var i in furniture) {
		var f = furniture[i];
		if (playerCat.collides(f)) {
			if (playerCat.didOverlapHoriz(f) && playerCat.wasAbove(f)) {
				playerCat.y = f.y - playerCat.height - 0.01;
			}
			if (playerCat.didOverlapHoriz(f) && playerCat.wasBelow(f)) {
				playerCat.y = f.y + f.height + 0.01;
			}
			if (playerCat.didOverlapVert(f) && playerCat.wasLeft(f)) {
				playerCat.x = f.x - playerCat.width - 0.01;
			}
			if (playerCat.didOverlapVert(f) && playerCat.wasRight(f)) {
				playerCat.x = f.x + f.width + 0.01;
			}
		}
	}

	playerCat.vx *= 0.5;
	playerCat.vy *= 0.75;
	if (apt213.keyboard.isPressed("left")) {
		playerCat.vx = -0.7;
	}
	if (apt213.keyboard.isPressed("right")) {
		playerCat.vx = 0.7;
	}
	if (apt213.keyboard.isPressed("up")) {
		playerCat.vy = -0.2;
	}
	if (apt213.keyboard.isPressed("down")) {
		playerCat.vy = 0.2;
	}
},
function(context) {
	scene2.camera.drawAbsolute(context, function() {
		context.fillStyle = "#cccccc";
		context.fillRect(0, 0, canvas.width, canvas.height);
	});
	context.drawImage(apt213.images.get("bgCat"), 0, -canvas.height + 100 + playerCat.height);

	for (var i in furniture) {
		furniture[i].draw(context);
	}

	playerCat.draw(context);
});
