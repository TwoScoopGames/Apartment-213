var canvas = document.getElementById("game");

var manifest = {
	"images": {
		"bg": "images/bg-1f5115x640.png",
		"bg-lv4": "images/background-landlord.png",
		"tv": "images/tv1f209x268.png",
		"tv-chair": "images/table-chair-1f288x161.png",
		"table-legs": "images/table-legs1f553x51.png",
		"table-top": "images/table-top1f599x183.png",
		"cheese": "images/cheese-1f36x29.png",
		"bowl-empty": "images/cat-bowl-empty.png",
		"bowl-full": "images/cat-bowl-full.png",
		"can": "images/cat-food-can.png",
		"sink-clean": "images/sink-clean.png",
		"door-frame-back": "images/doorframe-back.png",
		"door-frame-front": "images/doorframe-front.png",
		"door-open": "images/door-open.png",
		"door-closed": "images/door-closed.png",
		"cat-collapse-01": "images/cat-lv4/catlv4-0001.png",
		"cat-collapse-02": "images/cat-lv4/catlv4-0002.png",
		"cat-collapse-03": "images/cat-lv4/catlv4-0003.png",
		"cat-collapse-04": "images/cat-lv4/catlv4-0004.png",
		"cat-collapse-05": "images/cat-lv4/catlv4-0005.png",
		"cat-collapse-06": "images/cat-lv4/catlv4-0006.png",
		"cat-collapse-07": "images/cat-lv4/catlv4-0007.png",
		"cat-collapse-08": "images/cat-lv4/catlv4-0008.png",
		"cat-collapse-09": "images/cat-lv4/catlv4-0009.png",
		"cat-collapse-10": "images/cat-lv4/catlv4-0010.png",
		"sky": "images/parallax-sky.png",
		"bathroom": "images/bathroom.png",
		"bedroom": "images/bedroom.png",
		"title-1": "images/title-1.png",
		"title-2": "images/title-2.png",
	},
	"sounds": {
		"cat-walk1":		"audio/cat_walk1.wav",
		"cat-walk2":		"audio/cat_walk2.wav",
		"cat-walk3":		"audio/cat_walk3.wav",
		"angry-cat":		"audio/angry_cat_sound1.wav",
		"cat-meow1":		"audio/cat_meow1.wav",
		"cat-meow2":		"audio/cat_meow2.wav",
		"door-open1":		"audio/door_open1.wav",
		"plunger":			"audio/plunger.wav",
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
	],
	"animations": {
		"mouse-walk": {
			"strip": "images/mouse-anim-2f.png",
			"frames": 2,
			"msPerFrame": 100
		},
		"mouse-walk-flipped": {
			"strip": "images/flipped/mouse-anim-2f.png",
			"frames": 2,
			"msPerFrame": 100
		},
		"mouse-walk-cheese": {
			"strip": "images/mousecheese-2f.png",
			"frames": 2,
			"msPerFrame": 100
		},
		"mouse-walk-cheese-flipped": {
			"strip": "images/flipped/mousecheese-2f.png",
			"frames": 2,
			"msPerFrame": 100
		},
		"cat-walk-lv1": {
			"strip": "images/cat-lv1-walk-5f.png",
			"frames": 5,
			"msPerFrame": 100
		},
		"cat-walk-flipped-lv1": {
			"strip": "images/flipped/cat-lv1-walk-5f.png",
			"frames": 5,
			"msPerFrame": 100
		},
		"cat-attack": {
			"strip": "images/cat-lv1-attack-2f.png",
			"frames": 2,
			"msPerFrame": 500
		},
		"cat-attack-flipped": {
			"strip": "images/flipped/cat-lv1-attack-2f.png",
			"frames": 2,
			"msPerFrame": 500
		},
		"cat-walk-lv2": {
			"strip": "images/cat-lv2-walk-5f.png",
			"frames": 5,
			"msPerFrame": 100
		},
		"cat-walk-flipped-lv2": {
			"strip": "images/flipped/cat-lv2-walk-5f.png",
			"frames": 5,
			"msPerFrame": 100
		},
		"cat-collapse": {
			"strip": "images/catlv4-10f.png",
			"frames": 10,
			"msPerFrame": 200
		},
		"owl-sleep": {
			"prefix": "images/owl-sleep/owl-sleep",
			"suffix": ".png",
			"padNumberTo": 4,
			"frames": 20,
			"msPerFrame": 50
		},
		"owl-walk": {
			"strip": "images/owl-walk-24f.png",
			"frames": 24,
			"msPerFrame": 100
		},
		"owl-walk-flipped": {
			"strip": "images/flipped/owl-walk-24f.png",
			"frames": 24,
			"msPerFrame": 100
		},
		"landlord-knock": {
			"prefix": "images/landlord-lv3/landlord",
			"suffix": ".png",
			"padNumberTo": 4,
			"frames": 19,
			"msPerFrame": 50
		},
		"landlord-walk": {
			"strip": "images/landlord-lv4-anim.png",
			"frames": 25,
			"msPerFrame": 25
		},
		"landlord-walk-flipped": {
			"strip": "images/flipped/landlord-lv4-anim.png",
			"frames": 25,
			"msPerFrame": 25
		},
		"landlord-plunger": {
			"prefix": "images/landlord-plunger/landlord-plunger",
			"suffix": ".png",
			"padNumberTo": 4,
			"frames": 15,
			"msPerFrame": 50
		},
		"sink": {
			"strip": "images/brokensink-2f.png",
			"frames": 2,
			"msPerFrame": 200
		},
		"sink-dirty": {
			"strip": "images/dirtyasssink-2f.png",
			"frames": 2,
			"msPerFrame": 200
		},
		"knock": {
			"strip": "images/knock-2f.png",
			"frames": 2,
			"msPerFrame": 100
		},
	}
};

var apt213 = new Splat.Game(canvas, manifest);

apt213.scenes.add("title", new Splat.Scene(canvas, function() {
},
function(elapsedMillis) {
	if (apt213.keyboard.consumePressed("up") ||
		apt213.keyboard.consumePressed("down") ||
		apt213.keyboard.consumePressed("left") ||
		apt213.keyboard.consumePressed("right") ||
		apt213.keyboard.consumePressed("w") ||
		apt213.keyboard.consumePressed("a") ||
		apt213.keyboard.consumePressed("s") ||
		apt213.keyboard.consumePressed("d") ||
		apt213.mouse.buttons[0])
	{
		apt213.mouse.buttons[0] = false;
		this.startTimer("starting");
		apt213.sounds.play("door-open1");
	}
	if (this.timer("starting") > 1000) {
		apt213.scenes.switchTo("level-1");
	}
},
function(context) {
	if (this.timer("starting") > 0) {
		context.drawImage(apt213.images.get("title-2"), 0, 0);
	} else {
		context.drawImage(apt213.images.get("title-1"), 0, 0);
		context.fillStyle = "#ffffff";
		context.font = "24px sans-serif";
		if (apt213.mouse.supportsTouch()) {
			context.fillText("Tap to start", 250, 400);
		} else {
			context.fillText("Press arrows to start", 250, 400);
		}
	}
}));

// characters
var mouse;
var owl;
var cat;
var landlord;

// items
var bowl;
var can;
var door;
var sink;

// environment
var furniture = [];

var lmx = 0;
var lmy = 0;
function logMouseClick(scene) {
	return;
	if (apt213.mouse.buttons[0]) {
		var mx = scene.camera.x + apt213.mouse.x;
		var my = scene.camera.y + apt213.mouse.y;
		var w = mx - lmx;
		var h = my - lmy;
		lmx = mx;
		lmy = my;
		console.log("box w="+w+", h="+h);
		console.log("click at " + mx + ", " + my);
	}
}

function handleMovement(elapsedMillis, player) {
	for (var i in furniture) {
		furniture[i].move(elapsedMillis);
	}
	player.move(elapsedMillis);
	if ((player.destX || player.destY) && player.destX >= player.x && player.destX <= player.x + player.width && player.destY >= player.y && player.destY <= player.y + player.height) {
		clearDest(player);
	}

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

var floorLeft = 368;
var floorRight = 4543;
var floorTop = 475;
var floorBottom = 618;

function constrainPlayerToFloor(entity) {
	if (entity.x < floorLeft) {
		entity.x = floorLeft;
	}
	if (entity.x + entity.width > floorRight) {
		entity.x = floorRight - entity.width;
	}
	if (entity.y < floorTop) {
		entity.y = floorTop;
	}
	if (entity.y + entity.height > floorBottom) {
		entity.y = floorBottom - entity.height;
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
	sink = new Splat.AnimatedEntity(3739, 187, 50, 50, apt213.animations.get("sink"), 0, 0);
	furniture.push(sink);
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

var moveSpeedX = 1;
var moveSpeedY = 1;
function moveEntityViaKeyboard(scene, entity) {
	if (apt213.mouse.buttons[0]) {
		apt213.mouse.buttons[0] = false;

		entity.destX = scene.camera.x + apt213.mouse.x;
		entity.destX = Math.max(entity.destX, floorLeft);
		entity.destX = Math.min(entity.destX, floorRight);

		entity.destY = scene.camera.y + apt213.mouse.y;
		entity.destY = Math.max(entity.destY, floorTop);
		entity.destY = Math.min(entity.destY, floorBottom);
	}
	if (apt213.keyboard.isPressed("left") || apt213.keyboard.isPressed("a")) {
		entity.vx = -0.7*moveSpeedX;
		clearDest(entity);
	}
	if (apt213.keyboard.isPressed("right") || apt213.keyboard.isPressed("d")) {
		entity.vx = 0.7*moveSpeedX;
		clearDest(entity);
	}
	if (apt213.keyboard.isPressed("up") || apt213.keyboard.isPressed("w")) {
		entity.vy = -0.2*moveSpeedY;
		clearDest(entity);
	}
	if (apt213.keyboard.isPressed("down") || apt213.keyboard.isPressed("s")) {
		entity.vy = 0.2*moveSpeedY;
		clearDest(entity);
	}
	if (entity.destX || entity.destY) {
		moveTowards(entity, entity.destX, entity.destY, 0.7 * moveSpeedX, 0.2 * moveSpeedY);
	}
}
function clearDest(entity) {
	delete entity.destX;
	delete entity.destY;
}

function moveTowards(entity, x, y, vx, vy) {
	var cx = entity.x + (entity.width / 2);
	var cy = entity.y + (entity.height / 2);
	if (x < cx) {
		entity.vx = -vx;
	}
	if (x > cx) {
		entity.vx = vx;
	}
	if (y < cy) {
		entity.vy = -vy;
	}
	if (y > cy) {
		entity.vy = vy;
	}
}

var chaseSpeedX = 1;
var chaseSpeedY = 1;
function chase(entity, target, range) {
	var r2 = range * range;
	if (distanceFromCenters(entity, target) < r2) {
		var vx = 0.7 * chaseSpeedX;
		var vy = 0.2 * chaseSpeedY;
		var tx = target.x + (target.width / 2);
		var ty = target.y + (target.height / 2);
		moveTowards(entity, tx, ty, vx, vy);
		entity.vx *= entity.frictionX;
		entity.vy *= entity.frictionY;
	}
}

function onlyRepeatEvery(scene, name, minIntervalMillis, fun) {
	var t = scene.timer(name);
	if (t === undefined || t > minIntervalMillis) {
		fun();
		scene.startTimer(name);
	}
}

function drawBackground(scene, context) {
	scene.camera.drawAbsolute(context, function() {
		context.fillStyle = "#74c5cd";
		context.fillRect(0, 0, canvas.width, canvas.height);
	});

	drawParallaxImage(scene, context, apt213.images.get("sky"), 203, 0, 465);
	drawParallaxImage(scene, context, apt213.images.get("sky"), 4372, 0, 341);
	drawParallaxImage(scene, context, apt213.images.get("bedroom"), 1388, 139, 180);
	drawParallaxImage(scene, context, apt213.images.get("bathroom"), 3196, 138, 181);
	if (scene === apt213.scenes.get("level-4")) {
		context.drawImage(apt213.images.get("bg-lv4"), 0, 0);
	} else {
		context.drawImage(apt213.images.get("bg"), 0, 0);
	}
}

function drawParallaxImage(scene, context, image, x, y, width) {

	var compensated = x - scene.camera.x + width;
	var windowPercent = compensated / (canvas.width + width);
	if (windowPercent < 0 || windowPercent > 1.0) {
		return;
	}

	var bx = x - ((image.width - width) * windowPercent);
	context.drawImage(image, bx, y);
}

apt213.scenes.add("level-1", new Splat.Scene(canvas, function() {
	mouse = new Splat.AnimatedEntity(673, 476, 40, 8, apt213.animations.get("mouse-walk"), -15, -20);
	mouse.vy = 1;
	mouse.frictionX = 0.5;
	mouse.frictionY = 0.75;

	addCommonFurniture();

	bowl = new Splat.AnimatedEntity(3385, 444, 78, 53, apt213.images.get("bowl-empty"), 0, 0);
	furniture.push(bowl);

	can = new Splat.AnimatedEntity(3659, 260, 43, 42, apt213.images.get("can"), 0, 0);
	furniture.push(can);

	cat = new Splat.AnimatedEntity(3242, -21, 80, 15, apt213.animations.get("cat-walk-lv1"), -40, -73);
	cat.frictionX = 0.5;
	cat.frictionY = 0.75;
	chaseSpeedY = .9;

	owl = new Splat.AnimatedEntity(1056, 503, 100, 20, apt213.animations.get("owl-sleep"), -60, -335);
	owl.frictionX = 0.5;
	owl.frictionY = 0.75;

	this.goal = new Splat.Entity(4269, 472, 31, 9);
	this.camera = new Splat.EntityBoxCamera(mouse, 400, canvas.height, canvas.width/2, canvas.height/2);

	var cheeseImg = apt213.images.get("cheese");
	this.cheese = new Splat.AnimatedEntity(2567, 556, cheeseImg.width, cheeseImg.height, cheeseImg, 0, 0);

	this.hasCheese = false;
},
function(elapsedMillis) {
	logMouseClick(this);

	moveEntityViaKeyboard(this, mouse);
	chase(cat, mouse, 300);

	handleMovement(elapsedMillis, mouse);

	if (!mouse.moved()) {
		apt213.animations.get("mouse-walk").reset();
		apt213.animations.get("mouse-walk-flipped").reset();
		apt213.animations.get("mouse-walk-cheese").reset();
		apt213.animations.get("mouse-walk-cheese-flipped").reset();
	}

	cat.move(elapsedMillis);
	if (cat.moved()) {
		onlyRepeatEvery(this, "cat-walk-timer", 400, function() {
			apt213.sounds.play("cat-walk1");
		});
	} else {
		apt213.animations.get("cat-walk-lv1").reset();
		apt213.animations.get("cat-walk-flipped-lv1").reset();
	}
	collideWithFurniture(cat);

	var mouseFlipped = false;
	if(mouse.vx < 0){
		mouseFlipped = true;
	}
	else if(mouse.vx > 0){
		mouseFlipped = false;
	}

	if(mouseFlipped){
		if(this.hasCheese)
			mouse.sprite = apt213.animations.get("mouse-walk-cheese-flipped");
		else
			mouse.sprite = apt213.animations.get("mouse-walk-flipped");
	}
	else{
		if(this.hasCheese)
			mouse.sprite = apt213.animations.get("mouse-walk-cheese");
		else
			mouse.sprite = apt213.animations.get("mouse-walk");
	}

	var catFlipped = false;

	if(cat.vx < 0){
		catFlipped = true;
	}
	else if(cat.vx > 0){
		catFlipped = false;
	}

	if(catFlipped){
		cat.sprite = apt213.animations.get("cat-walk-flipped-lv1");
	} else {
		cat.sprite = apt213.animations.get("cat-walk-lv1");
	}

	if (mouse.collides(this.cheese)) {
		this.hasCheese = true;

		onlyRepeatEvery(this, "mouse-squeak-timer", 2000, function() {
			var squeakSoundRandom = Math.random()*2|0;
			if (squeakSoundRandom == 0)
				apt213.sounds.play("mouse-squeak1");
			else if(squeakSoundRandom == 1)
				apt213.sounds.play("mouse-squeak2");
		});
	}

	if (this.hasCheese) {
		moveSpeedX = .7;
		moveSpeedY = .8;
	}

	if (mouse.collides(cat)) {
		if (cat.moved()){
			var t1 = this.timer("mouse-damage-timer");
			if (t1 === undefined || t1 > 400){
				apt213.sounds.play("mouse-damage2");
				this.startTimer("mouse-damage-timer");
			}
		}

		if(catFlipped)
			cat.sprite = apt213.animations.get("cat-attack-flipped");
		else
			cat.sprite = apt213.animations.get("cat-attack");

		mouse.vx = -10.0;

		if (this.hasCheese) {
			this.hasCheese = false;
			this.cheese.x = mouse.x;
			this.cheese.y = mouse.y;
			moveSpeedX = 1;
			moveSpeedY = 1;
		}
	}
	if (mouse.collides(this.goal) && this.hasCheese) {
		apt213.sounds.play("level-end-win1");
		speed = 1;
		apt213.scenes.switchTo("level-2");
		return;
	}

	owl.move(elapsedMillis);
},
function(context) {
	drawBackground(this, context);

	var toDraw = furniture.slice();
	if (!this.hasCheese) {
		toDraw.push(this.cheese);
	}
	toDraw.push(cat);
	toDraw.push(owl);
	toDraw.push(mouse);
	toDraw.push(this.goal);
	drawEntities(context, toDraw);
}));

//**************** SCENE 2 *****************************************
//**************** SCENE 2 *****************************************
//**************** SCENE 2 *****************************************
//**************** SCENE 2 *****************************************
apt213.scenes.add("level-2", new Splat.Scene(canvas, function() {
	cat.sprite = apt213.animations.get("cat-walk-lv2");

	this.camera = new Splat.EntityBoxCamera(cat, 400, canvas.height, canvas.width/2, canvas.height/2);
	this.owlhasFood = false;
	this.bowlHasFood = false;
	this.canPickup = new Splat.Entity(3625, 476, 103, 17);
},
function(elapsedMillis) {
	logMouseClick(this);

	moveEntityViaKeyboard(this, cat);
	var chaseDist = 300;
	var withinChaseDistance = distanceFromCenters(owl, cat) < chaseDist * chaseDist;
	var owlWakeUpTimer = this.timer("owl-wake-up");
	var owlIsAwake = owlWakeUpTimer > 2000;
	if (owlWakeUpTimer === undefined && withinChaseDistance) {
		this.startTimer("owl-wake-up");
	} else if (owlIsAwake && !this.bowlHasFood) {
		chase(owl, cat, chaseDist);
		owl.spriteOffsetY = -230;
	}

	for (var i in furniture) {
		furniture[i].move(elapsedMillis);
	}

	cat.move(elapsedMillis);
	if (!cat.moved()) {
		apt213.animations.get("cat-walk-lv2").reset();
		apt213.animations.get("cat-walk-flipped-lv2").reset();
	}
	if (this.bowlHasFood && cat.collides(bowl)) {
		apt213.sounds.play("level-end-win1");
		apt213.scenes.switchTo("level-3");
		return;
	}
	if(owl.collides(cat)) {
		owl.vx = 0;
		owl.vy = 0;
	}

	var catFlipped = false;

	if(cat.vx < 0){
		catFlipped = true;
	}
	else if(cat.vx > 0){
		catFlipped = false;
	}

	if(catFlipped){
		cat.sprite = apt213.animations.get("cat-walk-flipped-lv2");
	}
	else{
		cat.sprite = apt213.animations.get("cat-walk-lv2");
	}

	var owlFlipped = false;

	if(owl.vx < 0){
		owlFlipped = true;
	}
	else if(owl.vx > 0){
		owlFlipped = false;
	}

	if (owlIsAwake) {
		if(owlFlipped){
			owl.sprite = apt213.animations.get("owl-walk-flipped");
		}
		else{
			owl.sprite = apt213.animations.get("owl-walk");
		}
	}

	if ((cat.destX || cat.destY) && cat.destX >= cat.x && cat.destX <= cat.x + cat.width && cat.destY >= cat.y && cat.destY <= cat.y + cat.height) {
		clearDest(cat);
	}
	collideWithFurniture(cat);

	owl.move(elapsedMillis);
	if (!this.owlHasFood && owl.collides(this.canPickup)) {
		this.owlHasFood = true;
		this.bowlHasFood = true;
		bowl.sprite = apt213.images.get("bowl-full");
		furniture.splice(furniture.indexOf(can), 1);
	}
	collideWithFurniture(owl);

	// only let owl collide with table
	var owlTableCollision = new Splat.Entity(2140, 514, 599, 78);
	if (owl.collides(owlTableCollision)) {
		owl.resolveCollisionWith(owlTableCollision);
	}

	if (withinChaseDistance) {
		onlyRepeatEvery(this, "cat-pur-timer", 2000, function() {
			var purSoundRandom = Math.floor(Math.random()*2);
			if (purSoundRandom == 0) {
				apt213.sounds.play("cat-meow1");
			} else if (purSoundRandom == 1) {
				apt213.sounds.play("cat-meow2");
			}
		});
	}
	if (owl.moved()) {
		onlyRepeatEvery(this, "owl-walk-timer", 500, function() {
			var owlWalkSoundRandom = Math.floor(Math.random()*2);
			if (owlWalkSoundRandom == 0) {
				apt213.sounds.play("owl-walk2");
			} else if (owlWalkSoundRandom == 1) {
				apt213.sounds.play("owl-walk3");
			}
		});
	} else {
		apt213.animations.get("owl-walk").reset();
		apt213.animations.get("owl-walk-flipped").reset();
	}
},
function(context) {
	drawBackground(this, context);

	var toDraw = furniture.slice();
	toDraw.push(owl);
	toDraw.push(cat);
	drawEntities(context, toDraw);
}));

//**************** SCENE 3 *****************************************
//**************** SCENE 3 *****************************************
//**************** SCENE 3 *****************************************
//**************** SCENE 3 *****************************************
apt213.scenes.add("level-3", new Splat.Scene(canvas, function() {
	landlord = new Splat.AnimatedEntity(350, 500, 80, 20, apt213.animations.get("landlord-knock"), -40, -283);
	landlord.frictionX = 0.5;
	landlord.frictionY = 0.75;
	this.camera = new Splat.EntityBoxCamera(owl, 400, canvas.height, canvas.width/2, canvas.height/2);
	this.goal = new Splat.Entity(650, 493, 50, 75);
	this.startTimer("knock");
	this.knockCount = 0;
	furniture.push(new Splat.Entity(2140, 514, 599, 78));
},
function(elapsedMillis) {
	logMouseClick(this);
	moveEntityViaKeyboard(this, owl);
	handleMovement(elapsedMillis, owl);

	if (owl.collides(this.goal)) {
		apt213.sounds.play("door-open1");
		apt213.scenes.switchTo("level-4");
		return;
	}

	var owlFlipped = false;

	if(owl.vx < 0){
		owlFlipped = true;
	}
	else if(owl.vx > 0){
		owlFlipped = false;
	}

	if(owlFlipped){
		owl.sprite = apt213.animations.get("owl-walk-flipped");
	}
	else{
		owl.sprite = apt213.animations.get("owl-walk");
	}

	if (owl.moved()) {
		onlyRepeatEvery(this, "owl-walk-timer", 500, function() {
			var owlWalkSoundRandom = Math.floor(Math.random()*2);
			if (owlWalkSoundRandom == 0) {
				apt213.sounds.play("owl-walk2");
			} else if(owlWalkSoundRandom == 1) {
				apt213.sounds.play("owl-walk3");
			}
		});
	} else {
		apt213.animations.get("owl-walk").reset();
		apt213.animations.get("owl-walk-flipped").reset();
	}

	landlord.move(elapsedMillis);
	apt213.animations.get("knock").move(elapsedMillis);
},
function(context) {
	drawBackground(this, context);

	var toDraw = furniture.slice();
	toDraw.push(owl);
	toDraw.push(cat);
	toDraw.push(landlord);
	toDraw.push(this.goal);
	drawEntities(context, toDraw);

	var knockGap = 100;
	if (this.knockCount === 0) {
		knockGap = 3000;
	}
	if (this.timer("knock") > knockGap) {
		this.stopTimer("knock");
		this.startTimer("knock-duration");
		apt213.sounds.play("landlord-knock");
		this.knockCount++;
		if (this.knockCount === 3) {
			this.knockCount = 0;
		}
	}
	if (this.timer("knock-duration") >= 0) {
		var knock = apt213.animations.get("knock");
		if (this.camera.x < 581) {
			knock.draw(context, 581, canvas.height/2 - knock.height/2);
		} else {
			this.camera.drawAbsolute(context, function() {
				knock.draw(context, 50, canvas.height/2 - knock.height/2);
			});
		}
		if (this.timer("knock-duration") > 200) {
			this.stopTimer("knock-duration");
			this.startTimer("knock");
		}
	}
}));

//**************** SCENE 4 *****************************************
//**************** SCENE 4 *****************************************
//**************** SCENE 4 *****************************************
//**************** SCENE 4 *****************************************
apt213.scenes.add("level-4", new Splat.Scene(canvas, function() {
	landlord.sprite = apt213.animations.get("landlord-walk");
	this.camera = new Splat.EntityBoxCamera(landlord, 400, canvas.height, canvas.width/2, canvas.height/2);
	this.sink = new Splat.Entity(3850, 476, 80, 10);
	this.goal = new Splat.Entity(317, 473, 226, 154);
	cat.sprite = apt213.animations.get("cat-collapse");
	furniture.splice(furniture.indexOf(door), 1);
	door = new Splat.AnimatedEntity(650, 473, 130, 27, apt213.images.get("door-open"), 0, -243);
	furniture.push(door);
	this.catIsCollapsed = false;
	sink.sprite = apt213.animations.get("sink-dirty");
	sink.x = 3737;
	sink.y = 228;
},
function(elapsedMillis) {
	logMouseClick(this);
	moveEntityViaKeyboard(this, landlord);
	handleMovement(elapsedMillis, landlord);
	if (!landlord.moved()) {
		apt213.animations.get("landlord-walk").reset();
		apt213.animations.get("landlord-walk-flipped").reset();
	}

	if (this.catIsCollapsed == false) {
		apt213.animations.get("cat-collapse").reset();
	}

	var landlordFlipped = false;

	if (landlord.vx < 0) {
		landlordFlipped = true;
	} else if(landlord.vx > 0) {
		landlordFlipped = false;
	}

	if (landlordFlipped) {
		landlord.sprite = apt213.animations.get("landlord-walk-flipped");
	} else {
		landlord.sprite = apt213.animations.get("landlord-walk");
	}

	var r2 = 250*250;

	if (distanceFromCenters(landlord, cat) < r2) {
		this.catIsCollapsed = true;
	}

	if (this.timer("plunging") === undefined && !this.plunged && landlord.collides(this.sink)) {
		this.startTimer("plunging");
	}
	if (this.timer("plunging") > 0) {
		landlord.sprite = apt213.animations.get("landlord-plunger");
		landlord.x = landlord.lastX;
		landlord.y = landlord.lastY;
		landlord.vx = 0;
		landlord.vy = 0;
		onlyRepeatEvery(this, "plunging-noise", 750, function() {
			apt213.sounds.play("plunger");
		});
	}
	if (this.timer("plunging") > 4000) {
		landlord.sprite = apt213.animations.get("landlord-walk-flipped");
		landlord.vx = -0.001;
		landlordFlipped = true;
		this.plunged = true;
		this.stopTimer("plunging");
		sink.sprite = apt213.images.get("sink-clean");
		sink.y -= 36;
	}

	if (landlord.collides(this.goal) && this.plunged) {
		apt213.scenes.switchTo("credits");
		return;
	}
},
function(context) {
	drawBackground(this, context);

	var toDraw = furniture.slice();
	toDraw.push(owl);
	toDraw.push(cat);
	toDraw.push(landlord);
	toDraw.push(this.sink);
	toDraw.push(this.goal);
	drawEntities(context, toDraw);
}));

//**************** CREDITS *****************************************
//**************** CREDITS *****************************************
//**************** CREDITS *****************************************
//**************** CREDITS *****************************************
apt213.scenes.add("credits", new Splat.Scene(canvas, function() {
	apt213.sounds.play("screen-music", true);
},
function(elapsedMillis) {
},
function(context) {
	this.camera.drawAbsolute(context, function() {
		context.fillStyle = "#000000";
		context.fillRect(0, 0, canvas.width, canvas.height);
		context.fillStyle = "#ffffff";
		context.font = "46px mono";
		context.fillText("Apartment 213 created by Team Heat,", 0, 100);
		context.fillText("Alex Bezuska", 0, 200);
		context.fillText("@alexbezuska", 500, 200);
		context.fillText("Eric Lathrop", 0, 250);
		context.fillText("@ericlathrop", 500, 250);
		context.fillText("Mike Revel", 0, 300);
		context.fillText("@mjrevel", 500, 300);
		context.fillText("Mattie Richards", 0, 350);
		context.fillText("@mintchipleaf", 500, 350);
		context.fillText("Music- Devin Magruder", 0, 400);
		context.fillText("Thank You For Playing!", 0, 500);
		context.fillText("Be sure to let us know what you thought!", 0, 550);
	});
}));

apt213.scenes.switchTo("loading");
