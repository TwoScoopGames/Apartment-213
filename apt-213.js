var canvas = document.getElementById("game");

var manifest = {
	"images": {
		"bg": "images/bg-1f5115x640.png",
		"mouse-walk": "images/mouse-anim-2f.png",
		"mouse-cheese": "images/mousecheese-2f.png",
		"cat": "images/cat-1f143x86.png",
		"cat-walk": "images/cat-lv1-walk-5f.png",
		"tv": "images/tv1f209x268.png",
		"tv-chair": "images/table-chair-1f288x161.png",
		"table-legs": "images/table-legs1f553x51.png",
		"table-top": "images/table-top1f599x183.png",
		"cheese": "images/cheese-1f36x29.png",
		"owl": "images/owl-1f132x240.png",
		"landlord": "images/landlord-1f-159x304.png",
		"bowl-empty": "images/cat-bowl-empty.png",
		"bowl-full": "images/cat-bowl-full.png",
		"can": "images/cat-food-can.png",
		"knock": "images/knock-2f.png",
		"door-frame-back": "images/doorframe-back.png",
		"door-frame-front": "images/doorframe-front.png",
		"door-open": "images/door-open.png",
		"door-closed": "images/door-closed.png"
	},
	"sounds": {
		"cat-walk1":		"audio/cat_walk1.wav",
		"cat-walk2":		"audio/cat_walk2.wav",
		"angry-cat":		"audio/angry_cat_sound1.wav",
		"cat-meow1":		"audio/cat_meow1.wav",
		"cat-meow2":		"audio/cat_meow2.wav",
		"title-screen":		"audio/Devin_Magruder_music.mp3",
		"explosion1":		"audio/explosion1.wav",
		"fade1":			"audio/fade1.wav",
		"landlord-knock":	"audio/landlord_knock.wav",
		"level-end-win1":	"audio/level_end_win1.wav",
		"mouse-baby-sound1":"audio/mouse_baby_sound1.wav",
		"mouse-damage1":	"audio/mouse_damage1.wav",
		"mouse-damage2":	"audio/mouse_damage2.wav",
		"mouse-squeak1":	"audio/mouse_squeak1.wav",
		"mouse-squeak2":	"audio/mouse_squeak2.wav",
		"owl-bk-music":		"audio/owl_bk_music.wav"
	},
	"fonts": [
	]
};

var apt213 = new Splat.Game(canvas, manifest);

var scene1;
var scene2;
var scene3;
var scene4;
var credits;


var loading = new Splat.Scene(canvas, function(elapsedMillis) {
	if (apt213.isLoaded()) {
		assetsLoaded();
		loading.stop();
		setupScene1();
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

var mouseWalk;
var mouseWalkCheese;
var catWalk;

function assetsLoaded() {
	mouseWalk = new Splat.makeAnimation(apt213.images.get("mouse-walk"), 2, 100);
	mouseWalkCheese = new Splat.makeAnimation(apt213.images.get("mouse-cheese"), 2, 100);
	catWalk = new Splat.makeAnimation(apt213.images.get("cat-walk"), 5, 100);
}

var player;
var owl;
var cat;
var bowl;
var can;
var furniture = [];

var lmx = 0;
var lmy = 0;
function logMouseClick(scene) {
	if (apt213.mouse.buttons[0]) {
		var mx = scene.camera.x + apt213.mouse.x;
		var my = scene.camera.y + apt213.mouse.y;
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
	if (entity.x < 668) {
		entity.x = 668;
	}
	if (entity.x + entity.width > 4543) {
		entity.x = 4543 - entity.width;
	}
	if (entity.y < 475) {
		entity.y = 475;
	}
	if (entity.y + entity.height > 618) {
		entity.y = 618 - entity.height;
	}
}

//**************** SCENE 1 *****************************************
//**************** SCENE 1 *****************************************
//**************** SCENE 1 *****************************************
//**************** SCENE 1 *****************************************
function setupScene1() {
	player = new Splat.AnimatedEntity(673, 476, 40, 8, mouseWalk, -15, -20);
	scene1.camera = new Splat.EntityBoxCamera(player, 400, canvas.height, canvas.width/2, canvas.height/2);
	bowl = new Splat.AnimatedEntity(3385, 444, 78, 53, apt213.images.get("bowl-empty"), 0, 0);
	can = new Splat.AnimatedEntity(3659, 260, 43, 42, apt213.images.get("can"), 0, 0);
	furniture = [
		new Splat.Entity(1109, 586, 209, 34), // tv
		new Splat.AnimatedEntity(911, 488, 256, 25, apt213.images.get("tv-chair"), -28, -128), // side table
		new Splat.Entity(1786, 473, 198, 32), // hutch 1
		new Splat.Entity(2140, 581, 23, 13), // table leg front left
		new Splat.Entity(2164, 512, 18, 11), // table leg back left
		new Splat.Entity(2718, 579, 21, 9), // table leg front right
		new Splat.Entity(2698, 515, 18, 9), //table left back right
		new Splat.Entity(2884, 472, 198, 38), // hutch 2
		new Splat.Entity(3464, 473, 151, 64), // counter
		new Splat.Entity(4057, 474, 178, 83), // fridge
		new Splat.Entity(4331, 471, 208, 98), // stove
		bowl,
		can,
	];
	scene1.goal = new Splat.Entity(4269, 472, 31, 9);

	var cheeseImg = apt213.images.get("cheese");
	scene1.cheese = new Splat.AnimatedEntity(2751, 552, cheeseImg.width, cheeseImg.height, cheeseImg, 0, 0);

	scene1.hasCheese = false;
	cat = new Splat.AnimatedEntity(3242, -21, 80, 15, catWalk, -40, -73);
	owl = new Splat.AnimatedEntity(1046, 523, 100, 20, apt213.images.get("owl"), -20, -220);
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
	logMouseClick(scene1);
	handleMovement(elapsedMillis);
	scene1.cheese.move(elapsedMillis);
	cat.move(elapsedMillis);
	collideWithFurniture(cat);

	// only the animation attached to player gets run automatically,
	// run the other one manually
	if (scene1.hasCheese) {
		mouseWalk.move(elapsedMillis);
	} else {
		mouseWalkCheese.move(elapsedMillis);
	}
	if (!player.moved()) {
		mouseWalk.reset();
		mouseWalkCheese.reset();
	}
	if (!cat.moved()) {
		catWalk.reset();
	}

	var chaseRange = 300;
	if (distanceFromCenters(player, cat) < chaseRange * chaseRange) {
		var isMoving = false;
		
		if (player.x < cat.x) {
			cat.vx = -0.7;
			isMoving = true;
		}
		if (player.x > cat.x) {
			cat.vx = 0.7;
			isMoving = true;
		}
		if (player.y < cat.y) {
			cat.vy = -0.2;
			isMoving = true;
		}
		if (player.y > cat.y) {
			cat.vy = 0.2;
			isMoving = true;
		}
		
		if(isMoving){
			var t1 = scene1.timer("cat-walk-timer");
			
			if(t1 === undefined || t1 > 400){
				apt213.sounds.play("cat-walk1");
				scene1.startTimer("cat-walk-timer");
			}
		}
	}

	if (player.collides(scene1.cheese)) {
		scene1.hasCheese = true;
		player.sprite = mouseWalkCheese;
	
		var squeakTimer = scene1.timer("mouse-squeak-timer");
		var squeakSoundRandom = Math.floor(Math.random()*2);
		
		if(squeakTimer === undefined || squeakTimer > 2000 + Math.random()*10){
			if(squeakSoundRandom == 0)
				apt213.sounds.play("mouse-squeak1");
			else if(squeakSoundRandom == 1)
				apt213.sounds.play("mouse-squeak2");
			
			scene1.startTimer("mouse-squeak-timer");
		}
	}

	if (player.collides(cat)) {
		if(isMoving){
			var t1 = scene1.timer("mouse-damage-timer");
			
			if(t1 === undefined || t1 > 400){
				apt213.sounds.play("mouse-damage2");
				scene1.startTimer("mouse-damage-timer");
			}
		}
		
		player.vx = -20.0;
		if (scene1.hasCheese) {
			scene1.hasCheese = false;
			player.sprite = mouseWalk;
			scene1.cheese.x = player.x;
			scene1.cheese.y = player.y;
		}
	}
	if (player.collides(scene1.goal) && scene1.hasCheese) {
		scene1.stop();
		setupScene2();
		scene2.start();
		return;
	}

	player.vx *= 0.5;
	player.vy *= 0.75;
	cat.vx *= 0.5;
	cat.vy *= 0.75;
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
	scene1.goal.draw(context);

	cat.draw(context);
	owl.draw(context);
	player.draw(context);

	context.drawImage(apt213.images.get("tv"), 1108, 345);
	context.drawImage(apt213.images.get("table-legs"), 2163, 472);
	context.drawImage(apt213.images.get("table-top"), 2140, 410);
	context.drawImage(apt213.images.get("door-frame-back"), 642, 20);
	context.drawImage(apt213.images.get("door-frame-front"), 536, 20);
	context.drawImage(apt213.images.get("door-closed"), 596, 228);
});

//**************** SCENE 2 *****************************************
//**************** SCENE 2 *****************************************
//**************** SCENE 2 *****************************************
//**************** SCENE 2 *****************************************

function setupScene2() {
	player = cat;
	scene2.camera = new Splat.EntityBoxCamera(player, 400, canvas.height, canvas.width/2, canvas.height/2);
	scene2.owlhasFood = false;
	scene2.bowlhasFood = false;
	scene2.canPickup = new Splat.Entity(3625, 476, 103, 17);
}

scene2 = new Splat.Scene(canvas, function(elapsedMillis) {
	logMouseClick(scene2);

	for (var i in furniture) {
		furniture[i].move(elapsedMillis);
	}
	player.move(elapsedMillis);
	if (!cat.moved()) {
		catWalk.reset();
	}
	if (scene2.bowlHasFood && player.collides(bowl)) {
		scene2.stop();
		setupScene3();
		scene3.start();
		return;
	}
	collideWithFurniture(player);

	owl.move(elapsedMillis);
	if (!scene2.owlHasFood && owl.collides(scene2.canPickup)) {
		scene2.owlHasFood = true;
		furniture.splice(furniture.indexOf(can), 1);
	}
	if (scene2.owlHasFood && owl.collides(bowl)) {
		scene2.bowlHasFood = true;
		bowl.sprite = apt213.images.get("bowl-full");
	}
	collideWithFurniture(owl);

	var chaseRange = 300;
	if (distanceFromCenters(player, owl) < chaseRange * chaseRange) {
		var isMoving = false;
		
		if (player.x < owl.x) {
			owl.vx = -0.7;
			isMoving = true;
		}
		if (player.x > owl.x) {
			owl.vx = 0.7;
			isMoving = true;
		}
		if (player.y < owl.y) {
			owl.vy = -0.2;
			isMoving = true;
		}
		if (player.y > owl.y) {
			owl.vy = 0.2;
			isMoving = true;
		}
		
		var purTimer = scene2.timer("cat-pur-timer");
		var purSoundRandom = Math.floor(Math.random()*2);
		
		if(isMoving){
			var purTimer = scene2.timer("cat-pur-timer");
			
			if(purTimer === undefined || purTimer > 2000 + Math.random()*10){
				if(purSoundRandom == 0)
					apt213.sounds.play("cat-meow1");
				else if(purSoundRandom == 1)
					apt213.sounds.play("cat-meow2");
				
				scene2.startTimer("cat-pur-timer");
			}
		}
	}

	player.vx *= 0.5;
	player.vy *= 0.75;
	owl.vx *= 0.5;
	owl.vy *= 0.75;
	
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

	owl.draw(context);
	player.draw(context);

	context.drawImage(apt213.images.get("tv"), 1108, 345);
	context.drawImage(apt213.images.get("table-legs"), 2163, 472);
	context.drawImage(apt213.images.get("table-top"), 2140, 410);
	context.drawImage(apt213.images.get("door-frame-back"), 642, 20);
	context.drawImage(apt213.images.get("door-frame-front"), 536, 20);
	context.drawImage(apt213.images.get("door-closed"), 596, 228);
});

//**************** SCENE 3 *****************************************
//**************** SCENE 3 *****************************************
//**************** SCENE 3 *****************************************
//**************** SCENE 3 *****************************************
function setupScene3() {
	player = owl;
	scene3.camera = new Splat.EntityBoxCamera(player, 400, canvas.height, canvas.width/2, canvas.height/2);
	scene3.goal = new Splat.Entity(669, 493, 20, 70);
	scene3.knock = Splat.makeAnimation(apt213.images.get("knock"), 2, 100);
	scene3.startTimer("knock");
	scene3.knockCount = 0;
	furniture.push(new Splat.Entity(2140, 514, 599, 78));
}

scene3 = new Splat.Scene(canvas, function(elapsedMillis) {
	logMouseClick(scene3);
	handleMovement(elapsedMillis);

	if (player.collides(scene3.goal)) {
		scene3.stop();
		setupScene4();
		scene4.start();
		return;
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

	scene3.knock.move(elapsedMillis);
},
function(context) {
	scene3.camera.drawAbsolute(context, function() {
		context.fillStyle = "#cccccc";
		context.fillRect(0, 0, canvas.width, canvas.height);
	});
	context.drawImage(apt213.images.get("bg"), 0, 0);

	for (var i in furniture) {
		furniture[i].draw(context);
	}
	scene3.goal.draw(context);

	cat.draw(context);
	owl.draw(context);

	context.drawImage(apt213.images.get("tv"), 1108, 345);

	context.drawImage(apt213.images.get("table-legs"), 2163, 472);
	context.drawImage(apt213.images.get("table-top"), 2140, 410);
	context.drawImage(apt213.images.get("door-frame-back"), 642, 20);
	context.drawImage(apt213.images.get("door-frame-front"), 536, 20);
	context.drawImage(apt213.images.get("door-closed"), 596, 228);

	var knockGap = 100;
	if (scene3.knockCount === 0) {
		knockGap = 3000;
	}
	if (scene3.timer("knock") > knockGap) {
		scene3.stopTimer("knock");
		scene3.startTimer("knock-duration");
		apt213.sounds.play("landlord-knock");
		scene3.knockCount++;
		if (scene3.knockCount === 3) {
			scene3.knockCount = 0;
		}
	}
	if (scene3.timer("knock-duration") >= 0) {
		if (scene3.camera.x < 581) {
			scene3.knock.draw(context, 581, canvas.height/2 - scene3.knock.height/2);
		} else {
			scene3.camera.drawAbsolute(context, function() {
				scene3.knock.draw(context, 50, canvas.height/2 - scene3.knock.height/2);
			});
		}
		if (scene3.timer("knock-duration") > 200) {
			scene3.stopTimer("knock-duration");
			scene3.startTimer("knock");
		}
	}
});

//**************** SCENE 4 ***********************
function setupScene4() {
	player = new Splat.AnimatedEntity(290, 300, 80, 20, apt213.images.get("landlord"), -40, -283);
	scene4.camera = new Splat.EntityBoxCamera(player, 400, canvas.height, canvas.width/2, canvas.height/2);
	scene4.goal = new Splat.Entity(3750, 476, 160, 30);
}

scene4 = new Splat.Scene(canvas, function(elapsedMillis) {
	logMouseClick(scene4);
	handleMovement(elapsedMillis);

	if (player.collides(scene4.goal)) {
		scene4.stop();
		credits.start();
		return;
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
	scene4.camera.drawAbsolute(context, function() {
		context.fillStyle = "#cccccc";
		context.fillRect(0, 0, canvas.width, canvas.height);
	});
	context.drawImage(apt213.images.get("bg"), 0, 0);

	for (var i in furniture) {
		furniture[i].draw(context);
	}
	scene4.goal.draw(context);

	cat.draw(context);
	owl.draw(context);
	player.draw(context);

	//context.drawImage(apt213.images.get("tv-chair"), 883, 360);
	context.drawImage(apt213.images.get("tv"), 1108, 345);
	context.drawImage(apt213.images.get("table-legs"), 2163, 472);
	context.drawImage(apt213.images.get("table-top"), 2140, 410);
	context.drawImage(apt213.images.get("door-frame-back"), 642, 20);
	context.drawImage(apt213.images.get("door-frame-front"), 536, 20);
	context.drawImage(apt213.images.get("door-open"), 650, 230);
});

//**************** CREDITS ***********************
credits = new Splat.Scene(canvas, function(elapsedMillis) {
},
function(context) {
	credits.camera.drawAbsolute(context, function() {
		context.fillStyle = "#000000";
		context.fillRect(0, 0, canvas.width, canvas.height);
		context.fillStyle = "#ffffff";
		context.font = "46px mono";
		context.fillText("credits", canvas.width / 2, canvas.height / 2);
	});
});
