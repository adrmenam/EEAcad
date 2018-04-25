(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"VestimentaAvatar_atlas_", frames: [[2447,2553,530,398],[1922,0,1920,1080],[1922,1082,1920,1080],[0,1082,1920,1080],[0,2164,1920,1080],[1922,2553,523,717],[0,0,1920,1080],[1922,2164,1667,387]]}
];


// symbols:



(lib.abstract_tutorials_6 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Avatar = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.AvatarCasco = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.AvatarConMangas = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.AvatarGuantes = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.casco = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.guantes = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.mangas = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.dot1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00E017").s().p("AhZBrQgKgHACgPQABgGAIgRQASgdALgKQAIgGANgHIgPgKQgfgTgIgIQgQgOAAgQQAAgJAFgHQAGgIAJAAQAKgBAJALIAQAUQAHAIAQAJQASALAGAFIAIAIIAMgIQANgKARgXQAQgUAEgMIAFgMQAEgHAEgDQAJgGALAGQALAHABALQACAOgPAWQgTAbgPARQgPAPgRANIADADQAHAGATAKQARAKAIAHQANALABAPQAAAHgEAHQgEAGgHACQgKACgLgIIgSgQQgGgEgRgHQgPgHgGgHQgEgFgFgIQgWALgGAHQgFAFgGALIgJAQQgGAJgJADQgFACgEAAQgEAAgEgCg");
	this.shape.setTransform(10.9,10.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.dot1, new cjs.Rectangle(0,0,21.9,21.8), null);


(lib.dot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.dot, null, null);


(lib.box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.059)").s().p("Al7CgIAAk/IL3AAIAAE/g");
	this.shape.setTransform(38,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.box, new cjs.Rectangle(0,0,76,32), null);


(lib.objective1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2
	this.box = new lib.box();
	this.box.name = "box";
	this.box.parent = this;
	this.box.setTransform(71,31.1,1,1,0,0,0,38,16);

	this.timeline.addTween(cjs.Tween.get(this.box).wait(1));

}).prototype = getMCSymbolPrototype(lib.objective1, new cjs.Rectangle(33,15.1,76,32), null);


(lib.mangas_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.dot1 = new lib.dot1();
	this.dot1.name = "dot1";
	this.dot1.parent = this;
	this.dot1.setTransform(42.5,59.9);

	this.instance = new lib.mangas();
	this.instance.parent = this;
	this.instance.setTransform(543.4,126.2,0.326,0.326,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.dot1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mangas_1, new cjs.Rectangle(0,0,543.4,126.2), null);


(lib.guantes_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.dot1 = new lib.dot1();
	this.dot1.name = "dot1";
	this.dot1.parent = this;
	this.dot1.setTransform(148.4,236.5,2.148,1.999);

	this.instance = new lib.guantes();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.394,0.394);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.dot1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.guantes_1, new cjs.Rectangle(0,0,756.9,425.8), null);


(lib.casco_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.dot = new lib.dot();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.setTransform(106.9,15.5,1,1,0,0,0,10.9,10.9);

	this.instance = new lib.casco();
	this.instance.parent = this;
	this.instance.setTransform(39,-83,0.274,0.274);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3300FF").s().p("AhNAQIAAgfICbAAIAAAfg");
	this.shape.setTransform(63.9,67.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance},{t:this.dot}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.casco_1, new cjs.Rectangle(39,-83,143.6,196.8), null);


// stage content:
(lib.RECUP_VestimentaAvatar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.casco.on("mousedown" , onMouseDown.bind(this));
		this.casco.on("pressmove" , onMouseMove.bind(this));
		this.casco.on("pressup" , onMouseUp.bind(this));
		this.casco.objective = this.objective1;
		var intentos=15;
		var texto_intentos=document.getElementById("txtIntentos");
		alert(texto_intentos.outerText);
		function onMouseMove(evt){
			console.log("pressmove");
			
			var item = evt.currentTarget;
			if(item.drag){
				var pt = item.parent.globalToLocal(evt.stageX , evt.stageY);
				item.x = pt.x - item.offset.x;
				item.y = pt.y - item.offset.y;
			}
		}
		
		function onMouseUp(evt){
			console.log("pressup");
			
			var item = evt.currentTarget;
			console.log(item.dot.x)
			console.log(item.dot.y)
			var pt = item.localToLocal(item.dot.x, item.dot.y , item.objective.box);
			
			if(item.objective.box.hitTest(pt.x, pt.y)){
				item.x = item.objective.x;
				item.y = item.objective.y;
				this.gotoAndStop(1);
				intentos=0;
			}else{
				item.x = item.x;
				item.y = item.y;
				alert("Error");
				intentos++;
				alert(intentos);
				texto_intentos.innerHTML=intentos;
			}
		}
		
		function onMouseDown(evt){
			console.log("onmousedown");
			
			var item = evt.currentTarget;
			item.offset = {x:0, y:0};
			
			var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
			item.offset.x = pt.x - item.x;
			item.offset.y = pt.y - item.y;
			item.drag = true;
		}
	}
	this.frame_1 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.mangas.on("mousedown" , onMouseDown.bind(this));
		this.mangas.on("pressmove" , onMouseMove.bind(this));
		this.mangas.on("pressup" , onMouseUp.bind(this));
		this.mangas.objective = this.objective1;
		
		function onMouseMove(evt){
			console.log("pressmove");
			
			var item = evt.currentTarget;
			if(item.drag){
				var pt = item.parent.globalToLocal(evt.stageX , evt.stageY);
				item.x = pt.x - item.offset.x;
				item.y = pt.y - item.offset.y;
			}
		}
		
		function onMouseUp(evt){
			console.log("pressup");
			
			var item = evt.currentTarget;
			var pt = item.localToLocal(item.dot1.x, item.dot1.y , item.objective.box);
			
			if(item.objective.box.hitTest(pt.x, pt.y)){
				item.x = item.objective.x;
				item.y = item.objective.y;
				this.gotoAndStop(2);
			}else{
				item.x = item.x;
				item.y = item.y;
			}
		}
		function onMouseDown(evt){
			console.log("onmousedown");
			
			var item = evt.currentTarget;
			item.offset = {x:0, y:0};
			
			var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
			item.offset.x = pt.x - item.x;
			item.offset.y = pt.y - item.y;
			item.drag = true;
		}
	}
	this.frame_2 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.guantes.on("mousedown" , onMouseDown.bind(this));
		this.guantes.on("pressmove" , onMouseMove.bind(this));
		this.guantes.on("pressup" , onMouseUp.bind(this));
		this.guantes.objective = this.objective1;
		
		function onMouseMove(evt){
			console.log("pressmove");
			
			var item = evt.currentTarget;
			if(item.drag){
				var pt = item.parent.globalToLocal(evt.stageX , evt.stageY);
				item.x = pt.x - item.offset.x;
				item.y = pt.y - item.offset.y;
			}
		}
		
		function onMouseUp(evt){
			console.log("pressup");
			
			var item = evt.currentTarget;
			var pt = item.localToLocal(item.dot1.x, item.dot1.y , item.objective.box);
			
			if(item.objective.box.hitTest(pt.x, pt.y)){
				item.x = item.objective.x;
				item.y = item.objective.y;
				this.gotoAndStop(3);
			}else{
				item.x = item.x;
				item.y = item.y;
				alert("Error");
			}
		}
		
		function onMouseDown(evt){
			console.log("onmousedown");
			
			var item = evt.currentTarget;
			item.offset = {x:0, y:0};
			
			var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
			item.offset.x = pt.x - item.x;
			item.offset.y = pt.y - item.y;
			item.drag = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(2));

	// Fondo Personaje
	this.guantes = new lib.guantes_1();
	this.guantes.name = "guantes";
	this.guantes.parent = this;
	this.guantes.setTransform(1572,860.6,1,1,0,0,0,378.4,212.8);

	this.mangas = new lib.mangas_1();
	this.mangas.name = "mangas";
	this.mangas.parent = this;
	this.mangas.setTransform(1625.5,584.8,1,1,0,0,0,271.7,63.1);

	this.casco = new lib.casco_1();
	this.casco.name = "casco";
	this.casco.parent = this;
	this.casco.setTransform(1659.1,174.7,1,1,0,0,0,110.8,15.4);

	this.instance = new lib.Avatar();
	this.instance.parent = this;
	this.instance.setTransform(-412,10);

	this.objective1 = new lib.objective1();
	this.objective1.name = "objective1";
	this.objective1.parent = this;
	this.objective1.setTransform(587,185.3,1.279,3.17,90,0,0,68.5,30.9);

	this.instance_1 = new lib.AvatarCasco();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-378,0,1,1.068);

	this.instance_2 = new lib.objective1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(262.9,318.8,3.601,3.356,0,0,0,71.2,31.1);

	this.instance_3 = new lib.AvatarConMangas();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-381,5,1,1.049);

	this.instance_4 = new lib.AvatarGuantes();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-381,-6,1,1.084);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.objective1,p:{regX:68.5,regY:30.9,scaleX:1.279,scaleY:3.17,rotation:90,x:587,y:185.3}},{t:this.instance},{t:this.casco},{t:this.mangas,p:{x:1625.5,y:584.8}},{t:this.guantes,p:{x:1572,y:860.6}}]}).to({state:[{t:this.objective1,p:{regX:71.2,regY:31.1,scaleX:2.866,scaleY:2.984,rotation:0,x:392.6,y:326.1}},{t:this.instance_1},{t:this.mangas,p:{x:1624.8,y:584.6}},{t:this.guantes,p:{x:1571.3,y:860.4}}]},1).to({state:[{t:this.instance_3},{t:this.guantes,p:{x:1570.9,y:861.7}},{t:this.instance_2}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

	// Fondo
	this.instance_5 = new lib.abstract_tutorials_6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-9,-10,3.639,2.738);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(548,530,2362.5,1100);
// library properties:
lib.properties = {
	id: 'CBF65291F1453B498591E6CEEB144335',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/VestimentaAvatar_atlas_.png?1524444421107", id:"VestimentaAvatar_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['CBF65291F1453B498591E6CEEB144335'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;