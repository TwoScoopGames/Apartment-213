var canvas = document.getElementById("game");

var manifest = {
	"images": {
		"bg": "images/bg-1f5115x640.png",
		"mouse": "images/mouse-1f61x28.png",
		"cat": "images/cat-1f143x86.png",
		"tv": "images/tv1f209x268.png",
		"tv-chair": "images/table-chair-1f288x161.png",
		"table-legs": "images/table-legs1f553x51.png",
		"table-top": "images/table-top1f599x183.png",
		"cheese": "images/cheese-1f36x29.png"
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
var furniture = [];

function assetsLoaded() {
	setupScene1();
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

function handleMovement(elapsedMillis) {
	for (var i in furniture) {
		furniture[i].move(elapsedMillis);
	}
	player.move(elapsedMillis);

	collideWithFurniture(player);
}

function collideWithFurniture(entity) {
	for (var i in furniture) {
		var f = furniture[i];
		if (entity.collides(f)) {
			entity.resolveCollisionWith(f);
		}
	}
	constrainPlayerToFloor(entity);
}

function constrainPlayerToFloor(entity) {
	if (entity.x < 568) {
		entity.x = 568;
	}
	if (entity.x + entity.width > 4543) {
		entity.x = 4543 - entity.width;
	}
	if (entity.y < 473) {
		entity.y = 473;
	}
	if (entity.y + entity.height > 618) {
		entity.y = 618 - entity.height;
	}
}

//**************** SCENE 1 ***********************
function setupScene1() {
	player = new Splat.AnimatedEntity(673, 540, 40, 8, apt213.images.get("mouse"), -15, -20);
	scene1.camera = new Splat.EntityBoxCamera(player, 400, canvas.height, canvas.width/2, canvas.height/2);
	furniture = [
		new Splat.Entity(1109, 586, 209, 34), // tv
		new Splat.Entity(911, 483, 256, 20), // side table
		new Splat.Entity(2113, 473, 198, 30), // hutch 1
		new Splat.Entity(2290, 581, 23, 13), // table leg front left
		new Splat.Entity(2314, 512, 18, 11), // table leg back left
		new Splat.Entity(2868, 579, 21, 9), // table leg front right
		new Splat.Entity(2848, 515, 18, 9), //table left back right
		new Splat.Entity(2860, 472, 198, 36), // hutch 2
		new Splat.Entity(3464, 470, 151, 64), // counter
		new Splat.Entity(4057, 471, 178, 83), // fridge
	];
	scene1.goal = new Splat.Entity(4269, 472, 31, 9);

	var cheeseImg = apt213.images.get("cheese");
	scene1.cheese = new Splat.AnimatedEntity(2751, 552, cheeseImg.width, cheeseImg.height, cheeseImg, 0, 0);

	scene1.hasCheese = false;
	scene1.cat = new Splat.AnimatedEntity(3242, -21, 80, 15, apt213.images.get("cat"), -40, -73);
}

function distanceFromCenters(entity1, entity2) {
	var x1 = entity1.x + (entity1.width / 2);
	var y1 = entity1.y + (entity1.height / 2);

	var x2 = entity2.x + (entity2.width / 2);
	var y2 = entity2.y + (entity2.height / 2);

	var dx = x2 - x1;
	var dy = y2 - y1;
	dy /= 2;
	return (dx * dx) + (dy * dy);
}

scene1 = new Splat.Scene(canvas, function(elapsedMillis) {
	logMouseClick();
	handleMovement(elapsedMillis);
	scene1.cheese.move(elapsedMillis);
	scene1.cat.move(elapsedMillis);
	collideWithFurniture(scene1.cat);

	var chaseRange = 300;
	if (distanceFromCenters(player, scene1.cat) < chaseRange * chaseRange) {
		if (player.x < scene1.cat.x) {
			scene1.cat.vx = -0.7;
		}
		if (player.x > scene1.cat.x) {
			scene1.cat.vx = 0.7;
		}
		if (player.y < scene1.cat.y) {
			scene1.cat.vy = -0.2;
		}
		if (player.y > scene1.cat.y) {
			scene1.cat.vy = 0.2;
		}
	}

	if (player.collides(scene1.cheese)) {
		scene1.hasCheese = true;
	}
	if (player.collides(scene1.cat)) {
		player.vx = -20.0;
		if (scene1.hasCheese) {
			scene1.hasCheese = false;
			scene1.cheese.x = player.x;
			scene1.cheese.y = player.y;
		}
	}
	if (player.collides(scene1.goal) && scene1.hasCheese) {
		scene1.stop();
		setupScene2();
		scene2.start();
	}

	player.vx *= 0.5;
	player.vy *= 0.75;
	scene1.cat.vx *= 0.5;
	scene1.cat.vy *= 0.75;
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
	context.drawImage(apt213.images.get("bg"), 0, 0);

	for (var i in furniture) {
		furniture[i].draw(context);
	}
	if (!scene1.hasCheese) {
		scene1.cheese.draw(context);
	}
	scene1.cat.draw(context);
	scene1.goal.draw(context);

	player.draw(context);

	context.drawImage(apt213.images.get("tv-chair"), 883, 340);
	context.drawImage(apt213.images.get("tv"), 1108, 345);
	context.drawImage(apt213.images.get("table-legs"), 2313, 472);
	context.drawImage(apt213.images.get("table-top"), 2290, 410);
});

//**************** SCENE 2 ***********************
function setupScene2() {
	player = scene1.cat;
	scene2.camera = new Splat.EntityBoxCamera(player, 400, canvas.height, canvas.width/2, canvas.height/2);
}

scene2 = new Splat.Scene(canvas, function(elapsedMillis) {
	handleMovement(elapsedMillis);

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
	context.drawImage(apt213.images.get("bg"), 0, 0);

	for (var i in furniture) {
		furniture[i].draw(context);
	}

	player.draw(context);
});
