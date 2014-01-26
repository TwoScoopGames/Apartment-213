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
		"owl-walk": "images/owl-walk-24f.png",
		"landlord-walk": "images/landlord-lv4-anim.png",
		"bowl-empty": "images/cat-bowl-empty.png",
		"bowl-full": "images/cat-bowl-full.png",
		"can": "images/cat-food-can.png",
		"knock": "images/knock-2f.png",
		"door-frame-back": "images/doorframe-back.png",
		"door-frame-front": "images/doorframe-front.png",
		"door-open": "images/door-open.png",
		"door-closed": "images/door-closed.png",
		"bg-flipped": "images/flipped/bg-1f5115x640.png",
		"mouse-walk-flipped": "images/flipped/mouse-anim-2f.png",
		"mouse-cheese-flipped": "images/flipped/mousecheese-2f.png",
		"cat-flipped": "images/flipped/cat-1f143x86.png",
		"cat-walk-flipped": "images/flipped/cat-lv1-walk-5f.png",
		"tv-flipped": "images/flipped/tv1f209x268.png",
		"tv-chair-flipped": "images/flipped/table-chair-1f288x161.png",
		"table-legs-flipped": "images/flipped/table-legs1f553x51.png",
		"table-top-flipped": "images/flipped/table-top1f599x183.png",
		"cheese-flipped": "images/flipped/cheese-1f36x29.png",
		"owl-walk-flipped": "images/flipped/owl-walk-24f.png",
		"landlord-walk-flipped": "images/flipped/landlord-lv4-anim.png",
		"landlord-flipped": "images/flipped/landlord-1f-159x304.png",
		"bowl-empty-flipped": "images/flipped/cat-bowl-empty.png",
		"bowl-full-flipped": "images/flipped/cat-bowl-full.png",
		"can-flipped": "images/flipped/cat-food-can.png",
		"knock-flipped": "images/flipped/knock-2f.png",
		"door-frame-back-flipped": "images/flipped/doorframe-back.png",
		"door-frame-front-flipped": "images/flipped/doorframe-front.png",
		"door-open-flipped": "images/flipped/door-open.png",
		"door-closed-flipped": "images/flipped/door-closed.png"
	},
	"sounds": {
		"cat-walk1":		"audio/cat_walk1.wav",
		"cat-walk2":		"audio/cat_walk2.wav",
		"cat-walk3":		"audio/cat_walk3.wav",
		"angry-cat":		"audio/angry_cat_sound1.wav",
		"cat-meow1":		"audio/cat_meow1.wav",
		"cat-meow2":		"audio/cat_meow2.wav",
		"door-open1":		"audio/door_open1.wav",
		"opossum-walk1":	"audio/opossum_walk1.wav",
		"owl-walk1":		"audio/owl_walk1.wav",
		"owl-walk2":		"audio/owl_walk2.wav",
		"owl-walk3":		"audio/owl_walk3.wav",
		"screen-music":		"audio/Devin_Magruder_music.mp3",
		"explosion1":		"audio/explosion1.wav",
		"fade1":			"audio/fade1.wav",
		"landlord-knock":	"audio/landlord_knock.wav",
		"level-end-win1":	"audio/level_end_win1.wav",
		"mouse-baby-sound1":"audio/mouse_baby_sound1.wav",
		"mouse-damage1":	"audio/mouse_damage1.wav",
		"mouse-damage2":	"audio/mouse_damage2.wav",
		"mouse-squeak1":	"audio/mouse_squeak1.wav",
		"mouse-squeak2":	"audio/mouse_squeak2.wav",
		"owl-bk-music":		"audio/owl_bk_music.wav",
		"credits-clap1":	"audio/credits_clap1.wav"
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
var mouseWalkFlipped;
var mouseWalkCheese;
var mouseWalkCheeseFlipped;
var catWalk;
var catWalkFlipped;
var owlWalk;
var owlWalkFlipped;
var landlordWalk;
var landlordWalkFlipped;

function assetsLoaded() {
	mouseWalk = new Splat.makeAnimation(apt213.images.get("mouse-walk"), 2, 100);
	mouseWalkFlipped = new Splat.makeAnimation(apt213.images.get("mouse-walk-flipped"), 2, 100);
	mouseWalkCheese = new Splat.makeAnimation(apt213.images.get("mouse-cheese"), 2, 100);
	mouseWalkCheeseFlipped = new Splat.makeAnimation(apt213.images.get("mouse-cheese-flipped"), 2, 100);
	catWalk = new Splat.makeAnimation(apt213.images.get("cat-walk"), 5, 100);
	catWalkFlipped = new Splat.makeAnimation(apt213.images.get("cat-walk-flipped"), 5, 100);
	owlWalk = new Splat.makeAnimation(apt213.images.get("owl-walk"), 24, 100);
	owlWalkFlipped = new Splat.makeAnimation(apt213.images.get("owl-walk-flipped"), 24, 100);
	landlordWalk = new Splat.makeAnimation(apt213.images.get("landlord-walk"), 25, 25);
	landlordWalkFlipped = new Splat.makeAnimation(apt213.images.get("landlord-walk-flipped"), 25, 25);
}

var player;
var playerAnimation;
var playerAnimationFlipped;
var owl;
var cat;
var bowl;
var can;
var door;
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
	if (entity.x < 368) {
		entity.x = 368;
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

function drawEntities(context, entities) {
	entities.sort(function(a, b) {
		return a.y - b.y;
	});
	for (var i in entities) {
		entities[i].draw(context);
	}
}

//**************** SCENE 1 *****************************************
//**************** SCENE 1 *****************************************
//**************** SCENE 1 *****************************************
//**************** SCENE 1 *****************************************
function addCommonFurniture() {
	furniture.push(new Splat.AnimatedEntity(1109, 586, 209, 34, apt213.images.get("tv"), -1, -241)); // tv
	furniture.push(new Splat.AnimatedEntity(911, 488, 256, 25, apt213.images.get("tv-chair"), -28, -128)); // side table
	furniture.push(new Splat.Entity(1786, 473, 198, 32)); // hutch 1
	furniture.push(new Splat.AnimatedEntity(2140, 581, 23, 13, apt213.images.get("table-top"), 0, -171)); // table leg front left
	furniture.push(new Splat.AnimatedEntity(2164, 512, 18, 11, apt213.images.get("table-legs"), -1, -40)); // table leg back left
	furniture.push(new Splat.Entity(2718, 579, 21, 9)); // table leg front right
	furniture.push(new Splat.Entity(2698, 515, 18, 9)); //table left back right
	furniture.push(new Splat.Entity(2877, 472, 198, 30)); // hutch 2
	furniture.push(new Splat.Entity(3464, 473, 151, 64)); // counter
	furniture.push(new Splat.Entity(4057, 474, 178, 83)); // fridge
	furniture.push(new Splat.Entity(4331, 471, 208, 98)); // stove
	furniture.push(new Splat.AnimatedEntity(642, 469, 27, 31, apt213.images.get("door-frame-back"), 0, -449));
	furniture.push(new Splat.AnimatedEntity(552, 559, 56, 65, apt213.images.get("door-frame-front"), -16, -539));
	door = new Splat.AnimatedEntity(604, 500, 56, 65, apt213.images.get("door-closed"), -8, -272);
	furniture.push(door);
}
function setupScene1() {
	player = new Splat.AnimatedEntity(673, 476, 40, 8, mouseWalk, -15, -20);
	player.frictionX = 0.5;
	player.frictionY = 0.75;

	addCommonFurniture();

	bowl = new Splat.AnimatedEntity(3385, 444, 78, 53, apt213.images.get("bowl-empty"), 0, 0);
	furniture.push(bowl);

	can = new Splat.AnimatedEntity(3659, 260, 43, 42, apt213.images.get("can"), 0, 0);
	furniture.push(can);

	cat = new Splat.AnimatedEntity(3242, -21, 80, 15, catWalk, -40, -73);
	cat.frictionX = 0.5;
	cat.frictionY = 0.75;
	// furniture.push(cat);

	owl = new Splat.AnimatedEntity(1046, 523, 100, 20, owlWalk, -20, -220);
	owl.frictionX = 0.5;
	owl.frictionY = 0.75;
	// furniture.push(owl);

	scene1.goal = new Splat.Entity(4269, 472, 31, 9);
	scene1.camera = new Splat.EntityBoxCamera(player, 400, canvas.height, canvas.width/2, canvas.height/2);

	var cheeseImg = apt213.images.get("cheese");
	scene1.cheese = new Splat.AnimatedEntity(2567, 556, cheeseImg.width, cheeseImg.height, cheeseImg, 0, 0);

	scene1.hasCheese = false;
}

function distanceSquared(x1, y1, x2, y2) {
	var dx = x2 - x1;
	var dy = y2 - y1;
	dy /= 2;
	return (dx * dx) + (dy * dy);
}

function distanceFromCenters(entity1, entity2) {
	var x1 = entity1.x + (entity1.width / 2);
	var y1 = entity1.y + (entity1.height / 2);

	var x2 = entity2.x + (entity2.width / 2);
	var y2 = entity2.y + (entity2.height / 2);

	return distanceSquared(x1, y1, x2, y2);
}

function moveEntityViaKeyboard(entity) {
	if (apt213.keyboard.isPressed("left")) {
		entity.vx = -0.7;
	}
	if (apt213.keyboard.isPressed("right")) {
		entity.vx = 0.7;
	}
	if (apt213.keyboard.isPressed("up")) {
		entity.vy = -0.2;
	}
	if (apt213.keyboard.isPressed("down")) {
		entity.vy = 0.2;
	}
}

function chase(entity, target, range) {
	var r2 = range * range;
	if (distanceFromCenters(entity, target) < r2) {
		if (target.x < entity.x) {
			entity.vx = -0.7;
		}
		if (target.x > entity.x) {
			entity.vx = 0.7;
		}
		if (target.y < entity.y) {
			entity.vy = -0.2;
		}
		if (target.y > entity.y) {
			entity.vy = 0.2;
		}
		entity.vx *= entity.frictionX;
		entity.vy *= entity.frictionY;
	}
}

function onlyRepeatEvery(scene, name, minIntervalMillis, fun) {
	var t = scene.timer(name);
	if (t === undefined || t > minIntervalMillis){
		fun();
		scene.startTimer(name);
	}
}

scene1 = new Splat.Scene(canvas, function(elapsedMillis) {
	logMouseClick(scene1);

	moveEntityViaKeyboard(player);
	chase(cat, player, 300);

	handleMovement(elapsedMillis);

	if (!player.moved()) {
		mouseWalk.reset();
		mouseWalkCheese.reset();
	}

	cat.move(elapsedMillis);
	if (cat.moved()) {
		onlyRepeatEvery(scene1, "cat-walk-timer", 400, function() {
			apt213.sounds.play("cat-walk1");
		});
	} else {
		catWalk.reset();
	}
	collideWithFurniture(cat);

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
	
	var playerFlipped = false;
	
	if(player.vx < 0){
		playerFlipped = true;
	}
	else if(player.vx > 0){
		playerFlipped = false;
	}
	
	if(playerFlipped){
		if(scene1.hasCheese)
			player.sprite = mouseWalkCheeseFlipped;
		else
			player.sprite = mouseWalkFlipped;
	}
	else{
		if(scene1.hasCheese)
			player.sprite = mouseWalkCheese;
		else
			player.sprite = mouseWalk;
	}
	
	var catFlipped = false;
	
	if(cat.vx < 0){
		catFlipped = true;
	}
	else if(cat.vx > 0){
		catFlipped = false;
	}
	
	if(catFlipped){
		cat.sprite = catWalkFlipped;
	}
	else{
		cat.sprite = catWalk;
	}

	if (player.collides(scene1.cheese)) {
		scene1.hasCheese = true;
	
		onlyRepeatEvery(scene1, "mouse-squeak-timer", 2000, function() {
			var squeakSoundRandom = Math.random()*2|0;
			if (squeakSoundRandom == 0)
				apt213.sounds.play("mouse-squeak1");
			else if(squeakSoundRandom == 1)
				apt213.sounds.play("mouse-squeak2");
		});
	}

	if (player.collides(cat)) {
		if (cat.moved()){
			var t1 = scene1.timer("mouse-damage-timer");
			if(t1 === undefined || t1 > 400){
				apt213.sounds.play("mouse-damage2");
				scene1.startTimer("mouse-damage-timer");
			}
		}
		
		player.vx = -10.0;
		if (scene1.hasCheese) {
			scene1.hasCheese = false;
			//player.sprite = mouseWalk;
			scene1.cheese.x = player.x;
			scene1.cheese.y = player.y;
		}
	}
	if (player.collides(scene1.goal) && scene1.hasCheese) {
		scene1.stop();
		apt213.sounds.play("level-end-win1");
		setupScene2();
		scene2.start();
		return;
	}

},
function(context) {
	scene1.camera.drawAbsolute(context, function() {
		context.fillStyle = "#f06d06";
		context.fillRect(0, 0, canvas.width, canvas.height);
	});
	context.drawImage(apt213.images.get("bg"), 0, 0);

	var toDraw = furniture.slice();
	if (!scene1.hasCheese) {
		toDraw.push(scene1.cheese);
	}
	toDraw.push(cat);
	toDraw.push(owl);
	toDraw.push(player);
	toDraw.push(scene1.goal);
	drawEntities(context, toDraw);
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

	moveEntityViaKeyboard(player);
	chase(owl, player, 300);

	for (var i in furniture) {
		furniture[i].move(elapsedMillis);
	}

	player.move(elapsedMillis);
	if (!player.moved()) {
		catWalk.reset();
		catWalkFlipped.reset();
	}
	if (scene2.bowlHasFood && player.collides(bowl)) {
		scene2.stop();
		setupScene3();
		apt213.sounds.play("level-end-win1");
		scene3.start();
		return;
	}
	
	var playerFlipped = false;
	
	if(player.vx < 0){
		playerFlipped = true;
	}
	else if(player.vx > 0){
		playerFlipped = false;
	}
	
	if(playerFlipped){
		player.sprite = catWalkFlipped;
	}
	else{
		player.sprite = catWalk;
	}
	
	var owlFlipped = false;
	
	if(owl.vx < 0){
		owlFlipped = true;
	}
	else if(owl.vx > 0){
		owlFlipped = false;
	}
	
	if(owlFlipped){
		owl.sprite = owlWalkFlipped;
	}
	else{
		owl.sprite = owlWalk;
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

	// only let owl collide with table
	var owlTableCollision = new Splat.Entity(2140, 514, 599, 78);
	if (owl.collides(owlTableCollision)) {
		owl.resolveCollisionWith(owlTableCollision);
	}

	if (owl.moved()) {
		onlyRepeatEvery(scene2, "cat-pur-timer", 2000, function() {
			var purSoundRandom = Math.floor(Math.random()*2);
			if(purSoundRandom == 0)
				apt213.sounds.play("cat-meow1");
			else if(purSoundRandom == 1)
				apt213.sounds.play("cat-meow2");
		});
		onlyRepeatEvery(scene2, "owl-walk-timer", 500, function() {
			var owlWalkSoundRandom = Math.floor(Math.random()*2);
			if(owlWalkSoundRandom == 0)
				apt213.sounds.play("owl-walk2");
			else if(owlWalkSoundRandom == 1)
				apt213.sounds.play("owl-walk3");
		});
	} else {
		owlWalk.reset();
	}
},
function(context) {
	scene2.camera.drawAbsolute(context, function() {
		context.fillStyle = "#f06d06";
		context.fillRect(0, 0, canvas.width, canvas.height);
	});
	context.drawImage(apt213.images.get("bg"), 0, 0);

	var toDraw = furniture.slice();
	toDraw.push(owl);
	toDraw.push(player);
	drawEntities(context, toDraw);
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
		apt213.sounds.play("door-open1");
		scene4.start();
		return;
	}
	
	var playerFlipped = false;
	
	if(player.vx < 0){
		playerFlipped = true;
	}
	else if(player.vx > 0){
		playerFlipped = false;
	}
	
	if(playerFlipped){
		player.sprite = owlWalkFlipped;
	}
	else{
		player.sprite = owlWalk;
	}

	
	player.vx *= 0.5;
	player.vy *= 0.75;

	if (owl.moved()) {
		onlyRepeatEvery(scene3, "owl-walk-timer", 500, function() {
			var owlWalkSoundRandom = Math.floor(Math.random()*2);
			if(owlWalkSoundRandom == 0)
				apt213.sounds.play("owl-walk2");
			else if(owlWalkSoundRandom == 1)
				apt213.sounds.play("owl-walk3");
		});
	} else {
		owlWalk.reset();
		owlWalkFlipped.reset();
	}
	
	moveEntityViaKeyboard(player);

	scene3.knock.move(elapsedMillis);
},
function(context) {
	scene3.camera.drawAbsolute(context, function() {
		context.fillStyle = "#f06d06";
		context.fillRect(0, 0, canvas.width, canvas.height);
	});
	context.drawImage(apt213.images.get("bg"), 0, 0);

	var toDraw = furniture.slice();
	toDraw.push(owl);
	toDraw.push(cat);
	toDraw.push(scene3.goal);
	drawEntities(context, toDraw);

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

//**************** SCENE 4 *****************************************
//**************** SCENE 4 *****************************************
//**************** SCENE 4 *****************************************
//**************** SCENE 4 *****************************************
function setupScene4() {
	player = new Splat.AnimatedEntity(446, 528, 80, 20, landlordWalk, -40, -283);
	scene4.camera = new Splat.EntityBoxCamera(player, 400, canvas.height, canvas.width/2, canvas.height/2);
	scene4.goal = new Splat.Entity(3750, 476, 160, 30);
	furniture.splice(furniture.indexOf(door), 1);
	door = new Splat.AnimatedEntity(650, 473, 130, 27, apt213.images.get("door-open"), 0, -243);
	furniture.push(door);
}

scene4 = new Splat.Scene(canvas, function(elapsedMillis) {
	logMouseClick(scene4);
	handleMovement(elapsedMillis);
	if (!player.moved()) {
		landlordWalk.reset();
	}
	
	var playerFlipped = false;
	
	if(player.vx < 0){
		playerFlipped = true;
	}
	else if(player.vx > 0){
		playerFlipped = false;
	}
	
	if(playerFlipped){
		player.sprite = landlordWalkFlipped;
	}
	else{
		player.sprite = landlordWalk;
	}

	if (player.collides(scene4.goal)) {
		scene4.stop();
		setupCredits();
		credits.start();
		return;
	}

	player.vx *= 0.5;
	player.vy *= 0.75;
	moveEntityViaKeyboard(player);
},
function(context) {
	scene4.camera.drawAbsolute(context, function() {
		context.fillStyle = "#f06d06";
		context.fillRect(0, 0, canvas.width, canvas.height);
	});
	context.drawImage(apt213.images.get("bg"), 0, 0);

	var toDraw = furniture.slice();
	toDraw.push(owl);
	toDraw.push(cat);
	toDraw.push(player);
	toDraw.push(scene4.goal);
	drawEntities(context, toDraw);
});

//**************** CREDITS *****************************************
//**************** CREDITS *****************************************
//**************** CREDITS *****************************************
//**************** CREDITS *****************************************
function setupCredits() {
	apt213.sounds.play("screen-music", true);
}

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
