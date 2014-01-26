var canvas = document.getElementById("game");

var manifest = {
	"images": {
		"bg": "images/bg-1f5115x640.png",
		"mouse-walk": "images/mouse-anim-2f.png",
		"mouse-cheese": "images/mousecheese-2f.png",
		"cat-walk-lv1": "images/cat-lv1-walk-5f.png",
		"cat-walk-flipped-lv1": "images/flipped/cat-lv1-walk-5f.png",
		"cat-walk-lv2": "images/cat-lv2-walk-5f.png",
		"cat-walk-flipped-lv2": "images/flipped/cat-lv2-walk-5f.png",
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
		"sink": "images/brokensink-2f.png",
		"sink-dirty": "images/dirtyasssink-2f.png",
		"knock": "images/knock-2f.png",
		"door-frame-back": "images/doorframe-back.png",
		"door-frame-front": "images/doorframe-front.png",
		"door-open": "images/door-open.png",
		"door-closed": "images/door-closed.png",
		"cat-attack1": "images/cat-lv1-attack-2f.png",
		"cat-collapse": "images/catlv4-10f.png",
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
		"landlord-door-01": "images/landlord-lv3/landlord0001.png",
		"landlord-door-02": "images/landlord-lv3/landlord0002.png",
		"landlord-door-03": "images/landlord-lv3/landlord0003.png",
		"landlord-door-04": "images/landlord-lv3/landlord0004.png",
		"landlord-door-05": "images/landlord-lv3/landlord0005.png",
		"landlord-door-06": "images/landlord-lv3/landlord0006.png",
		"landlord-door-07": "images/landlord-lv3/landlord0007.png",
		"landlord-door-08": "images/landlord-lv3/landlord0008.png",
		"landlord-door-09": "images/landlord-lv3/landlord0009.png",
		"landlord-door-10": "images/landlord-lv3/landlord0010.png",
		"landlord-door-11": "images/landlord-lv3/landlord0011.png",
		"landlord-door-12": "images/landlord-lv3/landlord0012.png",
		"landlord-door-13": "images/landlord-lv3/landlord0013.png",
		"landlord-door-14": "images/landlord-lv3/landlord0014.png",
		"landlord-door-15": "images/landlord-lv3/landlord0015.png",
		"landlord-door-16": "images/landlord-lv3/landlord0016.png",
		"landlord-door-17": "images/landlord-lv3/landlord0017.png",
		"landlord-door-18": "images/landlord-lv3/landlord0018.png",
		"landlord-door-19": "images/landlord-lv3/landlord0019.png",
		"owl-sleep-01": "images/owl-sleep/owl-sleep0001.png",
		"owl-sleep-02": "images/owl-sleep/owl-sleep0002.png",
		"owl-sleep-03": "images/owl-sleep/owl-sleep0003.png",
		"owl-sleep-04": "images/owl-sleep/owl-sleep0004.png",
		"owl-sleep-05": "images/owl-sleep/owl-sleep0005.png",
		"owl-sleep-06": "images/owl-sleep/owl-sleep0006.png",
		"owl-sleep-07": "images/owl-sleep/owl-sleep0007.png",
		"owl-sleep-08": "images/owl-sleep/owl-sleep0008.png",
		"owl-sleep-09": "images/owl-sleep/owl-sleep0009.png",
		"owl-sleep-10": "images/owl-sleep/owl-sleep0010.png",
		"owl-sleep-11": "images/owl-sleep/owl-sleep0011.png",
		"owl-sleep-12": "images/owl-sleep/owl-sleep0012.png",
		"owl-sleep-13": "images/owl-sleep/owl-sleep0013.png",
		"owl-sleep-14": "images/owl-sleep/owl-sleep0014.png",
		"owl-sleep-15": "images/owl-sleep/owl-sleep0015.png",
		"owl-sleep-16": "images/owl-sleep/owl-sleep0016.png",
		"owl-sleep-17": "images/owl-sleep/owl-sleep0017.png",
		"owl-sleep-18": "images/owl-sleep/owl-sleep0018.png",
		"owl-sleep-19": "images/owl-sleep/owl-sleep0019.png",
		"owl-sleep-20": "images/owl-sleep/owl-sleep0020.png",
		"cat-attack1-flipped": "images/flipped/cat-lv1-attack-2f.png",
		"mouse-walk-flipped": "images/flipped/mouse-anim-2f.png",
		"mouse-cheese-flipped": "images/flipped/mousecheese-2f.png",
		"owl-walk-flipped": "images/flipped/owl-walk-24f.png",
		"landlord-knock": "images/landlord-lv3.png",
		"landlord-walk-flipped": "images/flipped/landlord-lv4-anim.png",
		"landlord-flipped": "images/flipped/landlord-1f-159x304.png",
		"sky": "images/parallax-sky.png",
		"bathroom": "images/bathroom.png",
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

var title;
var scene1;
var scene2;
var scene3;
var scene4;
var credits;


var loading = new Splat.Scene(canvas, function(elapsedMillis) {
	if (apt213.isLoaded()) {
		assetsLoaded();
		loading.stop();
		title.start();
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
var owlSleep;
var owlWalk;
var owlWalkFlipped;
var landlordKnock;
var landlordWalk;
var landlordWalkFlipped;
var catAttack;
var catAttackFlipped;
var catCollapse;
var sinkAnimation;
var sinkDirtyAnimation;

function assetsLoaded() {
	mouseWalk = new Splat.makeAnimation(apt213.images.get("mouse-walk"), 2, 100);
	mouseWalkFlipped = new Splat.makeAnimation(apt213.images.get("mouse-walk-flipped"), 2, 100);
	mouseWalkCheese = new Splat.makeAnimation(apt213.images.get("mouse-cheese"), 2, 100);
	mouseWalkCheeseFlipped = new Splat.makeAnimation(apt213.images.get("mouse-cheese-flipped"), 2, 100);
	catWalk = new Splat.makeAnimation(apt213.images.get("cat-walk-lv1"), 5, 100);
	catWalkFlipped = new Splat.makeAnimation(apt213.images.get("cat-walk-flipped-lv1"), 5, 100);

	owlSleep = new Splat.Animation();
	owlSleep.add(apt213.images.get("owl-sleep-01"), 50);
	owlSleep.add(apt213.images.get("owl-sleep-02"), 50);
	owlSleep.add(apt213.images.get("owl-sleep-03"), 50);
	owlSleep.add(apt213.images.get("owl-sleep-04"), 50);
	owlSleep.add(apt213.images.get("owl-sleep-05"), 50);
	owlSleep.add(apt213.images.get("owl-sleep-06"), 50);
	owlSleep.add(apt213.images.get("owl-sleep-07"), 50);
	owlSleep.add(apt213.images.get("owl-sleep-08"), 50);
	owlSleep.add(apt213.images.get("owl-sleep-09"), 50);
	owlSleep.add(apt213.images.get("owl-sleep-10"), 50);
	owlSleep.add(apt213.images.get("owl-sleep-11"), 50);
	owlSleep.add(apt213.images.get("owl-sleep-12"), 50);
	owlSleep.add(apt213.images.get("owl-sleep-13"), 50);
	owlSleep.add(apt213.images.get("owl-sleep-14"), 50);
	owlSleep.add(apt213.images.get("owl-sleep-15"), 50);
	owlSleep.add(apt213.images.get("owl-sleep-16"), 50);
	owlSleep.add(apt213.images.get("owl-sleep-17"), 50);
	owlSleep.add(apt213.images.get("owl-sleep-18"), 50);
	owlSleep.add(apt213.images.get("owl-sleep-19"), 50);
	owlSleep.add(apt213.images.get("owl-sleep-20"), 50);

	owlWalk = new Splat.makeAnimation(apt213.images.get("owl-walk"), 24, 100);
	owlWalkFlipped = new Splat.makeAnimation(apt213.images.get("owl-walk-flipped"), 24, 100);
	landlordKnock = new Splat.makeAnimation(apt213.images.get("landlord-knock"), 19, 25);
	landlordWalk = new Splat.makeAnimation(apt213.images.get("landlord-walk"), 25, 25);
	landlordWalkFlipped = new Splat.makeAnimation(apt213.images.get("landlord-walk-flipped"), 25, 25);
	catAttack = new Splat.makeAnimation(apt213.images.get("cat-attack1"), 2, 500);
	catAttackFlipped = new Splat.makeAnimation(apt213.images.get("cat-attack1-flipped"), 2, 500);
	catCollapse = new Splat.makeAnimation(apt213.images.get("cat-collapse"), 10, 200);
	sinkAnimation = new Splat.makeAnimation(apt213.images.get("sink"), 2, 200);
	sinkDirtyAnimation = new Splat.makeAnimation(apt213.images.get("sink-dirty"), 2, 200);
}

var title = new Splat.Scene(canvas, function(elapsedMillis) {
	if (apt213.keyboard.consumePressed("up") ||
		apt213.keyboard.consumePressed("down") ||
		apt213.keyboard.consumePressed("left") ||
		apt213.keyboard.consumePressed("right"))
	{
		title.startTimer("starting");
		apt213.sounds.play("door-open1");
	}
	if (title.timer("starting") > 1000) {
		title.stop();
		setupScene1();
		scene1.start();
	}
},
function(context) {
	if (title.timer("starting") > 0) {
		context.drawImage(apt213.images.get("title-2"), 0, 0);
	} else {
		context.drawImage(apt213.images.get("title-1"), 0, 0);
		context.fillStyle = "#ffffff";
		context.font = "24px sans-serif";
		context.fillText("Press arrows to start", 250, 400);
	}
});

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

function handleMovement(elapsedMillis, player) {
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
	var sinkAnim = new Splat.makeAnimation(apt213.images.get("sink"), 2, 300);
	sink = new Splat.AnimatedEntity(3739, 187, 50, 50, sinkAnim, 0, 0);
	furniture.push(sink);
}
function setupScene1() {
	mouse = new Splat.AnimatedEntity(673, 476, 40, 8, mouseWalk, -15, -20);
	mouse.vy = 1;
	mouse.frictionX = 0.5;
	mouse.frictionY = 0.75;

	addCommonFurniture();
	
	bowl = new Splat.AnimatedEntity(3385, 444, 78, 53, apt213.images.get("bowl-empty"), 0, 0);
	furniture.push(bowl);

	can = new Splat.AnimatedEntity(3659, 260, 43, 42, apt213.images.get("can"), 0, 0);
	furniture.push(can);

	cat = new Splat.AnimatedEntity(3242, -21, 80, 15, catWalk, -40, -73);
	cat.frictionX = 0.5;
	cat.frictionY = 0.75;
	chaseSpeedY = .9;

	owl = new Splat.AnimatedEntity(1056, 503, 100, 20, owlSleep, -60, -335);
	owl.frictionX = 0.5;
	owl.frictionY = 0.75;

	scene1.goal = new Splat.Entity(4269, 472, 31, 9);
	scene1.camera = new Splat.EntityBoxCamera(mouse, 400, canvas.height, canvas.width/2, canvas.height/2);

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

var moveSpeedX = 1;
var moveSpeedY = 1;
function moveEntityViaKeyboard(entity) {
	if (apt213.keyboard.isPressed("left")) {
		entity.vx = -0.7*moveSpeedX;
	}
	if (apt213.keyboard.isPressed("right")) {
		entity.vx = 0.7*moveSpeedX;
	}
	if (apt213.keyboard.isPressed("up")) {
		entity.vy = -0.2*moveSpeedY;
	}
	if (apt213.keyboard.isPressed("down")) {
		entity.vy = 0.2*moveSpeedY;
	}
}


var chaseSpeedX = 1;
var chaseSpeedY = 1;
function chase(entity, target, range) {
	var r2 = range * range;
	if (distanceFromCenters(entity, target) < r2) {
		if (target.x < entity.x) {
			entity.vx = -0.7*chaseSpeedX;
		}
		if (target.x > entity.x) {
			entity.vx = 0.7*chaseSpeedX;
		}
		if (target.y < entity.y) {
			entity.vy = -0.2*chaseSpeedY;
		}
		if (target.y > entity.y) {
			entity.vy = 0.2*chaseSpeedY;
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

function drawBackground(scene, context) {
	scene.camera.drawAbsolute(context, function() {
		context.fillStyle = "#74c5cd";
		context.fillRect(0, 0, canvas.width, canvas.height);
	});

	drawParallaxImage(scene, context, apt213.images.get("sky"), 203, 0, 465);
	drawParallaxImage(scene, context, apt213.images.get("sky"), 4372, 0, 341);
	drawParallaxImage(scene, context, apt213.images.get("bathroom"), 3196, 138, 181);
	context.drawImage(apt213.images.get("bg"), 0, 0);
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

scene1 = new Splat.Scene(canvas, function(elapsedMillis) {
	logMouseClick(scene1);

	moveEntityViaKeyboard(mouse);
	chase(cat, mouse, 300);

	handleMovement(elapsedMillis, mouse);

	if (!mouse.moved()) {
		mouseWalk.reset();
		mouseWalkCheese.reset();
		mouseWalkFlipped.reset();
		mouseWalkCheeseFlipped.reset();
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

	var mouseFlipped = false;
	if(mouse.vx < 0){
		mouseFlipped = true;
	}
	else if(mouse.vx > 0){
		mouseFlipped = false;
	}
	
	if(mouseFlipped){
		if(scene1.hasCheese)
			mouse.sprite = mouseWalkCheeseFlipped;
		else
			mouse.sprite = mouseWalkFlipped;
	}
	else{
		if(scene1.hasCheese)
			mouse.sprite = mouseWalkCheese;
		else
			mouse.sprite = mouseWalk;
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

	if (mouse.collides(scene1.cheese)) {
		scene1.hasCheese = true;
	
		onlyRepeatEvery(scene1, "mouse-squeak-timer", 2000, function() {
			var squeakSoundRandom = Math.random()*2|0;
			if (squeakSoundRandom == 0)
				apt213.sounds.play("mouse-squeak1");
			else if(squeakSoundRandom == 1)
				apt213.sounds.play("mouse-squeak2");
		});
	}

	if(scene1.hasCheese) {
		moveSpeedX = .7;
		moveSpeedY = .8;
	}
	
	if (mouse.collides(cat)) {
		if (cat.moved()){
			var t1 = scene1.timer("mouse-damage-timer");
			if(t1 === undefined || t1 > 400){
				apt213.sounds.play("mouse-damage2");
				scene1.startTimer("mouse-damage-timer");
			}
		}
		
		if(catFlipped)
			cat.sprite = catAttackFlipped;
		else
			cat.sprite = catAttack;
		
		mouse.vx = -10.0;
		
		if (scene1.hasCheese) {
			scene1.hasCheese = false;
			scene1.cheese.x = mouse.x;
			scene1.cheese.y = mouse.y;
			moveSpeedX = 1;
			moveSpeedY = 1;
		}
	}
	if (mouse.collides(scene1.goal) && scene1.hasCheese) {
		scene1.stop();
		apt213.sounds.play("level-end-win1");
		speed = 1;
		setupScene2();
		scene2.start();
		return;
	}

	owl.move(elapsedMillis);
},
function(context) {
	drawBackground(scene1, context);

	var toDraw = furniture.slice();
	if (!scene1.hasCheese) {
		toDraw.push(scene1.cheese);
	}
	toDraw.push(cat);
	toDraw.push(owl);
	toDraw.push(mouse);
	toDraw.push(scene1.goal);
	drawEntities(context, toDraw);
});

//**************** SCENE 2 *****************************************
//**************** SCENE 2 *****************************************
//**************** SCENE 2 *****************************************
//**************** SCENE 2 *****************************************

function setupScene2() {
	catWalk = new Splat.makeAnimation(apt213.images.get("cat-walk-lv2"), 5, 100);
	catWalkFlipped = new Splat.makeAnimation(apt213.images.get("cat-walk-flipped-lv2"), 5, 100);
	cat.sprite = catWalk;

	scene2.camera = new Splat.EntityBoxCamera(cat, 400, canvas.height, canvas.width/2, canvas.height/2);
	scene2.owlhasFood = false;
	scene2.bowlhasFood = false;
	scene2.canPickup = new Splat.Entity(3625, 476, 103, 17);
}

scene2 = new Splat.Scene(canvas, function(elapsedMillis) {
	logMouseClick(scene2);

	moveEntityViaKeyboard(cat);
	var chaseDist = 300;
	var withinChaseDistance = distanceFromCenters(owl, cat) < chaseDist * chaseDist;
	var owlWakeUpTimer = scene2.timer("owl-wake-up");
	var owlIsAwake = owlWakeUpTimer > 2000;
	if (owlWakeUpTimer === undefined && withinChaseDistance) {
		scene2.startTimer("owl-wake-up");
	} else if (owlIsAwake) {
		chase(owl, cat, chaseDist);
		owl.spriteOffsetY = -230;
	}

	for (var i in furniture) {
		furniture[i].move(elapsedMillis);
	}

	cat.move(elapsedMillis);
	if (!cat.moved()) {
		catWalk.reset();
		catWalkFlipped.reset();
	}
	if (scene2.bowlHasFood && cat.collides(bowl)) {
		scene2.stop();
		setupScene3();
		apt213.sounds.play("level-end-win1");
		scene3.start();
		return;
	}
	if (scene2.owlHasFood && owl.x < 3363) {
		chase(owl,bowl,1000);
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
		cat.sprite = catWalkFlipped;
	}
	else{
		cat.sprite = catWalk;
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
			owl.sprite = owlWalkFlipped;
		}
		else{
			owl.sprite = owlWalk;
		}
	}
	
	collideWithFurniture(cat);

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

	if (withinChaseDistance) {
		onlyRepeatEvery(scene2, "cat-pur-timer", 2000, function() {
			var purSoundRandom = Math.floor(Math.random()*2);
			if(purSoundRandom == 0)
				apt213.sounds.play("cat-meow1");
			else if(purSoundRandom == 1)
				apt213.sounds.play("cat-meow2");
		});
	}
	if (owl.moved()) {
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
	drawBackground(scene2, context);

	var toDraw = furniture.slice();
	toDraw.push(owl);
	toDraw.push(cat);
	drawEntities(context, toDraw);
});

//**************** SCENE 3 *****************************************
//**************** SCENE 3 *****************************************
//**************** SCENE 3 *****************************************
//**************** SCENE 3 *****************************************
function setupScene3() {
	landlord = new Splat.AnimatedEntity(446, 528, 80, 20, landlordKnock, -40, -283);
	landlord.frictionX = 0.5;
	landlord.frictionY = 0.75;
	scene3.camera = new Splat.EntityBoxCamera(owl, 400, canvas.height, canvas.width/2, canvas.height/2);
	scene3.goal = new Splat.Entity(669, 493, 20, 70);
	scene3.knock = Splat.makeAnimation(apt213.images.get("knock"), 2, 100);
	scene3.startTimer("knock");
	scene3.knockCount = 0;
	furniture.push(new Splat.Entity(2140, 514, 599, 78));
}

scene3 = new Splat.Scene(canvas, function(elapsedMillis) {
	logMouseClick(scene3);
	moveEntityViaKeyboard(owl);
	handleMovement(elapsedMillis, owl);

	if (owl.collides(scene3.goal)) {
		scene3.stop();
		setupScene4();
		apt213.sounds.play("door-open1");
		scene4.start();
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
		owl.sprite = owlWalkFlipped;
	}
	else{
		owl.sprite = owlWalk;
	}

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

	landlord.move(elapsedMillis);
	scene3.knock.move(elapsedMillis);
},
function(context) {
	drawBackground(scene3, context);

	var toDraw = furniture.slice();
	toDraw.push(owl);
	toDraw.push(cat);
	toDraw.push(landlord);
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
	landlord.sprite = landlordWalk;
	scene4.camera = new Splat.EntityBoxCamera(landlord, 400, canvas.height, canvas.width/2, canvas.height/2);
	scene4.goal = new Splat.Entity(3750, 476, 160, 30);
	cat.sprite = catCollapse;
	furniture.splice(furniture.indexOf(door), 1);
	door = new Splat.AnimatedEntity(650, 473, 130, 27, apt213.images.get("door-open"), 0, -243);
	furniture.push(door);
	scene4.catIsCollapsed = false;
	sink.sprite = sinkDirtyAnimation;
	sink.x = 3737;
	sink.y = 228;
}

scene4 = new Splat.Scene(canvas, function(elapsedMillis) {
	logMouseClick(scene4);
	moveEntityViaKeyboard(landlord);
	handleMovement(elapsedMillis, landlord);
	if (!landlord.moved()) {
		landlordWalk.reset();
		landlordWalkFlipped.reset();
	}
	
	if(scene4.catIsCollapsed == false)
		catCollapse.reset();
	
	var landlordFlipped = false;
	
	if(landlord.vx < 0){
		landlordFlipped = true;
	}
	else if(landlord.vx > 0){
		landlordFlipped = false;
	}
	
	if(landlordFlipped){
		landlord.sprite = landlordWalkFlipped;
	}
	else{
		landlord.sprite = landlordWalk;
	}
	
	var r2 = 250*250;
	
	if (distanceFromCenters(landlord, cat) < r2) {
		scene4.catIsCollapsed = true;
	}

	if (landlord.collides(scene4.goal)) {
		scene4.stop();
		setupCredits();
		credits.start();
		return;
	}
},
function(context) {
	drawBackground(scene4, context);

	var toDraw = furniture.slice();
	toDraw.push(owl);
	toDraw.push(cat);
	toDraw.push(landlord);
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
