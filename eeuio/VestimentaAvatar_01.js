function VerificarFlag(){
	
	location.href ="endTestFailed.php";
}
(function (cjs, an) {
var flag=true;
var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"VestimentaAvatar_atlas_", frames: [[514,5410,530,398],[3830,4328,233,457],[1922,2164,1920,1080],[1922,4328,841,904],[1922,3246,1920,1080],[0,4328,1920,1080],[0,3246,1920,1080],[0,5410,512,512],[3305,4328,523,717],[1922,1082,1920,1080],[1922,0,1920,1080],[1922,5234,1667,387],[2765,4328,538,752],[3591,5047,303,642],[0,1082,1920,1080],[0,2164,1920,1080],[0,0,1920,1080]]}
];


// symbols:



(lib.abstract_tutorials_6 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.arnes = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Avatar = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.AvatarArnes = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.AvatarCasco = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.AvatarConMangas = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.AvatarGuantes = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Botón_Siguiente = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.casco = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.fondoCalle = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.guantes = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.mangas = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.pinzaIzq = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.varilla = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.varillaPaso1 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.varillaPaso2 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.VarillaPasoFinal = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(16);
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

}).prototype = getMCSymbolPrototype(lib.dot1, null, null);


(lib.dot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.dot, null, null);


(lib.btnNext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.Botón_Siguiente();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.366,0.366);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.btnNext, new cjs.Rectangle(0,0,187.5,187.5), null);


(lib.box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.059)").s().p("Al7CgIAAk/IL3AAIAAE/g");
	this.shape.setTransform(38,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.box, new cjs.Rectangle(0,0,76,32), null);


(lib.varilla_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.dot = new lib.dot();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.setTransform(152.5,219);

	this.instance = new lib.varilla();
	this.instance.parent = this;
	this.instance.setTransform(148.6,0,0.553,0.612,22.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.dot}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.varilla_1, new cjs.Rectangle(0,0,303.7,427.3), null);


(lib.pinzaIzq_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.dot = new lib.dot();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.setTransform(60.7,45);

	this.instance = new lib.pinzaIzq();
	this.instance.parent = this;
	this.instance.setTransform(0,35.1,0.195,0.195,-19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.dot}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pinzaIzq_1, new cjs.Rectangle(0,0,148,173.4), null);


(lib.pinzaDer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.dot = new lib.dot();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.setTransform(61.5,88.5);

	this.instance = new lib.pinzaIzq();
	this.instance.parent = this;
	this.instance.setTransform(117.1,164.2,0.218,0.218,-179.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.dot}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pinzaDer, new cjs.Rectangle(0,0,117.9,164.2), null);


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
	this.dot1.setTransform(392.8,398.8,2.148,1.999);

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


(lib.arnes_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.dot = new lib.dot();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.setTransform(109.6,185.8);

	this.instance = new lib.arnes();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.dot}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.arnes_1, new cjs.Rectangle(0,0,233,457), null);


// stage content:
(lib.VestimentaAvatar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		alert("Frame 0");
		this.stop();
		createjs.Touch.enable(stage);
		
		this.varilla.on("mousedown" , onMouseDown.bind(this));
		this.varilla.on("pressmove" , onMouseMove.bind(this));
		this.varilla.on("pressup" , onMouseUp.bind(this));
		this.varilla.objective = this.objective1;
		
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
			var pt = item.localToLocal(item.dot.x, item.dot.y , item.objective.box);
			if(item.objective.box.hitTest(pt.x, pt.y)){
				item.x = item.objective.x;
				item.y = item.objective.y;
				this.gotoAndStop(1);
			}else{
				item.x = item.x;
				item.y = item.y;
				flag=false;
				VerificarFlag();
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
		alert("Frame 1");
		this.stop();
		createjs.Touch.enable(stage);
		
		this.pinzaIzq.on("mousedown" , onMouseDown.bind(this));
		this.pinzaIzq.on("pressmove" , onMouseMove.bind(this));
		this.pinzaIzq.on("pressup" , onMouseUp.bind(this));
		this.pinzaIzq.objective = this.objective1;
		
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
			var pt = item.localToLocal(item.dot.x, item.dot.y , item.objective.box);
			console.log(item.objective.x)
			console.log(item.objective.y)
			console.log("--------------")
			console.log(item.x)
			console.log(item.y)
			if(item.objective.box.hitTest(pt.x, pt.y)){
				item.x = item.objective.x;
				item.y = item.objective.y;
				this.gotoAndStop(2);
			}else{
				item.x = item.x;
				item.y = item.y;
				flag=false;
				VerificarFlag();
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
		alert("Frame 2");
		this.stop();
		createjs.Touch.enable(stage);
		
		this.pinzaDer.on("mousedown" , onMouseDown.bind(this));
		this.pinzaDer.on("pressmove" , onMouseMove.bind(this));
		this.pinzaDer.on("pressup" , onMouseUp.bind(this));
		this.pinzaDer.objective = this.objective1;
		
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
			var pt = item.localToLocal(item.dot.x, item.dot.y , item.objective.box);
			console.log(item.objective.x)
			console.log(item.objective.y)
			console.log("--------------")
			console.log(item.x)
			console.log(item.y)
			if(item.objective.box.hitTest(pt.x, pt.y)){
				item.x = item.objective.x;
				item.y = item.objective.y;
				this.gotoAndStop(3);
			}else{
				item.x = item.x;
				item.y = item.y;
				flag=false;
				VerificarFlag();
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
	this.frame_3 = function() {
		alert("Frame 3");
		this.stop();
		this.btnNext.on("mousedown" , onMouseDown.bind(this));
		
		function onMouseDown(evt){
			console.log("onmousedown");
			this.gotoAndStop(4)
		}
	}
	this.frame_4 = function() {
		alert("Frame 4");
		this.stop();
		createjs.Touch.enable(stage);
		
		this.casco.on("mousedown" , onMouseDown.bind(this));
		this.casco.on("pressmove" , onMouseMove.bind(this));
		this.casco.on("pressup" , onMouseUp.bind(this));
		this.casco.objective = this.objective1;
		
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
				this.gotoAndStop(5);
			}else{
				item.x = item.x;
				item.y = item.y;
				flag=false;
				VerificarFlag();
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
	this.frame_5 = function() {
		alert("Frame 5");
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
				this.gotoAndStop(6);
			}else{
				item.x = item.x;
				item.y = item.y;
				flag=false;
				VerificarFlag();
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
	this.frame_6 = function() {
		alert("Frame 6");
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
			console.log(item.objective.x)
			console.log(item.objective.y)
			console.log("--------------")
			console.log(item.x)
			console.log(item.y)
			if(item.objective.box.hitTest(pt.x, pt.y)){
				item.x = item.objective.x;
				item.y = item.objective.y;
				this.gotoAndStop(7);
			}else{
				item.x = item.x;
				item.y = item.y;
				flag=false;
				VerificarFlag();
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
	this.frame_7 = function() {
		alert("Frame 7");
		this.stop();
		createjs.Touch.enable(stage);
		
		this.arnes.on("mousedown" , onMouseDown.bind(this));
		this.arnes.on("pressmove" , onMouseMove.bind(this));
		this.arnes.on("pressup" , onMouseUp.bind(this));
		this.arnes.objective = this.objective1;
		
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
			var pt = item.localToLocal(item.dot.x, item.dot.y , item.objective.box);
			console.log(item.objective.x)
			console.log(item.objective.y)
			console.log("--------------")
			console.log(item.x)
			console.log(item.y)
			if(item.objective.box.hitTest(pt.x, pt.y)){
				item.x = item.objective.x;
				item.y = item.objective.y;
				this.gotoAndStop(8);
				//location.href ="endTestCorrect.php";
			}else{
				item.x = item.x;
				item.y = item.y;
				flag=false;
				VerificarFlag();
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
	this.frame_8 = function() {
		alert("Frame 8");
		this.stop();
		this.btnNext.on("mousedown" , onMouseDown.bind(this));
		function onMouseDown(evt){
			location.href ="endTestCorrect.php";
			//console.log("saf")
			//this.gotoAndStop(5)
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1));

	// Fondo Personaje2
	this.pinzaIzq = new lib.pinzaIzq_1();
	this.pinzaIzq.name = "pinzaIzq";
	this.pinzaIzq.parent = this;
	this.pinzaIzq.setTransform(1801.6,498.3,1,1,0,0,0,74,86.7);

	this.instance = new lib.pinzaIzq();
	this.instance.parent = this;
	this.instance.setTransform(1857.9,354,0.218,0.218,-179.7);

	this.varilla = new lib.varilla_1();
	this.varilla.name = "varilla";
	this.varilla.parent = this;
	this.varilla.setTransform(1793.4,852.4,1,1,0,0,0,151.8,213.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.808)").s().p("EgNIBUEMAAAioHIaRAAMAAACoHg");
	this.shape.setTransform(1796.8,538,1.465,1);

	this.objective1 = new lib.objective1();
	this.objective1.name = "objective1";
	this.objective1.parent = this;
	this.objective1.setTransform(185.4,869.2,2.955,3.322,90,0,0,70.9,31.3);

	this.instance_1 = new lib.fondoCalle();
	this.instance_1.parent = this;

	this.instance_2 = new lib.varillaPaso1();
	this.instance_2.parent = this;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(204,204,51,0.059)").s().p("AoPIQIAAwfIPRAAIBOAAIAAQfIhOAAg");
	this.shape_1.setTransform(1706.9,305.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(153,102,102,0.059)").s().p("EgNIBUEMAAAhw0IBOAAIAAwgIhOAAMAAAgmzIaRAAMAAACoHg");
	this.shape_2.setTransform(1835.9,542);

	this.pinzaDer = new lib.pinzaDer();
	this.pinzaDer.name = "pinzaDer";
	this.pinzaDer.parent = this;
	this.pinzaDer.setTransform(1799.7,271.8,1,1,0,0,0,58.9,82);

	this.instance_3 = new lib.varillaPaso2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,3,1,0.993);

	this.btnNext = new lib.btnNext();
	this.btnNext.name = "btnNext";
	this.btnNext.parent = this;
	this.btnNext.setTransform(1772.1,950.2,1,1,0,0,0,93.8,93.8);

	this.instance_4 = new lib.VarillaPasoFinal();
	this.instance_4.parent = this;

	this.instance_5 = new lib.arnes();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1583,117);

	this.guantes = new lib.guantes_1();
	this.guantes.name = "guantes";
	this.guantes.parent = this;
	this.guantes.setTransform(1572,949.6,1,1,0,0,0,378.4,212.8);

	this.mangas = new lib.mangas_1();
	this.mangas.name = "mangas";
	this.mangas.parent = this;
	this.mangas.setTransform(1625.5,673.8,1,1,0,0,0,271.7,63.1);

	this.casco = new lib.casco_1();
	this.casco.name = "casco";
	this.casco.parent = this;
	this.casco.setTransform(1436.3,316.5,1,1,0,0,0,110.8,15.4);

	this.instance_6 = new lib.Avatar();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-412,10);

	this.instance_7 = new lib.AvatarCasco();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-378,0,1,1.068);

	this.instance_8 = new lib.objective1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(262.9,318.8,3.601,3.356,0,0,0,71.2,31.1);

	this.instance_9 = new lib.AvatarConMangas();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-381,5,1,1.049);

	this.arnes = new lib.arnes_1();
	this.arnes.name = "arnes";
	this.arnes.parent = this;
	this.arnes.setTransform(1701.5,256.5,1,1,0,0,0,116.5,228.5);

	this.instance_10 = new lib.AvatarGuantes();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-381,-6,1,1.084);

	this.instance_11 = new lib.AvatarArnes();
	this.instance_11.parent = this;
	this.instance_11.setTransform(188,87,1,1.098);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.objective1,p:{regY:31.3,scaleX:2.955,scaleY:3.322,rotation:90,x:185.4,y:869.2,regX:70.9}},{t:this.shape,p:{x:1796.8,y:538}},{t:this.varilla},{t:this.instance,p:{x:1857.9,y:354}},{t:this.pinzaIzq,p:{x:1801.6,y:498.3}}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance_2},{t:this.objective1,p:{regY:31.2,scaleX:2.543,scaleY:2.587,rotation:-90,x:164.7,y:882,regX:70.9}},{t:this.shape,p:{x:1798.9,y:542}},{t:this.instance,p:{x:1859.9,y:357.9}},{t:this.pinzaIzq,p:{x:1803.7,y:502.3}}]},1).to({state:[{t:this.instance_3},{t:this.shape,p:{x:1796.8,y:538}},{t:this.objective1,p:{regY:31.1,scaleX:1.795,scaleY:2.819,rotation:90,x:1241.4,y:734.6,regX:71}},{t:this.pinzaDer}]},1).to({state:[{t:this.instance_4},{t:this.btnNext,p:{x:1772.1,y:950.2}}]},1).to({state:[{t:this.objective1,p:{regY:30.9,scaleX:1.279,scaleY:3.17,rotation:90,x:587,y:185.3,regX:68.5}},{t:this.instance_6},{t:this.casco},{t:this.mangas,p:{x:1625.5,y:673.8}},{t:this.guantes,p:{x:1572,y:949.6}},{t:this.instance_5,p:{x:1583,y:117}}]},1).to({state:[{t:this.objective1,p:{regY:31.1,scaleX:2.866,scaleY:2.984,rotation:0,x:392.6,y:326.1,regX:71.2}},{t:this.instance_7},{t:this.mangas,p:{x:1624.8,y:584.6}},{t:this.guantes,p:{x:1571.3,y:860.4}},{t:this.instance_5,p:{x:1581,y:31}}]},1).to({state:[{t:this.instance_9},{t:this.guantes,p:{x:1573,y:861.7}},{t:this.instance_8},{t:this.instance_5,p:{x:1582,y:29}}]},1).to({state:[{t:this.instance_10},{t:this.arnes},{t:this.objective1,p:{regY:31.3,scaleX:4.598,scaleY:6.125,rotation:90,x:589,y:430.3,regX:71}}]},1).to({state:[{t:this.instance_11},{t:this.btnNext,p:{x:1755.4,y:918.9}}]},1).wait(1));

	// Fondo
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(102,102,102,0.808)").s().p("EgNIBUEMAAAioHIaRAAMAAACoHg");
	this.shape_3.setTransform(1588.7,538,3.938,1.055);

	this.text = new cjs.Text("EQUIPAMIENTO DE LINIERO", "52px 'Times New Roman'");
	this.text.lineHeight = 60;
	this.text.lineWidth = 721;
	this.text.parent = this;
	this.text.setTransform(224.9,30);

	this.instance_12 = new lib.abstract_tutorials_6();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-9,-10,3.639,2.738);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.text},{t:this.shape_3}]}).to({state:[{t:this.instance_12},{t:this.text},{t:this.shape_3}]},5).to({state:[{t:this.instance_12},{t:this.text},{t:this.shape_3}]},1).to({state:[{t:this.instance_12},{t:this.text},{t:this.shape_3}]},1).to({state:[{t:this.instance_12},{t:this.text},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(951,510.3,1954.3,1135.5);
// library properties:
lib.properties = {
	id: 'CBF65291F1453B498591E6CEEB144335',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/VestimentaAvatar_atlas_.png?1525395543410", id:"VestimentaAvatar_atlas_"}
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