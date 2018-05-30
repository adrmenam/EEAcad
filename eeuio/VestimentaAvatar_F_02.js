function actionWrong(evt){
	//Base de datos Incorrecto
	//alert("Error");
	location.href ="endTestFailed.php";
}

function actionCorrect(self, frame){
	//Base de datos Correcto
	self.gotoAndStop(frame);
}

function buttonNext(frame){
	this.gotoAndStop(frame);
}

function actionFinal(){
	alert("Proceso finalizado");
	location.href ="endTestCorrect.php";
}

function putElement(evt, self, frame){
	console.log("----------------------------------------");
	console.log("Frame: "+frame);
	console.log("----------------------------------------");
	console.log("evt: "+evt+" self: "+self+" frame: "+frame);
	var item = evt.currentTarget;
	console.log("item: "+item);
	console.log("Saludito");
	var pt = item.localToLocal(item.dot.x, item.dot.y , item.objective.box);
	console.log("Saludito2");
	if(item.objective.box.hitTest(pt.x, pt.y)){
		console.log("Saludito3");
		item.x = item.objective.x;
		console.log("Saludito4");
		item.y = item.objective.y;
		console.log("Saludito5");
		actionCorrect(self, frame);
	}else{
		console.log("Saludito6");
		item.x = item.x;
		console.log("Saludito7");
		item.y = item.y;
		actionWrong(evt);
	}
}

function removeElement(evt, self, frame){
	var item = evt.currentTarget;
	var pt = item.localToLocal(item.dot.x, item.dot.y , item.objective.box);
	console.log("Punto x: "+pt.x+" - Punto y: "+pt.y);
	console.log("ObjectiveX: "+item.objective.box.x+" - ObjectiveY: "+item.objective.box.y);
	if(item.objective.box.hitTest(pt.x, pt.y)){
		item.x = item.objective.x;
		item.y = item.objective.y;
		actionWrong(evt);
	}else{
		item.x = item.x;
		item.y = item.y;
		actionCorrect(self, frame);
	}
}

function pressElement(evt){
	var item = evt.currentTarget;
	item.offset = {x:0, y:0};
	var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
	item.offset.x = pt.x - item.x;
	item.offset.y = pt.y - item.y;
	item.drag = true;
}

function moveElement(evt){
	var item = evt.currentTarget;
	if(item.drag){
		var pt = item.parent.globalToLocal(evt.stageX , evt.stageY);
		item.x = pt.x - item.offset.x;
		item.y = pt.y - item.offset.y;
	}
}

(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"VestimentaAvatar_atlas_", frames: [[5766,0,1920,1080],[3844,0,1920,1080],[3844,1082,1920,1080],[1922,1082,1920,1080],[5766,1082,1920,1080],[0,1082,1920,1080],[0,0,1920,1080],[1922,0,1920,1080],[1922,3246,1920,1080],[1922,2164,1920,1080],[0,4328,1920,1080],[5766,2164,1920,1080],[3844,2164,1920,1080],[0,2164,1920,1080],[0,3246,1920,1080],[0,5410,1920,1080],[0,6492,1920,1080],[5766,5410,1920,1080],[1922,5410,1920,1080],[1922,6492,1920,1080],[1922,4328,1920,1080],[3844,4328,1920,1080],[3844,5410,1920,1080],[5766,4328,1920,1080],[3844,3246,1920,1080],[5766,3246,1920,1080],[3844,6492,1920,1080],[5766,6492,1920,1080]]},
		{name:"VestimentaAvatar_atlas_2", frames: [[5055,4488,1366,768],[6423,4488,1366,768],[3136,4489,1366,768],[1768,3762,1366,768],[3687,3719,1366,768],[1368,4532,1366,768],[5619,3718,1366,768],[0,3855,1366,768],[0,4625,1366,768],[4104,6028,1366,768],[1368,5302,1366,768],[0,5395,1366,768],[2736,6029,1366,768],[5472,6028,1366,768],[0,7076,530,398],[2736,4532,233,457],[5766,1082,1920,1080],[4104,6798,841,904],[4504,4489,512,512],[3136,3762,523,717],[1767,7179,1355,204],[4947,7187,1355,204],[0,2164,1920,1080],[7688,1616,274,1079],[4947,6798,1667,387],[3193,6799,662,417],[6987,3718,756,549],[7240,5258,756,549],[2736,4991,330,240],[6987,4269,398,125],[6840,6028,1280,720],[2736,5259,1366,768],[5872,5258,1366,768],[4504,5258,1366,768],[2238,6072,400,400],[7791,4829,288,364],[7688,0,451,806],[7688,808,451,806],[5055,3719,538,752],[0,3246,1766,607],[5764,2164,1919,775],[5764,2941,1919,775],[1922,2164,1919,922],[3843,2164,1919,873],[7964,1616,178,294],[8084,2076,72,187],[7964,2076,118,141],[7964,1912,202,162],[1922,3088,1763,672],[3843,3039,1774,678],[0,0,1920,1080],[5766,0,1920,1080],[1922,0,1920,1080],[3844,0,1920,1080],[7791,3976,233,851],[7745,3439,422,535],[7685,2697,373,740],[2238,6799,953,378],[6840,6750,846,904],[0,6165,844,909],[1368,6072,868,901],[3124,7218,613,253],[846,6975,919,309],[1368,3855,303,642],[3844,1082,1920,1080],[0,1082,1920,1080],[1922,1082,1920,1080]]}
];


// symbols:



(lib._15_01 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._15_02 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._16_01 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._16_02 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._16_03 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._16_04 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._17_01 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._17_02 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._17_03 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._18_01 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib._18_02 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib._19_01 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib._19_02 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib._19_03 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.abstract_tutorials_6 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.arnes = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Avatar = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.AvatarArnes = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Botón_Siguiente = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.casco = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.cobertor = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.cobertor1 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.fondoCalle = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.FondoPaso1 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.FondoPaso2 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.FondoPaso3 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.FondoPaso4 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.FondoPaso5 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.FondoPaso6 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.guantes = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.imagensita2 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.mangas = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Manta = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.manta1 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.manta1pngcopy = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.Manta_pinza = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.Mapadebits1 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.PasoFInal = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.photo_20180524_101533 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.Pieza17_02 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.Pieza18_01 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.Pieza18_02 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.Pieza19_01 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.pinza = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.pinza1 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.pinza1pngcopy = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.pinzaIzq = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.POSTE1 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.Poste2 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.Poste2pngcopy = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.poste3pngcopy = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.poste4 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot165 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot166 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot167 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot173herr2 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot174 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot174pngcopy = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot185 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot186 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot186trenza2 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot187 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot187pngcopy = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot190 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot193 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot195 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot195herr2 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot195manta2 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot196 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot198herr2 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot205 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot205pngcopy = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot216 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot216herr2 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot218 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot219 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot221 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot223 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot224 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot225 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot226 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot228herr = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot229herr = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot230herr = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot231herr = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot233herr2 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot234herr2 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.Screenshot235herr2 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.soporte = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.Soporteposte = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.SoporteTempCruceta_71 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.varilla = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.varillaPaso1 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.varillaPaso2 = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.VarillaPasoFinal = function() {
	this.spriteSheet = ss["VestimentaAvatar_atlas_2"];
	this.gotoAndStop(66);
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


(lib.pinzaDer2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.pinzaIzq();
	this.instance.parent = this;
	this.instance.setTransform(117.1,164.2,0.218,0.218,-179.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pinzaDer2, new cjs.Rectangle(0,0,117.9,164.2), null);


(lib.pinzaDer1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.pinzaIzq();
	this.instance.parent = this;
	this.instance.setTransform(117.1,164.2,0.218,0.218,-179.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pinzaDer1, new cjs.Rectangle(0,0,117.9,164.2), null);


(lib.mcc_unia047 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.808)").s().p("AhsBkIAAjHIDZAAIAADHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcc_unia047, new cjs.Rectangle(-10.8,-10,21.7,20), null);


(lib.mcc_soportePoste023 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.808)").s().p("A14CuIAAlbMArxAAAIAAFbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcc_soportePoste023, new cjs.Rectangle(-140.1,-17.3,280.3,34.7), null);


(lib.mcc_pistolas044 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.808)").s().p("Ah2BwIAAjfIDtAAIAADfg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcc_pistolas044, new cjs.Rectangle(-11.8,-11.2,23.8,22.5), null);


(lib.mcc_pinza035 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.808)").s().p("Ah7COIAAkbID3AAIAAEbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcc_pinza035, new cjs.Rectangle(-12.4,-14.2,24.9,28.5), null);


(lib.mcc_pinza = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgYAZIAAgxIAxAAIAAAxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcc_pinza, new cjs.Rectangle(-2.5,-2.5,5,5), null);


(lib.mcc_objective049 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.808)").s().p("EhKEAYaMAAAgwzMCUJAAAMAAAAwzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcc_objective049, new cjs.Rectangle(-474.1,-156.1,948.3,312.4), null);


(lib.mcc_objective047 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.808)").s().p("EgtWAM7IAA51MBatAAAIAAZ1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcc_objective047, new cjs.Rectangle(-290.3,-82.7,580.6,165.5), null);


(lib.mcc_objective044 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.808)").s().p("EhwaANLIAA6VMDg1AAAIAAaVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcc_objective044, new cjs.Rectangle(-719.4,-84.3,1439,168.7), null);


(lib.mcc_objective043 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.808)").s().p("Eg46ALnIAA3NMBx1AAAIAAXNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcc_objective043, new cjs.Rectangle(-364.3,-74.2,728.6,148.5), null);


(lib.mcc_objective041 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.808)").s().p("Eh3DAzdMAAAhm5MDuHAAAMAAABm5g");
	this.shape.setTransform(-182.3,-206.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcc_objective041, new cjs.Rectangle(-944.3,-536.2,1524.1,658.6), null);


(lib.mcc_objective037 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.808)").s().p("AqNM/IAA59IUbAAIAAZ9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcc_objective037, new cjs.Rectangle(-65.4,-83.1,130.9,166.2), null);


(lib.mcc_objective036 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.808)").s().p("ArtLuIAA3bIXbAAIAAXbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcc_objective036, new cjs.Rectangle(-75,-75,150.1,150.1), null);


(lib.mcc_objective028 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(153,153,153,0.808)").s().p("AveUmMAAAgpMIe9AAMAAAApMg");
	this.shape.setTransform(-4.9,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcc_objective028, new cjs.Rectangle(-104,-131.8,198.3,263.7), null);


(lib.mcc_objective025 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.808)").s().p("A1bcEMAAAg4HMAq3AAAMAAAA4Hg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcc_objective025, new cjs.Rectangle(-137.2,-179.5,274.5,359.2), null);


(lib.mcc_objective023 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.808)").s().p("EgrKAIaIAAwzMBWVAAAIAAQzg");
	this.shape.setTransform(0,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcc_objective023, new cjs.Rectangle(-276.2,-53.1,552.6,107.6), null);


(lib.mcc_objective02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AmiBLIAAiVINFAAIAACVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcc_objective02, new cjs.Rectangle(-41.8,-7.5,83.8,15), null);


(lib.mcc_objective01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("ArtBGIAAiLIXbAAIAACLg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcc_objective01, new cjs.Rectangle(-75,-7,150,14), null);


(lib.mcc_objective1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AkuBCIAAiDIJdAAIAACDg");
	this.shape.setTransform(30.3,6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcc_objective1, new cjs.Rectangle(0,0,60.7,13.1), null);


(lib.mcc_manta036 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.808)").s().p("Aj5E2IAApsIHzAAIAAJsg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcc_manta036, new cjs.Rectangle(-25,-31,50,62.1), null);


(lib.mcc_manta028 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.808)").s().p("Ap5FuIAArbITzAAIAALbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcc_manta028, new cjs.Rectangle(-63.3,-36.6,126.8,73.3), null);


(lib.mcc_manta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgYAZIAAgxIAxAAIAAAxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcc_manta, new cjs.Rectangle(-2.5,-2.5,5,5), null);


(lib.mcc_linea032 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.808)").s().p("AkKFaIAAqzIIVAAIAAKzg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcc_linea032, new cjs.Rectangle(-26.7,-34.6,53.5,69.3), null);


(lib.mcc_estribo049 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.808)").s().p("AhTBZIAAixICnAAIAACxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcc_estribo049, new cjs.Rectangle(-8.3,-8.9,16.7,17.8), null);


(lib.mcc_crucetaDoble041 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.808)").s().p("Ag5BOIAAibIBzAAIAACbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcc_crucetaDoble041, new cjs.Rectangle(-5.8,-7.8,11.6,15.6), null);


(lib.mcc_cruceta039 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.808)").s().p("AuRQTMAAAgglIcjAAMAAAAglg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcc_cruceta039, new cjs.Rectangle(-91.4,-104.3,182.8,208.7), null);


(lib.mcc_cobertor025 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.808)").s().p("AjjFvIAArdIHHAAIAALdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcc_cobertor025, new cjs.Rectangle(-22.7,-36.7,45.5,73.4), null);


(lib.mcc_cobertor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgYAZIAAgxIAxAAIAAAxg");
	this.shape.setTransform(2.5,2.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcc_cobertor, new cjs.Rectangle(0,0,5,5), null);


(lib.mcc_amarre030a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.808)").s().p("Ai9ISIAAwjIF7AAIAAQjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcc_amarre030a, new cjs.Rectangle(-19,-53,38,106), null);


(lib.mcc_aislante043 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.808)").s().p("AhXBZIAAixICvAAIAACxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcc_aislante043, new cjs.Rectangle(-8.8,-8.9,17.7,17.9), null);


(lib.mcc_aislador037 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.808)").s().p("AiFCRIAAkhIELAAIAAEhg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mcc_aislador037, new cjs.Rectangle(-13.4,-14.4,26.9,28.9), null);


(lib.mc_result = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Poste2();
	this.instance.parent = this;
	this.instance.setTransform(-159,21,0.21,0.226);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_result, new cjs.Rectangle(-159,21,402.1,175.3), null);


(lib.mc_pistolas043 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Screenshot229herr();
	this.instance.parent = this;
	this.instance.setTransform(-75,-95,0.355,0.355);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_pistolas043, new cjs.Rectangle(-75,-95,150,190.1), null);


(lib.mc_objective03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.poste4();
	this.instance.parent = this;
	this.instance.setTransform(-191.2,-87,0.199,0.199);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_objective03, new cjs.Rectangle(-191.2,-87,382.5,174), null);


(lib.mc_fondo063 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._19_01();
	this.instance.parent = this;
	this.instance.setTransform(-960,-540,1.406,1.406);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_fondo063, new cjs.Rectangle(-960,-540,1920,1080), null);


(lib.mc_fondo061 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._18_02();
	this.instance.parent = this;
	this.instance.setTransform(-960,-540,1.406,1.406);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_fondo061, new cjs.Rectangle(-960,-540,1920,1080), null);


(lib.mc_fondo58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._17_02();
	this.instance.parent = this;
	this.instance.setTransform(-960,-540,1.406,1.406);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_fondo58, new cjs.Rectangle(-960,-540,1920,1080), null);


(lib.mc_fondo057 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._17_01();
	this.instance.parent = this;
	this.instance.setTransform(-960,-540,1.406,1.406);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_fondo057, new cjs.Rectangle(-960,-540,1920,1080), null);


(lib.mc_fondo046 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Screenshot223();
	this.instance.parent = this;
	this.instance.setTransform(-960,-540);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_fondo046, new cjs.Rectangle(-960,-540,1920,1080), null);


(lib.mc_fondo037 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Screenshot196();
	this.instance.parent = this;
	this.instance.setTransform(-960,-540);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_fondo037, new cjs.Rectangle(-960,-540,1920,1080), null);


(lib.mc_fondo036 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Screenshot195();
	this.instance.parent = this;
	this.instance.setTransform(-960,-540);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_fondo036, new cjs.Rectangle(-960,-540,1920,1080), null);


(lib.mc_fondo031 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Screenshot187pngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-960,-540);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_fondo031, new cjs.Rectangle(-960,-540,1920,1080), null);


(lib.mc_fondo030 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Screenshot187();
	this.instance.parent = this;
	this.instance.setTransform(-960,-540);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_fondo030, new cjs.Rectangle(-960,-540,1920,1080), null);


(lib.mc_fondo026 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Screenshot174pngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-960,-540);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_fondo026, new cjs.Rectangle(-960,-540,1920,1080), null);


(lib.mc_fondo025 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Screenshot174();
	this.instance.parent = this;
	this.instance.setTransform(-960,-540);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_fondo025, new cjs.Rectangle(-960,-540,1920,1080), null);


(lib.mc_cobertor046 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.808)").s().p("Eg5aAMTIAA4mMBy1AAAIAAYmg");
	this.shape.setTransform(113.3,131.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_cobertor046, new cjs.Rectangle(-254.1,52.5,734.9,157.5), null);


(lib.mc_cobertor026 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.808)").s().p("EgO7ApjMAAAhTFId3AAMAAABTFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_cobertor026, new cjs.Rectangle(-95.5,-265.9,191.1,531.8), null);


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


(lib.vara_metalica = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.dot = new lib.dot();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.setTransform(294.1,376.1);

	this.instance = new lib.Pieza18_01();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.dot}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.vara_metalica, new cjs.Rectangle(0,0,1366,768), null);


(lib.unia_84 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.dot = new lib.dot();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.setTransform(209,198);

	this.instance = new lib.Pieza19_01();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.dot}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.unia_84, new cjs.Rectangle(0,0,400,400), null);


(lib.SoporteTempCruceta_71_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.dot = new lib.dot();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.setTransform(124.5,71.2);

	this.instance = new lib.SoporteTempCruceta_71();
	this.instance.parent = this;
	this.instance.setTransform(-10,0,0.114,0.132);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.dot}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SoporteTempCruceta_71_1, new cjs.Rectangle(-10,0,218.7,142.4), null);


(lib.soporte_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.dot = new lib.dot();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.setTransform(158.8,65.6);

	this.instance = new lib.soporte();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.518,0.518);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.dot}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.soporte_1, new cjs.Rectangle(0,0,317.6,131.1), null);


(lib.Puente_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.dot = new lib.dot();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.setTransform(304,29.7,1,1,0,0,0,105,-25.5);

	this.instance = new lib.Mapadebits1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.dot}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Puente_2, new cjs.Rectangle(0,0,398,125), null);


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


(lib.pertiga = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.dot = new lib.dot();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.setTransform(696.9,427);

	this.instance = new lib.Pieza18_02();
	this.instance.parent = this;
	this.instance.setTransform(-12,8,1.086,1.073);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.dot}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pertiga, new cjs.Rectangle(-12,8,1484,824.1), null);


(lib.objective1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_2
	this.box = new lib.box();
	this.box.name = "box";
	this.box.parent = this;
	this.box.setTransform(71,31.1,1,1,0,0,0,38,16);
	this.box.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.box).wait(1));

}).prototype = getMCSymbolPrototype(lib.objective1, new cjs.Rectangle(33,15.1,76,32), null);


(lib.mc_unia047 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.dot = new lib.mcc_unia047();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	// Layer_1
	this.instance = new lib.Screenshot231herr();
	this.instance.parent = this;
	this.instance.setTransform(-205.8,-81.6,0.432,0.432);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_unia047, new cjs.Rectangle(-205.8,-81.6,411.7,163.3), null);


(lib.mc_soportePoste023 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.dot = new lib.mcc_soportePoste023();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.setTransform(0,0,0.733,1);
	this.dot.alpha = 0.012;

	this.instance = new lib.Soporteposte();
	this.instance.parent = this;
	this.instance.setTransform(-214.8,-72.2,0.468,0.468);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.dot}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_soportePoste023, new cjs.Rectangle(-214.8,-72.2,429.8,144.5), null);


(lib.mc_soportePoste022 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.dot = new lib.mcc_soportePoste023();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.setTransform(-0.2,0.3,0.733,1);
	this.dot.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	// Layer_1
	this.instance = new lib.Soporteposte();
	this.instance.parent = this;
	this.instance.setTransform(-215,-72,0.468,0.468);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_soportePoste022, new cjs.Rectangle(-215,-72,429.8,144.5), null);


(lib.mc_pistolas044 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.dot = new lib.mcc_pistolas044();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	// Layer_1
	this.instance = new lib.Screenshot229herr();
	this.instance.parent = this;
	this.instance.setTransform(-75,-95,0.355,0.355);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_pistolas044, new cjs.Rectangle(-75,-95,150,190.1), null);


(lib.mc_pinza035 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.dot = new lib.mcc_pinza035();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.setTransform(59.1,92.9);
	this.dot.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	// Capa_1
	this.dot_1 = new lib.dot();
	this.dot_1.name = "dot_1";
	this.dot_1.parent = this;
	this.dot_1.setTransform(59.1,92.9);

	this.instance = new lib.pinza();
	this.instance.parent = this;
	this.instance.setTransform(-3,16,0.423,0.423);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ah7i3ID3AAIAAFvIj3AAg");
	this.shape.setTransform(50.3,92.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.808)").s().p("Ah7C4IAAlvID3AAIAAFvg");
	this.shape_1.setTransform(50.3,92.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance},{t:this.dot_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_pinza035, new cjs.Rectangle(-3,16,121.9,154), null);


(lib.mc_pinza = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.dot = new lib.mcc_pinza();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.setTransform(0,0,4.313,8.298);
	this.dot.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	// Layer_1
	this.instance = new lib.pinza1();
	this.instance.parent = this;
	this.instance.setTransform(-15.6,-27.8,0.069,0.069);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_pinza, new cjs.Rectangle(-15.6,-27.8,31.2,55.8), null);


(lib.mc_objective049 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.box = new lib.mcc_objective049();
	this.box.name = "box";
	this.box.parent = this;
	this.box.setTransform(-1.8,-3.1);
	this.box.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.box).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_objective049, new cjs.Rectangle(-476,-159.2,948.3,312.4), null);


(lib.mc_objective047 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.box = new lib.mcc_objective047();
	this.box.name = "box";
	this.box.parent = this;
	this.box.setTransform(-2,-1.5);
	this.box.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.box).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_objective047, new cjs.Rectangle(-292.3,-84.2,580.6,165.5), null);


(lib.mc_objective044 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.box = new lib.mcc_objective044();
	this.box.name = "box";
	this.box.parent = this;
	this.box.setTransform(0,-0.8);
	this.box.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.box).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_objective044, new cjs.Rectangle(-719.4,-85.1,1439,168.7), null);


(lib.mc_objective043 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.box = new lib.mcc_objective043();
	this.box.name = "box";
	this.box.parent = this;
	this.box.setTransform(-2.3,-2.5);
	this.box.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.box).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_objective043, new cjs.Rectangle(-366.6,-76.8,728.6,148.5), null);


(lib.mc_objective041 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.box = new lib.mcc_objective041();
	this.box.name = "box";
	this.box.parent = this;
	this.box.setTransform(0.1,-2.6,1,1,0,0,0,-202,-221.8);
	this.box.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.box).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_objective041, new cjs.Rectangle(-742.2,-317,1524.1,658.6), null);


(lib.mc_objective039 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.box = new lib.mcc_objective037();
	this.box.name = "box";
	this.box.parent = this;
	this.box.setTransform(-135.9,348.8,8.319,4.087,0,0,0,-0.1,0.3);
	this.box.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.box).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_objective039, new cjs.Rectangle(-679.1,7.9,1088.6,679.3), null);


(lib.mc_objective037 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.box = new lib.mcc_objective037();
	this.box.name = "box";
	this.box.parent = this;
	this.box.setTransform(0,0.1);
	this.box.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.box).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.808)").s().p("AqNM/IAA59IUbAAIAAZ9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_objective037, new cjs.Rectangle(-65.4,-83,130.9,166.2), null);


(lib.mc_objective036 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.box = new lib.mcc_objective036();
	this.box.name = "box";
	this.box.parent = this;
	this.box.setTransform(-125.1,5.6);
	this.box.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.box).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_objective036, new cjs.Rectangle(-200.1,-69.4,150.1,150.1), null);


(lib.mc_objective032 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.box = new lib.mcc_objective028();
	this.box.name = "box";
	this.box.parent = this;
	this.box.setTransform(2.3,-1.1,2.582,0.833,0,0,0,-0.2,0);
	this.box.alpha = 0.02;

	this.timeline.addTween(cjs.Tween.get(this.box).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_objective032, new cjs.Rectangle(-265.8,-111,512,219.7), null);


(lib.mc_objective025 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.box = new lib.mcc_objective025();
	this.box.name = "box";
	this.box.parent = this;
	this.box.setTransform(-0.8,-0.8);
	this.box.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.box).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_objective025, new cjs.Rectangle(-138,-180.3,274.5,359.2), null);


(lib.mc_objective023 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.box = new lib.mcc_objective023();
	this.box.name = "box";
	this.box.parent = this;
	this.box.setTransform(-0.3,-0.3,0.807,1);
	this.box.alpha = 0.57;

	this.timeline.addTween(cjs.Tween.get(this.box).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_objective023, new cjs.Rectangle(-223.3,-53.4,446.2,107.6), null);


(lib.mc_objective02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.box = new lib.mcc_objective02();
	this.box.name = "box";
	this.box.parent = this;
	this.box.setTransform(23.6,-5.3,1.456,5.815);
	this.box.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.box).wait(1));

	// Layer_1
	this.instance = new lib.poste3pngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-191,-91.7,0.199,0.199);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_objective02, new cjs.Rectangle(-191,-91.7,382.1,183.6), null);


(lib.mc_objective01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.box = new lib.mcc_objective01();
	this.box.name = "box";
	this.box.parent = this;
	this.box.setTransform(21.2,7,1.559,1.807);
	this.box.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.box).wait(1));

	// Layer_1
	this.instance = new lib.Poste2pngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-193.1,-78,0.201,0.201);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_objective01, new cjs.Rectangle(-193.1,-78,386.4,156.1), null);


(lib.mc_objective = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.box = new lib.mcc_objective1();
	this.box.name = "box";
	this.box.parent = this;
	this.box.setTransform(292.9,152.9,7.553,2.089,0,0,0,30.4,6.7);
	this.box.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.box).wait(1));

	// Layer_1
	this.instance = new lib.POSTE1();
	this.instance.parent = this;
	this.instance.setTransform(59,60,0.26,0.26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_objective, new cjs.Rectangle(59,60,462.4,157.9), null);


(lib.mc_manta036 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.dot = new lib.mcc_manta036();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	// Layer_1
	this.instance = new lib.Screenshot195manta2();
	this.instance.parent = this;
	this.instance.setTransform(-101,-81);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_manta036, new cjs.Rectangle(-101,-81,202,162), null);


(lib.mc_manta034 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.dot = new lib.dot();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.setTransform(147.8,95,1,1,0,0,0,21.1,0);

	this.instance = new lib.Manta();
	this.instance.parent = this;
	this.instance.setTransform(-7,5,0.403,0.434);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.dot}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_manta034, new cjs.Rectangle(-7,5,267.1,180.8), null);


(lib.mc_manta028 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.pinza1pngcopy();
	this.instance.parent = this;
	this.instance.setTransform(85,-43,0.081,0.081);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.dot = new lib.mcc_manta028();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.setTransform(0,0.1);
	this.dot.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	// Layer_1
	this.instance_1 = new lib.manta1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-165.1,-119.9,0.437,0.437);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_manta028, new cjs.Rectangle(-165.1,-119.9,330.4,239.9), null);


(lib.mc_manta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.dot = new lib.mcc_manta();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.setTransform(-0.1,0,10.868,6.095);
	this.dot.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	// Layer_1
	this.instance = new lib.manta1pngcopy();
	this.instance.parent = this;
	this.instance.setTransform(-39.1,-28.4,0.103,0.103);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_manta, new cjs.Rectangle(-39.1,-28.4,78.2,56.8), null);


(lib.mc_linea032 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.dot = new lib.mcc_linea032();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.setTransform(-40.9,-187.1,1,1.022,0,-9.9,0);
	this.dot.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	// Layer_1
	this.instance = new lib.imagensita2();
	this.instance.parent = this;
	this.instance.setTransform(-137,-539.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_linea032, new cjs.Rectangle(-137,-539.5,274,1079), null);


(lib.mc_estribo049 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.dot = new lib.mcc_estribo049();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.setTransform(0,0.1);
	this.dot.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	// Layer_1
	this.instance = new lib.Screenshot230herr();
	this.instance.parent = this;
	this.instance.setTransform(-51.3,-101.8,0.275,0.275);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_estribo049, new cjs.Rectangle(-51.3,-101.8,102.7,203.8), null);


(lib.mc_crucetaDoble041 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.dot = new lib.mcc_crucetaDoble041();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.setTransform(0,0.2);
	this.dot.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	// Layer_1
	this.instance = new lib.Screenshot216herr2();
	this.instance.parent = this;
	this.instance.setTransform(-224,-86,0.253,0.253);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_crucetaDoble041, new cjs.Rectangle(-224,-86,448,171.2), null);


(lib.mc_cruceta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.dot = new lib.mcc_cruceta039();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.setTransform(0,-1,0.172,0.159);
	this.dot.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	// Layer_1
	this.instance = new lib.Screenshot198herr2();
	this.instance.parent = this;
	this.instance.setTransform(-881.5,-336);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_cruceta, new cjs.Rectangle(-881.5,-336,1763,672), null);


(lib.mc_cobertor025 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.dot = new lib.mcc_cobertor025();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.setTransform(0,0.1);
	this.dot.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	// Layer_1
	this.instance = new lib.Screenshot173herr2();
	this.instance.parent = this;
	this.instance.setTransform(-89,-147);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_cobertor025, new cjs.Rectangle(-89,-147,178,294), null);


(lib.mc_cobertor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.dot = new lib.mcc_cobertor();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.setTransform(7.6,4.9,18.678,1,0,0,0,0.2,0);
	this.dot.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	// Layer_1
	this.instance = new lib.cobertor1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.074,0.074);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_cobertor, new cjs.Rectangle(0,0,101,15.2), null);


(lib.mc_amarre030 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.dot = new lib.mcc_amarre030a();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.setTransform(-0.2,0);
	this.dot.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	// Layer_1
	this.instance = new lib.Screenshot186trenza2();
	this.instance.parent = this;
	this.instance.setTransform(-38,-96);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_amarre030, new cjs.Rectangle(-38,-96,72,187), null);


(lib.mc_aislantePolimerico043 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.dot = new lib.mcc_aislante043();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.setTransform(0,0.1);
	this.dot.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	// Layer_1
	this.instance = new lib.Screenshot228herr();
	this.instance.parent = this;
	this.instance.setTransform(-31.9,-116.6,0.274,0.274);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_aislantePolimerico043, new cjs.Rectangle(-31.9,-116.6,63.9,233.3), null);


(lib.mc_aislador037 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.dot = new lib.mcc_aislador037();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	// Layer_1
	this.instance = new lib.Screenshot195herr2();
	this.instance.parent = this;
	this.instance.setTransform(-59,-70.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_aislador037, new cjs.Rectangle(-59,-70.5,118,141), null);


(lib.manta_pinza_final = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.dot = new lib.dot();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.setTransform(92.1,52.1);

	this.instance = new lib.Manta_pinza();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.587,0.633);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.dot}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.manta_pinza_final, new cjs.Rectangle(0,0,193.8,152.1), null);


(lib.manta_75 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.dot = new lib.dot();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.setTransform(113,57.1);

	this.instance = new lib.Manta();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.329,0.329);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.dot}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.manta_75, new cjs.Rectangle(0,0,217.5,137), null);


(lib.mangas_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.dot = new lib.dot1();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.setTransform(271.7,65.1,2.148,1.999);

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	// Capa_1
	this.dot1 = new lib.dot1();
	this.dot1.name = "dot1";
	this.dot1.parent = this;
	this.dot1.setTransform(271.7,65.1);

	this.instance = new lib.mangas();
	this.instance.parent = this;
	this.instance.setTransform(543.4,128.2,0.326,0.326,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.dot1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mangas_1, new cjs.Rectangle(0,2,543.4,126.2), null);


(lib.guantes_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.dot = new lib.dot1();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.setTransform(386.7,253.4,2.148,1.999);

	this.instance = new lib.guantes();
	this.instance.parent = this;
	this.instance.setTransform(0,-14,0.394,0.394);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.dot}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.guantes_1, new cjs.Rectangle(0,-14,756.9,425.8), null);


(lib.Cobertor_79 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.dot = new lib.dot();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.setTransform(558.2,408.1);

	this.instance = new lib.Pieza17_02();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.dot}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Cobertor_79, new cjs.Rectangle(0,0,1366,768), null);


(lib.cobertor_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.dot = new lib.dot();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.setTransform(210.4,48.6);

	this.instance = new lib.cobertor();
	this.instance.parent = this;
	this.instance.setTransform(1.6,0,0.317,0.465,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.dot}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cobertor_1, new cjs.Rectangle(0,0,430.5,102), null);


(lib.casco_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.dot = new lib.dot();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.setTransform(122.4,28.4,1,1,0,0,0,10.9,10.9);

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	// Capa_1
	this.instance = new lib.casco();
	this.instance.parent = this;
	this.instance.setTransform(39,-83,0.274,0.274);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3300FF").s().p("AhNAQIAAgfICbAAIAAAfg");
	this.shape.setTransform(63.9,67.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.casco_1, new cjs.Rectangle(39,-83,143.6,196.8), null);


(lib.arnes1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.dot = new lib.dot();
	this.dot.name = "dot";
	this.dot.parent = this;
	this.dot.setTransform(116.5,217.5,2.335,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	// Capa_1
	this.instance = new lib.arnes();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.arnes1, new cjs.Rectangle(0,0,233,457), null);


// stage content:
(lib.VestimentaAvatar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.varilla001.on("mousedown" , onMouseDown.bind(this));
		this.varilla001.on("pressmove" , onMouseMove.bind(this));
		this.varilla001.on("pressup" , onMouseUpPut.bind(this));
		this.varilla001.objective = this.objective001;
		this.pinzaIzq001.on("mousedown" , onMouseDown.bind(this));
		this.pinzaIzq001.on("pressmove" , onMouseMove.bind(this));
		this.pinzaIzq001.on("pressup" , actionError.bind(this));
		this.pinzaDer001.on("mousedown" , onMouseDown.bind(this));
		this.pinzaDer001.on("pressmove" , onMouseMove.bind(this));
		this.pinzaDer001.on("pressup" , actionError.bind(this));
		var self = this;
		
		function actionError(evt){
			actionWrong(evt);
		}
		
		function onMouseMove(evt){
			moveElement(evt);
		}
		
		function onMouseUpPut(evt){
			putElement(evt, self, 1);
		}
		
		function onMouseDown(evt){
			pressElement(evt);
		}
	}
	this.frame_1 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.pinzaIzq002.on("mousedown" , onMouseDown.bind(this));
		this.pinzaIzq002.on("pressmove" , onMouseMove.bind(this));
		this.pinzaIzq002.on("pressup" , onMouseUpPut.bind(this));
		this.pinzaIzq002.objective = this.objective002;
		this.pinzaDer002.on("mousedown" , onMouseDown.bind(this));
		this.pinzaDer002.on("pressmove" , onMouseMove.bind(this));
		this.pinzaDer002.on("pressup" , actionError.bind(this));
		var self = this;
		
		function actionError(evt){
			actionWrong(evt);
		}
		function onMouseMove(evt){
			moveElement(evt);
		}
		
		function onMouseUpPut(evt){
			putElement(evt, self, 2);
		}
		
		function onMouseDown(evt){
			pressElement(evt);
		}
	}
	this.frame_2 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.pinzaDer003.on("mousedown" , onMouseDown.bind(this));
		this.pinzaDer003.on("pressmove" , onMouseMove.bind(this));
		this.pinzaDer003.on("pressup" , onMouseUpPut.bind(this));
		this.pinzaDer003.objective = this.objective003;
		var self = this;
		
		function onMouseMove(evt){
			moveElement(evt);
		}
		
		function onMouseUpPut(evt){
			putElement(evt, self, 3);
		}
		
		function onMouseDown(evt){
			pressElement(evt);
		}
	}
	this.frame_3 = function() {
		this.stop();
		this.btnNext004.on("mousedown" , buttonNext.bind(this, 4));
		/*
		function onMouseDown(evt){
			this.gotoAndStop(4);
		}
		*/
	}
	this.frame_4 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.arnes005.objective = this.objective005;
		this.arnes005.on("mousedown" , onMouseDown.bind(this));
		this.arnes005.on("pressmove" , onMouseMove.bind(this));
		this.arnes005.on("pressup" , onMouseUpPut.bind(this));
		this.casco005.on("mousedown" , onMouseDown.bind(this));
		this.casco005.on("pressmove" , onMouseMove.bind(this));
		this.mangas005.on("mousedown" , onMouseDown.bind(this));
		this.mangas005.on("pressmove" , onMouseMove.bind(this));
		this.guantes005.on("mousedown" , onMouseDown.bind(this));
		this.guantes005.on("pressmove" , onMouseMove.bind(this));
		this.casco005.on("pressup" , actionError.bind(this));
		this.mangas005.on("pressup" , actionError.bind(this));
		this.guantes005.on("pressup" , actionError.bind(this));
		var self = this;
		
		
		function actionError(evt){
			actionWrong(evt);
		}
		
		function onMouseMove(evt){
			moveElement(evt);
		}
		
		function onMouseUpPut(evt){
			putElement(evt, self, 5);
		}
		
		function onMouseDown(evt){
			pressElement(evt);
		}
	}
	this.frame_5 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.mangas006.on("mousedown" , onMouseDown.bind(this));
		this.mangas006.on("pressmove" , onMouseMove.bind(this));
		this.mangas006.on("pressup" , onMouseUpPut.bind(this));
		this.mangas006.objective = this.objective006;
		this.casco006.on("mousedown" , onMouseDown.bind(this));
		this.casco006.on("pressmove" , onMouseMove.bind(this));
		this.casco006.on("pressup" , actionError.bind(this));
		this.guantes006.on("mousedown" , onMouseDown.bind(this));
		this.guantes006.on("pressmove" , onMouseMove.bind(this));
		this.guantes006.on("pressup" , actionError.bind(this));
		var self = this;
		
		function actionError(evt){
			actionWrong(evt);
		}
		
		function onMouseMove(evt){
			moveElement(evt);
		}
		
		function onMouseUpPut(evt){
			putElement(evt, self, 6);
		}
		
		function onMouseDown(evt){
			pressElement(evt);
		}
	}
	this.frame_6 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.guantes007.on("mousedown" , onMouseDown.bind(this));
		this.guantes007.on("pressmove" , onMouseMove.bind(this));
		this.guantes007.on("pressup" , onMouseUpPut.bind(this));
		this.guantes007.objective = this.objective007;
		this.casco007.on("mousedown" , onMouseDown.bind(this));
		this.casco007.on("pressmove" , onMouseMove.bind(this));
		this.casco007.on("pressup" , actionError.bind(this));
		var self = this;
		
		function actionError(evt){
			actionWrong(evt);
		}
		
		function onMouseMove(evt){
			moveElement(evt);
		}
		
		function onMouseUpPut(evt){
			putElement(evt, self, 7)
		}
		
		function onMouseDown(evt){
			pressElement(evt);
		}
	}
	this.frame_7 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.casco008.on("mousedown" , onMouseDown.bind(this));
		this.casco008.on("pressmove" , onMouseMove.bind(this));
		this.casco008.on("pressup" , onMouseUpPut.bind(this));
		this.casco008.objective = this.objective008;
		var self = this;
		
		function onMouseMove(evt){
			moveElement(evt);
		}
		
		function onMouseUpPut(evt){
			putElement(evt, self, 8)
		}
		
		function onMouseDown(evt){
			pressElement(evt);
		}
	}
	this.frame_8 = function() {
		this.stop();
		this.btnNext009.on("mousedown" , buttonNext.bind(this, 9));
	}
	this.frame_9 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.cobertor010.on("mousedown", onMouseDown.bind(this));
		this.cobertor010.on("pressup", onMouseUpPut.bind(this));
		this.cobertor010.on("pressmove", onMouseMove.bind(this));
		this.cobertor010.objective = this.objective010;
		var self = this;
		
		function onMouseMove(evt){
			moveElement(evt);
		}
		
		function onMouseUpPut(evt){
			putElement(evt, self, 10);
		}
		
		function onMouseDown(evt){
			pressElement(evt);
		}
	}
	this.frame_10 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.btnNext011.on("mousedown" , buttonNext.bind(this, 11));
	}
	this.frame_11 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.manta012.on("mousedown", onMouseDown.bind(this));
		this.manta012.on("pressup", onMouseUpPut.bind(this));
		this.manta012.on("pressmove", onMouseMove.bind(this));
		this.manta012.objective = this.objective012;
		this.pinza012.on("mousedown", onMouseDown.bind(this));
		this.pinza012.on("pressmove", onMouseMove.bind(this));
		this.pinza012.on("pressup" , actionError.bind(this));
		var self = this;
		
		function actionError(evt){
			actionWrong(evt);
		}
		
		function onMouseMove(evt){
			moveElement(evt);
		}
		
		function onMouseUpPut(evt){
			putElement(evt, self, 12);
		}
		
		function onMouseDown(evt){
			pressElement(evt);
		}
	}
	this.frame_12 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.pinza013.on("mousedown", onMouseDown.bind(this));
		this.pinza013.on("pressup", onMouseUpPut.bind(this));
		this.pinza013.on("pressmove", onMouseMove.bind(this));
		this.pinza013.objective = this.objective013;
		var self = this;
		
		function onMouseMove(evt){
			moveElement(evt);
		}
		
		function onMouseUpPut(evt){
			putElement(evt, self, 13);
		}
		
		function onMouseDown(evt){
			pressElement(evt);
		}
	}
	this.frame_13 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.btnNext014.on("mousedown", buttonNext.bind(this, 14));
	}
	this.frame_14 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.cobertor015.on("mousedown" , onMouseDown.bind(this));
		this.cobertor015.on("pressmove" , onMouseMove.bind(this));
		this.cobertor015.on("pressup" , onMouseUpPut.bind(this));
		this.cobertor015.objective = this.objective015;
		this.manta015.on("mousedown" , onMouseDown.bind(this));
		this.manta015.on("pressmove" , onMouseMove.bind(this));
		this.manta015.on("pressup" , actionError.bind(this));
		this.soporte015.on("mousedown" , onMouseDown.bind(this));
		this.soporte015.on("pressmove" , onMouseMove.bind(this));
		this.soporte015.on("pressup" , actionError.bind(this));
		this.pinza015.on("mousedown" , onMouseDown.bind(this));
		this.pinza015.on("pressmove" , onMouseMove.bind(this));
		this.pinza015.on("pressup" , actionError.bind(this));
		var self = this;
		
		function actionError(evt){
			actionWrong(evt);
		}
		
		function onMouseMove(evt){
			moveElement(evt);
		}
		
		function onMouseUpPut(evt){
			putElement(evt, self, 15);
		}
		
		function onMouseDown(evt){
			pressElement(evt);
		}
	}
	this.frame_15 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.cobertor016.on("mousedown" , onMouseDown.bind(this));
		this.cobertor016.on("pressmove" , onMouseMove.bind(this));
		this.cobertor016.on("pressup" , onMouseUpPut.bind(this));
		this.cobertor016.objective = this.objective016;
		this.manta016.on("mousedown" , onMouseDown.bind(this));
		this.manta016.on("pressmove" , onMouseMove.bind(this));
		this.manta016.on("pressup" , actionError.bind(this));
		this.soporte016.on("mousedown" , onMouseDown.bind(this));
		this.soporte016.on("pressmove" , onMouseMove.bind(this));
		this.soporte016.on("pressup" , actionError.bind(this));
		this.pinza016.on("mousedown" , onMouseDown.bind(this));
		this.pinza016.on("pressmove" , onMouseMove.bind(this));
		this.pinza016.on("pressup" , actionError.bind(this));
		var self = this;
		
		
		function actionError(evt){
			actionWrong(evt);
		}
		
		function onMouseMove(evt){
			moveElement(evt);
		}
		
		function onMouseUpPut(evt){
			putElement(evt, self, 16);
		}
		
		function onMouseDown(evt){
			pressElement(evt);
		}
	}
	this.frame_16 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.cobertor017.on("mousedown" , onMouseDown.bind(this));
		this.cobertor017.on("pressmove" , onMouseMove.bind(this));
		this.cobertor017.on("pressup" , onMouseUpPut.bind(this));
		this.cobertor017.objective = this.objective017;
		this.manta017.on("mousedown" , onMouseDown.bind(this));
		this.manta017.on("pressmove" , onMouseMove.bind(this));
		this.manta017.on("pressup" , actionError.bind(this));
		this.soporte017.on("mousedown" , onMouseDown.bind(this));
		this.soporte017.on("pressmove" , onMouseMove.bind(this));
		this.soporte017.on("pressup" , actionError.bind(this));
		this.pinza017.on("mousedown" , onMouseDown.bind(this));
		this.pinza017.on("pressmove" , onMouseMove.bind(this));
		this.pinza017.on("pressup" , actionError.bind(this));
		var self = this;
		
		function actionError(evt){
			actionWrong(evt);
		}
		
		function onMouseMove(evt){
			moveElement(evt);
		}
		
		function onMouseUpPut(evt){
			putElement(evt, self, 17);
		}
		
		function onMouseDown(evt){
			pressElement(evt);
		}
	}
	this.frame_17 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		var self = this;
		
		this.soporte018.on("mousedown" , onMouseDown.bind(this));
		this.soporte018.on("pressmove" , onMouseMove.bind(this));
		this.soporte018.on("pressup" , onMouseUpPut.bind(this));
		this.soporte018.objective = this.objective018;
		this.manta018.on("mousedown" , onMouseDown.bind(this));
		this.manta018.on("pressmove" , onMouseMove.bind(this));
		this.manta018.on("pressup" , actionError.bind(this));
		this.pinza018.on("mousedown" , onMouseDown.bind(this));
		this.pinza018.on("pressmove" , onMouseMove.bind(this));
		this.pinza018.on("pressup" , actionError.bind(this));
		var self = this;
		
		
		function actionError(evt){
			actionWrong(evt);
		}
		
		function onMouseMove(evt){
			moveElement(evt);
		}
		
		function onMouseUpPut(evt){
			putElement(evt, self, 18);
		}
		
		function onMouseDown(evt){
			pressElement(evt);
		}
	}
	this.frame_18 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.manta019.on("mousedown" , onMouseDown.bind(this));
		this.manta019.on("pressmove" , onMouseMove.bind(this));
		this.manta019.on("pressup" , onMouseUpPut.bind(this));
		this.manta019.objective = this.objective019;
		this.pinza019.on("mousedown" , onMouseDown.bind(this));
		this.pinza019.on("pressmove" , onMouseMove.bind(this));
		this.pinza019.on("pressup" , actionError.bind(this));
		var self = this;
		
		function actionError(evt){
			actionWrong(evt);
		}
		
		function onMouseMove(evt){
			moveElement(evt);
		}
		
		function onMouseUpPut(evt){
			putElement(evt, self, 19);
		}
		
		function onMouseDown(evt){
			pressElement(evt);
		}
	}
	this.frame_19 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.pinza020.on("mousedown" , onMouseDown.bind(this));
		this.pinza020.on("pressmove" , onMouseMove.bind(this));
		this.pinza020.on("pressup" , onMouseUpPut.bind(this));
		this.pinza020.objective = this.objective020;
		var self = this;
		
		function onMouseMove(evt){
			moveElement(evt);
		}
		
		function onMouseUpPut(evt){
			putElement(evt, self, 20);
		}
		
		function onMouseDown(evt){
			pressElement(evt);
		}
	}
	this.frame_20 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.btnNext021.on("mousedown" , buttonNext.bind(this, 21));
	}
	this.frame_21 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.soportePoste022.on("mousedown" , onMouseDown.bind(this));
		this.soportePoste022.on("pressmove" , onMouseMove.bind(this));
		this.soportePoste022.on("pressup" , onMouseUpPut.bind(this));
		this.soportePoste022.objective = this.objective022;
		var self = this;
		
		function onMouseMove(evt){
			moveElement(evt);
		}
		
		function onMouseUpPut(evt){
			putElement(evt, self, 22);
		}
		
		function onMouseDown(evt){
			pressElement(evt);
		}
	}
	this.frame_22 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.soportePoste023.on("mousedown" , onMouseDown.bind(this));
		this.soportePoste023.on("pressmove" , onMouseMove.bind(this));
		this.soportePoste023.on("pressup" , onMouseUpPut.bind(this));
		this.soportePoste023.objective = this.objective023;
		var self = this;
		
		function onMouseMove(evt){
			moveElement(evt);
		}
		
		function onMouseUpPut(evt){
			putElement(evt, self, 23);
		}
		
		function onMouseDown(evt){
			pressElement(evt);
		}
	}
	this.frame_23 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.btnNext024.on("mousedown" , buttonNext.bind(this, 24));
	}
	this.frame_24 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.fondo025.on("mousedown" , actionError.bind(this));
		this.cobertor025.on("mousedown" , onMouseDown.bind(this));
		this.cobertor025.on("pressmove" , onMouseMove.bind(this));
		this.cobertor025.on("pressup" , onMouseUpRemove.bind(this));
		this.cobertor025.objective = this.objective025;
		var self = this;
		
		function actionError(evt){
			actionWrong(evt);
		}
		
		function onMouseMove(evt){
			moveElement(evt);
		}
		
		function onMouseUpRemove(evt){
			removeElement(evt, self, 25);
		}
		
		
		function onMouseDown(evt){
			pressElement(evt);
		}
	}
	this.frame_25 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.cobertor026a.on("mousedown" , onMouseUpMove.bind(this));
		this.cobertor026b.on("mousedown" , onMouseUpMove.bind(this));
		this.fondo026.on("pressup" , actionError.bind(this));
		var self = this;
		
		function actionError(evt){
			actionWrong(evt);
		}
		
		function onMouseUpMove(evt){
			actionCorrect(self, 26);
		}
	}
	this.frame_26 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.manta027.on("mousedown" , onMouseDown.bind(this));
		this.manta027.on("pressmove" , onMouseMove.bind(this));
		this.manta027.on("pressup" , onMouseUpPut.bind(this));
		this.manta027.objective = this.objective027;
		var self = this;
		
		function onMouseMove(evt){
			moveElement(evt);
		}
		
		function onMouseUpPut(evt){
			putElement(evt, self, 27);
		}
		
		function onMouseDown(evt){
			pressElement(evt);
		}
	}
	this.frame_27 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.btnNext028.on("mousedown" , buttonNext.bind(this, 28));
	}
	this.frame_28 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.fondo029.on("mousedown" , actionError.bind(this));
		this.amarre029.on("mousedown" , onMouseDown.bind(this));
		this.amarre029.on("pressmove" , onMouseMove.bind(this));
		this.amarre029.on("pressup" , onMouseUpRemove.bind(this));
		this.amarre029.objective = this.objective029;
		var self = this;
		
		function actionError(evt){
			actionWrong(evt);
		}
		
		function onMouseMove(evt){
			moveElement(evt);
		}
		
		function onMouseUpRemove(evt){
			removeElement(evt, self, 29);
		}
		
		
		function onMouseDown(evt){
			pressElement(evt);
		}
	}
	this.frame_29 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.cobertor030a.on("mousedown" , onMouseUpMove.bind(this));
		this.cobertor030b.on("mousedown" , onMouseUpMove.bind(this));
		this.fondo030.on("mousedown" , actionError.bind(this));
		var self = this;
		
		function actionError(evt){
			actionWrong(evt);
		}
		
		
		function onMouseUpMove(evt){
			actionCorrect(self, 30);
		}
	}
	this.frame_30 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.linea031.on("mousedown" , onMouseDown.bind(this));
		this.linea031.on("pressmove" , onMouseMove.bind(this));
		this.linea031.on("pressup" , onMouseUpPut.bind(this));
		this.linea031.objective = this.objective031;
		var self = this;
		
		function onMouseMove(evt){
			moveElement(evt);
		}
		
		function onMouseUpPut(evt){
			putElement(evt, self, 31);
		}
		
		function onMouseDown(evt){
			pressElement(evt);
		}
	}
	this.frame_31 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.btnNext032.on("mousedown" , buttonNext.bind(this, 32));
	}
	this.frame_32 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.manta033.on("mousedown" , onMouseDown.bind(this));
		this.manta033.on("pressmove" , onMouseMove.bind(this));
		this.manta033.on("pressup" , onMouseUpPut.bind(this));
		this.manta033.objective = this.objective033;
		this.pinza033.on("mousedown" , onMouseDown.bind(this));
		this.pinza033.on("pressmove" , onMouseMove.bind(this));
		this.pinza033.on("pressup" , actionError.bind(this));
		var self = this;
		
		function actionError(evt){
			actionWrong(evt);
		}
		
		function onMouseMove(evt){
			moveElement(evt);
		}
		
		function onMouseUpPut(evt){
			putElement(evt, self, 33);
		}
		
		function onMouseDown(evt){
			pressElement(evt);
		}
	}
	this.frame_33 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.pinza034.on("mousedown" , onMouseDown.bind(this));
		this.pinza034.on("pressmove" , onMouseMove.bind(this));
		this.pinza034.on("pressup" , onMouseUpPut.bind(this));
		this.pinza034.objective = this.objective034;
		var self = this;
		
		function onMouseMove(evt){
			moveElement(evt);
		}
		
		function onMouseUpPut(evt){
			putElement(evt, self, 34);
		}
		
		function onMouseDown(evt){
			pressElement(evt);
		}
	}
	this.frame_34 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.fondo035.on("mousedown" , actionError.bind(this));
		this.manta035.on("mousedown" , onMouseDown.bind(this));
		this.manta035.on("pressmove" , onMouseMove.bind(this));
		this.manta035.on("pressup" , onMouseUpRemove.bind(this));
		this.manta035.objective = this.objective035;
		var self = this;
		
		function actionError(evt){
			actionWrong(evt);
		}
		
		function onMouseMove(evt){
			moveElement(evt);
		}
		
		function onMouseUpRemove(evt){
			removeElement(evt, self, 35);
		}
		
		function onMouseDown(evt){
			pressElement(evt);
		}
	}
	this.frame_35 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.fondo036.on("mousedown" , actionError.bind(this));
		this.aislador036.on("mousedown" , onMouseDown.bind(this));
		this.aislador036.on("pressmove" , onMouseMove.bind(this));
		this.aislador036.on("pressup" , onMouseUpRemove.bind(this));
		this.aislador036.objective = this.objective036;
		var self = this;
		
		function actionError(evt){
			actionWrong(evt);
		}
		
		function onMouseMove(evt){
			moveElement(evt);
		}
		
		function onMouseUpRemove(evt){
			removeElement(evt, self, 36);
		}
		
		function onMouseDown(evt){
			pressElement(evt);
		}
	}
	this.frame_36 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.btnNext037.on("mousedown" , buttonNext.bind(this, 37));
	}
	this.frame_37 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.cruceta038.on("mousedown" , onMouseDown.bind(this));
		this.cruceta038.on("pressmove" , onMouseMove.bind(this));
		this.cruceta038.on("pressup" , onMouseUpRemove.bind(this));
		this.cruceta038.objective = this.objective038;
		var self = this;
		
		function onMouseMove(evt){
			moveElement(evt);
		}
		
		function onMouseUpRemove(evt){
			removeElement(evt, self, 38);
		}
		
		function onMouseDown(evt){
			pressElement(evt);
		}
	}
	this.frame_38 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.btnNext039.on("mousedown" , buttonNext.bind(this, 39));
	}
	this.frame_39 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.crucetaDoble040.on("mousedown" , onMouseDown.bind(this));
		this.crucetaDoble040.on("pressmove" , onMouseMove.bind(this));
		this.crucetaDoble040.on("pressup" , onMouseUpPut.bind(this));
		this.crucetaDoble040.objective = this.objective040;
		var self = this;
		
		function onMouseMove(evt){
			moveElement(evt);
		}
		
		function onMouseUpPut(evt){
			putElement(evt, self, 40);
		}
		
		function onMouseDown(evt){
			pressElement(evt);
		}
	}
	this.frame_40 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.btnNext041.on("mousedown" , buttonNext.bind(this, 41));
	}
	this.frame_41 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.aislantePolimerico042.on("mousedown" , onMouseDown.bind(this));
		this.aislantePolimerico042.on("pressmove" , onMouseMove.bind(this));
		this.aislantePolimerico042.on("pressup" , onMouseUpPut.bind(this));
		this.pistolas042.on("mousedown" , onMouseDown.bind(this));
		this.pistolas042.on("pressmove" , onMouseMove.bind(this));
		this.pistolas042.on("pressup" , actionError.bind(this));
		this.aislantePolimerico042.objective = this.objective042;
		var self = this;
		
		function actionError(evt){
			actionWrong(evt);
		}
		
		function onMouseMove(evt){
			moveElement(evt);
		}
		
		function onMouseUpPut(evt){
			putElement(evt, self, 42);
		}
		
		function onMouseDown(evt){
			pressElement(evt);
		}
	}
	this.frame_42 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.pistolas043.on("mousedown" , onMouseDown.bind(this));
		this.pistolas043.on("pressmove" , onMouseMove.bind(this));
		this.pistolas043.on("pressup" , onMouseUpPut.bind(this));
		this.pistolas043.objective = this.objective043;
		var self = this;
		
		function onMouseMove(evt){
			moveElement(evt);
		}
		
		function onMouseUpPut(evt){
			putElement(evt, self, 43);
		}
		
		function onMouseDown(evt){
			pressElement(evt);
		}
	}
	this.frame_43 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.btnNext044.on("mousedown" , buttonNext.bind(this, 44));
	}
	this.frame_44 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.fondo045.on("mousedown" , actionError.bind(this));
		this.cobertor045.on("mousedown" , onMouseUpMove.bind(this));
		var self = this;
		
		function actionError(evt){
			actionWrong(evt);
		}
		function onMouseUpMove(){
			actionCorrect(self, 45);
		}
	}
	this.frame_45 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.unia046.on("mousedown" , onMouseDown.bind(this));
		this.unia046.on("pressmove" , onMouseMove.bind(this));
		this.unia046.on("pressup" , onMouseUpPut.bind(this));
		this.unia046.objective = this.objective046;
		var self = this;
		
		function onMouseMove(evt){
			moveElement(evt);
		}
		
		function onMouseUpPut(evt){
			putElement(evt, self, 46);
		}
		
		function onMouseDown(evt){
			pressElement(evt);
		}
	}
	this.frame_46 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.btnNext047.on("mousedown" , buttonNext.bind(this, 47));
	}
	this.frame_47 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.estribo048.on("mousedown" , onMouseDown.bind(this));
		this.estribo048.on("pressmove" , onMouseMove.bind(this));
		this.estribo048.on("pressup" , onMouseUpPut.bind(this));
		this.estribo048.objective = this.objective048;
		var self = this;
		
		function onMouseMove(evt){
			moveElement(evt);
		}
		
		function onMouseUpPut(evt){
			putElement(evt, self, 48);
		}
		
		function onMouseDown(evt){
			pressElement(evt);
		}
	}
	this.frame_48 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.btnNext049.on("mousedown" , buttonNext.bind(this, 49));
	}
	this.frame_49 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.soporteTempCruceta050.on("mousedown" , onMouseDown.bind(this));
		this.soporteTempCruceta050.on("pressmove" , onMouseMove.bind(this));
		this.soporteTempCruceta050.on("pressup" , onMouseUpPut.bind(this));
		this.puente050.on("mousedown" , onMouseDown.bind(this));
		this.puente050.on("pressmove" , onMouseMove.bind(this));
		this.puente050.on("pressup" , actionError.bind(this));
		this.soporteTempCruceta050.objective = this.objective050;
		var self = this;
		
		function actionError(evt){
			actionWrong(evt);
		}
		
		function onMouseMove(evt){
			moveElement(evt);
		}
		
		function onMouseUpPut(evt){
			putElement(evt, self, 50);
		}
		
		function onMouseDown(evt){
			pressElement(evt);
		}
	}
	this.frame_50 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.puente051.on("mousedown" , onMouseDown.bind(this));
		this.puente051.on("pressmove" , onMouseMove.bind(this));
		this.puente051.on("pressup" , onMouseUpPut.bind(this));
		this.puente051.objective = this.objective051;
		var self = this;
		
		function onMouseMove(evt){
			moveElement(evt);
		}
		
		function onMouseUpPut(evt){
			putElement(evt, self, 51);
		}
		
		function onMouseDown(evt){
			pressElement(evt);
		}
	}
	this.frame_51 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.btnNext052.on("mousedown" , buttonNext.bind(this, 52));
	}
	this.frame_52 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.objective053.on("mousedown" , onMouseUpMove.bind(this));
		var self = this;
		
		function onMouseUpMove(){
			actionCorrect(self, 53);
		}
	}
	this.frame_53 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.manta054.on("mousedown" , onMouseDown.bind(this));
		this.manta054.on("pressmove" , onMouseMove.bind(this));
		this.manta054.on("pressup" , onMouseUpPut.bind(this));
		this.manta054.objective = this.objective054;
		var self = this;
		
		function onMouseMove(evt){
			moveElement(evt);
		}
		
		function onMouseUpPut(evt){
			putElement(evt, self, 54);
		}
		
		function onMouseDown(evt){
			pressElement(evt);
		}
	}
	this.frame_54 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.manta055.on("mousedown" , onMouseDown.bind(this));
		this.manta055.on("pressmove" , onMouseMove.bind(this));
		this.manta055.on("pressup" , onMouseUpPut.bind(this));
		this.manta055.objective = this.objective055;
		var self = this;
		
		function onMouseMove(evt){
			moveElement(evt);
		}
		
		function onMouseUpPut(evt){
			putElement(evt, self, 55);
		}
		
		function onMouseDown(evt){
			pressElement(evt);
		}
	}
	this.frame_55 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.btnNext056.on("mousedown" , buttonNext.bind(this, 56));
	}
	this.frame_56 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.fondo057.on("mousedown" , actionError.bind(this));
		this.objective057.on("mousedown" , onMouseUpMove.bind(this));
		var self = this;
		
		function actionError(evt){
			actionWrong(evt);
		}
		
		function onMouseUpMove(){
			actionCorrect(self, 57);
		}
	}
	this.frame_57 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.fondo058.on("mousedown" , actionError.bind(this));
		this.cobertor058.on("mousedown" , onMouseDown.bind(this));
		this.cobertor058.on("pressmove" , onMouseMove.bind(this));
		this.cobertor058.on("pressup" , onMouseUpRemove.bind(this));
		this.cobertor058.objective = this.objective058;
		var self = this;
		
		
		function actionError(evt){
			actionWrong(evt);
		}
		
		
		function onMouseMove(evt){
			moveElement(evt);
		}
		
		function onMouseUpRemove(evt){
			removeElement(evt, self, 58);
		}
		
		function onMouseDown(evt){
			pressElement(evt);
		}
	}
	this.frame_58 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.btnNext059.on("mousedown" , buttonNext.bind(this, 59));
	}
	this.frame_59 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.cableMetalico060.on("mousedown" , onMouseDown.bind(this));
		this.cableMetalico060.on("pressmove" , onMouseMove.bind(this));
		this.cableMetalico060.on("pressup" , onMouseUpPut.bind(this));
		this.cableMetalico060.objective = this.objective060;
		var self = this;
		
		function onMouseMove(evt){
			moveElement(evt);
		}
		
		function onMouseUpPut(evt){
			putElement(evt, self, 60);
		}
		
		function onMouseDown(evt){
			pressElement(evt);
		}
	}
	this.frame_60 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.fondo061.on("mousedown" , actionError.bind(this));
		this.pertiga061.on("mousedown" , onMouseDown.bind(this));
		this.pertiga061.on("pressmove" , onMouseMove.bind(this));
		this.pertiga061.on("pressup" , onMouseUpRemove.bind(this));
		this.pertiga061.objective = this.objective061;
		var self = this;
		
		
		function actionError(evt){
			actionWrong(evt);
		}
		
		function onMouseMove(evt){
			moveElement(evt);
		}
		
		function onMouseUpRemove(evt){
			removeElement(evt, self, 61);
		}
		
		function onMouseDown(evt){
			pressElement(evt);
		}
		
		function onMouseUpMove(){
			actionCorrect(self, 45);
		}
		
		this.btnNext004.on("mousedown" , buttonNext.bind(this, 4));
	}
	this.frame_61 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.btnNext062.on("mousedown" , buttonNext.bind(this, 62));
	}
	this.frame_62 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.fondo063.on("mousedown" , actionError.bind(this));
		this.unia063.on("mousedown" , onMouseDown.bind(this));
		this.unia063.on("pressmove" , onMouseMove.bind(this));
		this.unia063.on("pressup" , onMouseUpRemove.bind(this));
		this.unia063.objective = this.objective063;
		var self = this;
		
		function actionError(evt){
			actionWrong(evt);
		}
		
		function onMouseMove(evt){
			moveElement(evt);
		}
		
		function onMouseUpRemove(evt){
			removeElement(evt, self, 63);
		}
		
		function onMouseDown(evt){
			pressElement(evt);
		}
	}
	this.frame_63 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.mantaPinza064.on("mousedown" , onMouseDown.bind(this));
		this.mantaPinza064.on("pressmove" , onMouseMove.bind(this));
		this.mantaPinza064.on("pressup" , onMouseUpPut.bind(this));
		this.mantaPinza064.objective = this.objective064;
		var self = this;
		
		
		
		function onMouseMove(evt){
			moveElement(evt);
		}
		
		function onMouseUpPut(evt){
			putElement(evt, self, 64);
		}
		
		function onMouseDown(evt){
			pressElement(evt);
		}
	}
	this.frame_64 = function() {
		this.stop();
		createjs.Touch.enable(stage);
		
		this.btnNext065.on("mousedown" , actionFinal.bind(this));
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(1).call(this.frame_14).wait(1).call(this.frame_15).wait(1).call(this.frame_16).wait(1).call(this.frame_17).wait(1).call(this.frame_18).wait(1).call(this.frame_19).wait(1).call(this.frame_20).wait(1).call(this.frame_21).wait(1).call(this.frame_22).wait(1).call(this.frame_23).wait(1).call(this.frame_24).wait(1).call(this.frame_25).wait(1).call(this.frame_26).wait(1).call(this.frame_27).wait(1).call(this.frame_28).wait(1).call(this.frame_29).wait(1).call(this.frame_30).wait(1).call(this.frame_31).wait(1).call(this.frame_32).wait(1).call(this.frame_33).wait(1).call(this.frame_34).wait(1).call(this.frame_35).wait(1).call(this.frame_36).wait(1).call(this.frame_37).wait(1).call(this.frame_38).wait(1).call(this.frame_39).wait(1).call(this.frame_40).wait(1).call(this.frame_41).wait(1).call(this.frame_42).wait(1).call(this.frame_43).wait(1).call(this.frame_44).wait(1).call(this.frame_45).wait(1).call(this.frame_46).wait(1).call(this.frame_47).wait(1).call(this.frame_48).wait(1).call(this.frame_49).wait(1).call(this.frame_50).wait(1).call(this.frame_51).wait(1).call(this.frame_52).wait(1).call(this.frame_53).wait(1).call(this.frame_54).wait(1).call(this.frame_55).wait(1).call(this.frame_56).wait(1).call(this.frame_57).wait(1).call(this.frame_58).wait(1).call(this.frame_59).wait(1).call(this.frame_60).wait(1).call(this.frame_61).wait(1).call(this.frame_62).wait(1).call(this.frame_63).wait(1).call(this.frame_64).wait(1));

	// NombrePaso
	this.text = new cjs.Text("01. CONEXIÓN A TIERRA", "45px 'Times New Roman'");
	this.text.lineHeight = 52;
	this.text.lineWidth = 539;
	this.text.parent = this;
	this.text.setTransform(486,30);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({x:446.7,text:"02. ENGANCHE A PUENTE AISLADO",lineWidth:762},0).wait(3).to({x:286.1,y:38,text:"03. EQUIPAMIENTO DE LINIERO",lineWidth:689},0).wait(5).to({x:411.6,y:41.9,text:"04. COBERTOR CAUCHO DE LÍNEA",lineWidth:771},0).wait(2).to({y:39.7,text:"05. MANTA RANURADA Y PINZAS",lineWidth:736},0).wait(3).to({x:486.4,y:33.5,text:"06. COBERTORES, AISLADOR, MANTA Y PINZAS",lineWidth:1012},0).wait(7).to({x:588.8,y:30.5,text:"07. SOPORTES TEMPORALES DE POSTE",lineWidth:831},0).wait(3).to({x:661.2,y:41.8,text:"08. RETIRAR AISLADOR, MOVER COBERTOR Y COLOCAR MANTA CON PINZA",lineWidth:705},0).wait(4).to({x:693.3,y:18.3,text:"09. RETIRAR AMARRE, CERRAR COBERTORES Y TRASLADAR LÍNEAS",lineWidth:693},0).wait(4).to({x:570.4,y:21.3,text:"10. COLOCAR MANTA CON PINZA Y RETIRAR AISLADOR",lineWidth:771},0).wait(5).to({x:549.2,y:33.6,text:"11. QUITAR CRUCETA SIMPLE TEMPORAL",lineWidth:918},0).wait(2).to({x:647.7,y:27.4,text:"12. COLOCAR CRUCETA ARMADA",lineWidth:735},0).wait(2).to({x:466.4,y:32.9,text:"13. COLOCAR AISLADOR POLIMERICO Y PISTOLAS",lineWidth:1084},0).wait(3).to({x:545.9,y:47.9,text:"14. MOVER COBERTURA Y PONER UÑA",lineWidth:845},0).wait(3).to({x:695.5,y:24.3,text:"15. COLOCAR TECLE DE FAJA",lineWidth:636},0).wait(2).to({scaleX:0.99,x:1025.8,y:47.3,text:"16. COLOCAR SOPORTE TEMPORAL DE CRUCETA Y PUENTE",textAlign:NaN,lineWidth:1164},0).wait(3).to({x:950,y:40,text:"17. SELECCIONE LA HERRAMIENTA QUE SE DEBE QUITAR"},0).wait(1).to({x:939.2,y:57.1,text:"17. UBIQUE LA MANTA EN EL LUGAR CORRESPONDIENTE"},0).wait(1).to({x:935.4,y:35.1},0).wait(1).to({x:945.1,text:"17. DE CLIC EN LA FLECHA PARA PASAR AL SIGUIENTE PASO:"},0).wait(1).to({x:930.4,y:42.4,text:"18. SELECCIONE LA PARTE QUE DEBA SER CORTADA"},0).wait(1).to({x:923.1,y:34.5,text:"18. SELECCIONE EL COBERTOR QUE DEBE SER  LEVANTADO"},0).wait(1).to({x:933.6,y:35.2,text:"18. DE CLIC EN LA FLECHA PARA PASAR AL SIGUIENTE PASO:"},0).wait(1).to({x:963,y:33.2,text:"19. MUEVA EL CABLE HASTA LA POSICIÓN CORRECTA"},0).wait(1).to({x:939.5,y:55.2,text:"19. RETIRAR EL TECLE DE FAJA"},0).wait(1).to({x:983.2,y:42.6,text:"19. DE CLIC EN LA FLECHA PARA PASAR AL SIGUIENTE PASO:"},0).wait(1).to({x:996,y:29.4,text:"20. RETIRAR LA UÑA DEL CABLE"},0).wait(1).to({x:994.7,y:37.3,text:"20. UBIQUE LA MANTA EN EL LUGAR CORRESPONDIENTE"},0).wait(1).to({x:1022.7,y:47.2,text:"20. DE CLIC EN LA FLECHA PARA FINALIZAR EL PROCESO"},0).wait(1));

	// Objetos
	this.objective001 = new lib.objective1();
	this.objective001.name = "objective001";
	this.objective001.parent = this;
	this.objective001.setTransform(145.8,913.5,4.011,7.287,90,0,0,71,31.2);

	this.text_1 = new cjs.Text("Varilla", "37px 'Times New Roman'");
	this.text_1.lineHeight = 43;
	this.text_1.lineWidth = 272;
	this.text_1.alpha = 0.80784314;
	this.text_1.parent = this;
	this.text_1.setTransform(1612.2,1005.1);

	this.varilla001 = new lib.varilla_1();
	this.varilla001.name = "varilla001";
	this.varilla001.parent = this;
	this.varilla001.setTransform(1751.8,820.8,0.756,1,0,0,0,151.8,213.6);

	this.text_2 = new cjs.Text("Extremo Varilla", "37px 'Times New Roman'");
	this.text_2.lineHeight = 43;
	this.text_2.lineWidth = 272;
	this.text_2.alpha = 0.80784314;
	this.text_2.parent = this;
	this.text_2.setTransform(1602,546.5);

	this.pinzaIzq001 = new lib.pinzaIzq_1();
	this.pinzaIzq001.name = "pinzaIzq001";
	this.pinzaIzq001.parent = this;
	this.pinzaIzq001.setTransform(1662.9,356.3);

	this.text_3 = new cjs.Text("Extremo Camión", "37px 'Times New Roman'");
	this.text_3.lineHeight = 43;
	this.text_3.lineWidth = 272;
	this.text_3.alpha = 0.80784314;
	this.text_3.parent = this;
	this.text_3.setTransform(1602,295.6);

	this.pinzaDer001 = new lib.pinzaDer1();
	this.pinzaDer001.name = "pinzaDer001";
	this.pinzaDer001.parent = this;
	this.pinzaDer001.setTransform(1721.8,188.1,1,1,0,0,0,58.9,82);

	this.text_4 = new cjs.Text("HERRAMIENTAS", "52px 'Times New Roman'");
	this.text_4.lineHeight = 60;
	this.text_4.lineWidth = 416;
	this.text_4.alpha = 0.80784314;
	this.text_4.parent = this;
	this.text_4.setTransform(1467.7,30);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.808)").s().p("EgNIBUEMAAAioHIaRAAMAAACoHg");
	this.shape.setTransform(1690.4,567.7,2.73,1.055);

	this.instance = new lib.fondoCalle();
	this.instance.parent = this;

	this.pinzaIzq002 = new lib.pinzaIzq_1();
	this.pinzaIzq002.name = "pinzaIzq002";
	this.pinzaIzq002.parent = this;
	this.pinzaIzq002.setTransform(1751.9,476,1,1,0,0,0,74,86.7);

	this.pinzaDer002 = new lib.pinzaDer2();
	this.pinzaDer002.name = "pinzaDer002";
	this.pinzaDer002.parent = this;
	this.pinzaDer002.setTransform(1753.6,221.1,1,1,0,0,0,58.9,82);

	this.objective002 = new lib.objective1();
	this.objective002.name = "objective002";
	this.objective002.parent = this;
	this.objective002.setTransform(176.8,887.5,3.333,5.231,-90,0,0,70.9,31.3);

	this.instance_1 = new lib.varillaPaso1();
	this.instance_1.parent = this;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(204,204,51,0.059)").s().p("AoPIQIAAwfIPRAAIBOAAIAAQfIhOAAg");
	this.shape_1.setTransform(1706.9,305.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(153,102,102,0.059)").s().p("EgNIBUEMAAAhw0IBOAAIAAwgIhOAAMAAAgmzIaRAAMAAACoHg");
	this.shape_2.setTransform(1835.9,542);

	this.pinzaDer003 = new lib.pinzaDer();
	this.pinzaDer003.name = "pinzaDer003";
	this.pinzaDer003.parent = this;
	this.pinzaDer003.setTransform(1702.9,439.9,1,1,0,0,0,58.9,82);

	this.objective003 = new lib.objective1();
	this.objective003.name = "objective003";
	this.objective003.parent = this;
	this.objective003.setTransform(1240.9,731.5,2.646,5.666,90,0,0,71.1,30.9);

	this.instance_2 = new lib.varillaPaso2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,3,1,0.993);

	this.btnNext004 = new lib.btnNext();
	this.btnNext004.name = "btnNext004";
	this.btnNext004.parent = this;
	this.btnNext004.setTransform(1764.4,960.1,1,1,0,0,0,93.8,93.8);

	this.instance_3 = new lib.VarillaPasoFinal();
	this.instance_3.parent = this;

	this.casco005 = new lib.casco_1();
	this.casco005.name = "casco005";
	this.casco005.parent = this;
	this.casco005.setTransform(1486.7,312.8,1,1,0,0,0,110.8,15.4);

	this.mangas005 = new lib.mangas_1();
	this.mangas005.name = "mangas005";
	this.mangas005.parent = this;
	this.mangas005.setTransform(1648.3,735.9,1,1,0,0,0,271.7,63.1);

	this.guantes005 = new lib.guantes_1();
	this.guantes005.name = "guantes005";
	this.guantes005.parent = this;
	this.guantes005.setTransform(1594.8,937.4,1,1,0,0,0,378.4,212.8);

	this.text_5 = new cjs.Text("Arnés", "37px 'Times New Roman'");
	this.text_5.lineHeight = 43;
	this.text_5.lineWidth = 272;
	this.text_5.alpha = 0.80784314;
	this.text_5.parent = this;
	this.text_5.setTransform(1655.2,153.7);

	this.arnes005 = new lib.arnes1();
	this.arnes005.name = "arnes005";
	this.arnes005.parent = this;
	this.arnes005.setTransform(1780.7,463.3,1,1,0,0,0,116.5,228.5);

	this.instance_4 = new lib.Avatar();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-412,10);

	this.objective005 = new lib.objective1();
	this.objective005.name = "objective005";
	this.objective005.parent = this;
	this.objective005.setTransform(601.3,434.6,5.278,6.959,90,0,0,68.7,30.8);

	this.mangas006 = new lib.mangas_1();
	this.mangas006.name = "mangas006";
	this.mangas006.parent = this;
	this.mangas006.setTransform(1609.3,757.5,1,1,0,0,0,271.7,63.1);

	this.guantes006 = new lib.guantes_1();
	this.guantes006.name = "guantes006";
	this.guantes006.parent = this;
	this.guantes006.setTransform(1590.8,975.9,1,1,0,0,0,378.4,212.8);

	this.casco006 = new lib.casco_1();
	this.casco006.name = "casco006";
	this.casco006.parent = this;
	this.casco006.setTransform(1654.5,433,1,1,0,0,0,110.8,15.4);

	this.objective006 = new lib.objective1();
	this.objective006.name = "objective006";
	this.objective006.parent = this;
	this.objective006.setTransform(619.2,371.9,11.268,4.104,0,0,0,71,31.1);

	this.instance_5 = new lib.Screenshot233herr2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(191,176);

	this.guantes007 = new lib.guantes_1();
	this.guantes007.name = "guantes007";
	this.guantes007.parent = this;
	this.guantes007.setTransform(1569.3,932.9,1,1,0,0,0,378.4,212.8);

	this.casco007 = new lib.casco_1();
	this.casco007.name = "casco007";
	this.casco007.parent = this;
	this.casco007.setTransform(1652.3,515.5,1,1,0,0,0,110.8,15.4);

	this.objective007 = new lib.objective1();
	this.objective007.name = "objective007";
	this.objective007.parent = this;
	this.objective007.setTransform(619.7,334.6,11.813,5.171,0,0,0,71,31.1);

	this.instance_6 = new lib.Screenshot234herr2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(205,125);

	this.casco008 = new lib.casco_1();
	this.casco008.name = "casco008";
	this.casco008.parent = this;
	this.casco008.setTransform(1624.7,572.2,1,1,0,0,0,110.8,15.4);

	this.objective008 = new lib.objective1();
	this.objective008.name = "objective008";
	this.objective008.parent = this;
	this.objective008.setTransform(600.1,241.8,2.976,8.066,90,0,0,71.2,31.2);

	this.instance_7 = new lib.Screenshot235herr2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(190,149);

	this.btnNext009 = new lib.btnNext();
	this.btnNext009.name = "btnNext009";
	this.btnNext009.parent = this;
	this.btnNext009.setTransform(1788.3,962.1,1,1,0,0,0,93.8,93.8);

	this.instance_8 = new lib.AvatarArnes();
	this.instance_8.parent = this;
	this.instance_8.setTransform(188,87,1,1.098);

	this.objective010 = new lib.mc_objective();
	this.objective010.name = "objective010";
	this.objective010.parent = this;
	this.objective010.setTransform(-85,101.4,2.842,3.024,0,0,0,-0.1,0.1);

	this.cobertor010 = new lib.mc_cobertor();
	this.cobertor010.name = "cobertor010";
	this.cobertor010.parent = this;
	this.cobertor010.setTransform(1537.3,517.1,3.592,3.592);

	this.instance_9 = new lib.mc_result();
	this.instance_9.parent = this;
	this.instance_9.setTransform(572.4,198.2,3.413,2.605,0,0,0,0.1,0.1);

	this.manta012 = new lib.mc_manta();
	this.manta012.name = "manta012";
	this.manta012.parent = this;
	this.manta012.setTransform(1727.2,484.1,3.56,3.56);

	this.pinza012 = new lib.mc_pinza();
	this.pinza012.name = "pinza012";
	this.pinza012.parent = this;
	this.pinza012.setTransform(1712.1,809.5,3.56,3.56);

	this.objective012 = new lib.mc_objective01();
	this.objective012.name = "objective012";
	this.objective012.parent = this;
	this.objective012.setTransform(719,508.5,3.56,3.56,0,0,0,-15.2,-8.8);

	this.pinza013 = new lib.mc_pinza();
	this.pinza013.name = "pinza013";
	this.pinza013.parent = this;
	this.pinza013.setTransform(1705,621.8,3.56,3.56);

	this.objective013 = new lib.mc_objective02();
	this.objective013.name = "objective013";
	this.objective013.parent = this;
	this.objective013.setTransform(752.8,567.2,3.937,2.681,0,0,0,0.2,0.1);

	this.objective03 = new lib.mc_objective03();
	this.objective03.name = "objective03";
	this.objective03.parent = this;
	this.objective03.setTransform(755,567.3,3.941,2.773,0,0,0,0.3,0.1);

	this.pinza015 = new lib.mc_pinza035();
	this.pinza015.name = "pinza015";
	this.pinza015.parent = this;
	this.pinza015.setTransform(193.7,896.7,1,1,0,0,0,60.9,77);

	this.manta015 = new lib.mc_manta034();
	this.manta015.name = "manta015";
	this.manta015.parent = this;
	this.manta015.setTransform(533.2,935.6,1,1,0,0,0,133.5,90.4);

	this.soporte015 = new lib.soporte_1();
	this.soporte015.name = "soporte015";
	this.soporte015.parent = this;
	this.soporte015.setTransform(1020.1,947.5,1,1,0,0,0,158.8,65.5);

	this.objective015 = new lib.objective1();
	this.objective015.name = "objective015";
	this.objective015.parent = this;
	this.objective015.setTransform(1367.3,423.2,4.93,3.815,0,0,0,71.2,31.1);

	this.cobertor015 = new lib.cobertor_1();
	this.cobertor015.name = "cobertor015";
	this.cobertor015.parent = this;
	this.cobertor015.setTransform(1639.4,914,0.912,1,0,0,180,215.3,51);

	this.objective016 = new lib.objective1();
	this.objective016.name = "objective016";
	this.objective016.parent = this;
	this.objective016.setTransform(713.7,447.7,7.039,3.112,0,0,0,71.2,31.2);

	this.pinza016 = new lib.mc_pinza035();
	this.pinza016.name = "pinza016";
	this.pinza016.parent = this;
	this.pinza016.setTransform(197.3,904.6,1,1,0,0,0,60.9,77);

	this.manta016 = new lib.mc_manta034();
	this.manta016.name = "manta016";
	this.manta016.parent = this;
	this.manta016.setTransform(533.8,937.5,1,1,0,0,0,133.5,90.4);

	this.soporte016 = new lib.soporte_1();
	this.soporte016.name = "soporte016";
	this.soporte016.parent = this;
	this.soporte016.setTransform(1012.8,946.8,1,1,0,0,0,158.8,65.5);

	this.cobertor016 = new lib.cobertor_1();
	this.cobertor016.name = "cobertor016";
	this.cobertor016.parent = this;
	this.cobertor016.setTransform(1631.7,914,0.912,1,0,0,180,215.3,51);

	this.pinza017 = new lib.mc_pinza035();
	this.pinza017.name = "pinza017";
	this.pinza017.parent = this;
	this.pinza017.setTransform(195.2,904.6,1,1,0,0,0,60.9,77);

	this.objective017 = new lib.objective1();
	this.objective017.name = "objective017";
	this.objective017.parent = this;
	this.objective017.setTransform(240.1,445.3,6.368,3.312,0,0,0,70.7,31.3);

	this.manta017 = new lib.mc_manta034();
	this.manta017.name = "manta017";
	this.manta017.parent = this;
	this.manta017.setTransform(533.8,937.5,1,1,0,0,0,133.5,90.4);

	this.soporte017 = new lib.soporte_1();
	this.soporte017.name = "soporte017";
	this.soporte017.parent = this;
	this.soporte017.setTransform(1012.8,946.8,1,1,0,0,0,158.8,65.5);

	this.cobertor017 = new lib.cobertor_1();
	this.cobertor017.name = "cobertor017";
	this.cobertor017.parent = this;
	this.cobertor017.setTransform(1631.7,914,0.912,1,0,0,180,215.3,51);

	this.pinza018 = new lib.mc_pinza035();
	this.pinza018.name = "pinza018";
	this.pinza018.parent = this;
	this.pinza018.setTransform(186.2,891.5,1,1,0,0,0,60.9,77);

	this.objective018 = new lib.objective1();
	this.objective018.name = "objective018";
	this.objective018.parent = this;
	this.objective018.setTransform(1031.1,476.2,6.368,6.796,0,0,0,70.8,31.4);

	this.manta018 = new lib.mc_manta034();
	this.manta018.name = "manta018";
	this.manta018.parent = this;
	this.manta018.setTransform(533.8,937.5,1,1,0,0,0,133.5,90.4);

	this.soporte018 = new lib.soporte_1();
	this.soporte018.name = "soporte018";
	this.soporte018.parent = this;
	this.soporte018.setTransform(1012.8,946.8,1,1,0,0,0,158.8,65.5);

	this.objective019 = new lib.objective1();
	this.objective019.name = "objective019";
	this.objective019.parent = this;
	this.objective019.setTransform(1007.5,455,12.908,5.28,0,0,0,71,31.4);

	this.pinza019 = new lib.mc_pinza035();
	this.pinza019.name = "pinza019";
	this.pinza019.parent = this;
	this.pinza019.setTransform(186.2,891.5,1,1,0,0,0,60.9,77);

	this.objective3 = new lib.objective1();
	this.objective3.name = "objective3";
	this.objective3.parent = this;
	this.objective3.setTransform(240.1,424.9,6.368,2.06,0,0,0,70.7,31.3);

	this.manta019 = new lib.mc_manta034();
	this.manta019.name = "manta019";
	this.manta019.parent = this;
	this.manta019.setTransform(400.3,847.1);

	this.objective020 = new lib.objective1();
	this.objective020.name = "objective020";
	this.objective020.parent = this;
	this.objective020.setTransform(1143.7,404.2,1.702,35.786,90,0,0,71,31);

	this.pinza020 = new lib.mc_pinza035();
	this.pinza020.name = "pinza020";
	this.pinza020.parent = this;
	this.pinza020.setTransform(186.2,891.5,1,1,0,0,0,60.9,77);

	this.soportePoste022 = new lib.mc_soportePoste022();
	this.soportePoste022.name = "soportePoste022";
	this.soportePoste022.parent = this;
	this.soportePoste022.setTransform(1089.4,970.7);

	this.objective022 = new lib.mc_objective023();
	this.objective022.name = "objective022";
	this.objective022.parent = this;
	this.objective022.setTransform(1032.3,328.7);
	this.objective022.alpha = 0.039;

	this.objective023 = new lib.mc_objective023();
	this.objective023.name = "objective023";
	this.objective023.parent = this;
	this.objective023.setTransform(677.7,187.8,0.448,1);
	this.objective023.alpha = 0.039;

	this.soportePoste023 = new lib.mc_soportePoste023();
	this.soportePoste023.name = "soportePoste023";
	this.soportePoste023.parent = this;
	this.soportePoste023.setTransform(1054.9,989.3);

	this.cobertor025 = new lib.mc_cobertor025();
	this.cobertor025.name = "cobertor025";
	this.cobertor025.parent = this;
	this.cobertor025.setTransform(1101.3,375);

	this.cobertor026b = new lib.mc_cobertor026();
	this.cobertor026b.name = "cobertor026b";
	this.cobertor026b.parent = this;
	this.cobertor026b.setTransform(1073.4,167,0.223,0.639,0,-10.8,0);
	this.cobertor026b.alpha = 0.039;

	this.cobertor026a = new lib.mc_cobertor026();
	this.cobertor026a.name = "cobertor026a";
	this.cobertor026a.parent = this;
	this.cobertor026a.setTransform(1179.1,736.3,0.329,1.313,0,-10.4,0,0.5,0.3);
	this.cobertor026a.alpha = 0.039;

	this.objective027 = new lib.mc_objective032();
	this.objective027.name = "objective027";
	this.objective027.parent = this;
	this.objective027.setTransform(1113,382.1);

	this.manta027 = new lib.mc_manta028();
	this.manta027.name = "manta027";
	this.manta027.parent = this;
	this.manta027.setTransform(855.5,946.7);

	this.objective029 = new lib.mc_objective025();
	this.objective029.name = "objective029";
	this.objective029.parent = this;
	this.objective029.setTransform(1108,367.8,0.433,0.572);
	this.objective029.alpha = 0.039;

	this.amarre029 = new lib.mc_amarre030();
	this.amarre029.name = "amarre029";
	this.amarre029.parent = this;
	this.amarre029.setTransform(1108,367.8);

	this.cobertor030b = new lib.mc_cobertor026();
	this.cobertor030b.name = "cobertor030b";
	this.cobertor030b.parent = this;
	this.cobertor030b.setTransform(1060.8,105.3,0.188,0.402,0,-10.4,0,1.2,0.4);
	this.cobertor030b.alpha = 0.039;

	this.cobertor030a = new lib.mc_cobertor026();
	this.cobertor030a.name = "cobertor030a";
	this.cobertor030a.parent = this;
	this.cobertor030a.setTransform(1191.5,823.3,0.329,0.98,0,-10.4,0,0.5,0.3);
	this.cobertor030a.alpha = 0.039;

	this.objective031 = new lib.mc_objective032();
	this.objective031.name = "objective031";
	this.objective031.parent = this;
	this.objective031.setTransform(1024.6,383,0.285,0.805,0,0,0,0,0.1);

	this.objective033 = new lib.mc_objective032();
	this.objective033.name = "objective033";
	this.objective033.parent = this;
	this.objective033.setTransform(1018.5,409.5,0.564,1.573,0,0,0,0.5,0.2);

	this.pinza033 = new lib.mc_pinza035();
	this.pinza033.name = "pinza033";
	this.pinza033.parent = this;
	this.pinza033.setTransform(1365.1,878.6);

	this.manta033 = new lib.mc_manta034();
	this.manta033.name = "manta033";
	this.manta033.parent = this;
	this.manta033.setTransform(699.3,857.1);

	this.objective034 = new lib.mc_objective032();
	this.objective034.name = "objective034";
	this.objective034.parent = this;
	this.objective034.setTransform(1021.9,374.9,0.303,0.846,0,0,0,0.5,0.2);

	this.pinza034 = new lib.mc_pinza035();
	this.pinza034.name = "pinza034";
	this.pinza034.parent = this;
	this.pinza034.setTransform(875.5,848.1);

	this.manta035 = new lib.mc_manta036();
	this.manta035.name = "manta035";
	this.manta035.parent = this;
	this.manta035.setTransform(1150.2,493.1);

	this.objective035 = new lib.mc_objective036();
	this.objective035.name = "objective035";
	this.objective035.parent = this;
	this.objective035.setTransform(1331.5,456.8,1.578,1.752,0,0,0,0,0.1);

	this.aislador036 = new lib.mc_aislador037();
	this.aislador036.name = "aislador036";
	this.aislador036.parent = this;
	this.aislador036.setTransform(1108.1,414.8);

	this.objective036 = new lib.mc_objective037();
	this.objective036.name = "objective036";
	this.objective036.parent = this;
	this.objective036.setTransform(1106.9,416.4,1.456,1.311);
	this.objective036.alpha = 0.012;

	this.objective038 = new lib.mc_objective039();
	this.objective038.name = "objective038";
	this.objective038.parent = this;
	this.objective038.setTransform(1039.5,479,0.189,0.253,0,0,0,-126,360.8);

	this.cruceta038 = new lib.mc_cruceta();
	this.cruceta038.name = "cruceta038";
	this.cruceta038.parent = this;
	this.cruceta038.setTransform(1037.8,496.1);

	this.objective040 = new lib.mc_objective041();
	this.objective040.name = "objective040";
	this.objective040.parent = this;
	this.objective040.setTransform(1022.3,445.3);

	this.crucetaDoble040 = new lib.mc_crucetaDoble041();
	this.crucetaDoble040.name = "crucetaDoble040";
	this.crucetaDoble040.parent = this;
	this.crucetaDoble040.setTransform(922,948.6);

	this.objective042 = new lib.mc_objective043();
	this.objective042.name = "objective042";
	this.objective042.parent = this;
	this.objective042.setTransform(991.2,340.3);

	this.pistolas042 = new lib.mc_pistolas043();
	this.pistolas042.name = "pistolas042";
	this.pistolas042.parent = this;
	this.pistolas042.setTransform(1704.6,944.1);

	this.aislantePolimerico042 = new lib.mc_aislantePolimerico043();
	this.aislantePolimerico042.name = "aislantePolimerico042";
	this.aislantePolimerico042.parent = this;
	this.aislantePolimerico042.setTransform(1338.7,965.7);

	this.objective043 = new lib.mc_objective044();
	this.objective043.name = "objective043";
	this.objective043.parent = this;
	this.objective043.setTransform(985.5,349.1,0.942,0.72);

	this.pistolas043 = new lib.mc_pistolas044();
	this.pistolas043.name = "pistolas043";
	this.pistolas043.parent = this;
	this.pistolas043.setTransform(1477.5,951.1);

	this.cobertor045 = new lib.mc_cobertor046();
	this.cobertor045.name = "cobertor045";
	this.cobertor045.parent = this;
	this.cobertor045.setTransform(268.6,151.5,1.054,1);
	this.cobertor045.alpha = 0.039;

	this.objective046 = new lib.mc_objective047();
	this.objective046.name = "objective046";
	this.objective046.parent = this;
	this.objective046.setTransform(457.4,235.8);

	this.unia046 = new lib.mc_unia047();
	this.unia046.name = "unia046";
	this.unia046.parent = this;
	this.unia046.setTransform(1266.9,951.7);

	this.estribo048 = new lib.mc_estribo049();
	this.estribo048.name = "estribo048";
	this.estribo048.parent = this;
	this.estribo048.setTransform(1244.1,952.9);

	this.objective048 = new lib.mc_objective049();
	this.objective048.name = "objective048";
	this.objective048.parent = this;
	this.objective048.setTransform(1055.5,461.8);

	this.objective050 = new lib.objective1();
	this.objective050.name = "objective050";
	this.objective050.parent = this;
	this.objective050.setTransform(909.2,428.5,3.133,10.192,90,0,0,68.7,30.9);

	this.soporteTempCruceta050 = new lib.SoporteTempCruceta_71_1();
	this.soporteTempCruceta050.name = "soporteTempCruceta050";
	this.soporteTempCruceta050.parent = this;
	this.soporteTempCruceta050.setTransform(1587.6,952.7,1.302,1.562,0,0,0,109.3,71.2);

	this.puente050 = new lib.Puente_2();
	this.puente050.name = "puente050";
	this.puente050.parent = this;
	this.puente050.setTransform(902.1,986.7,1,1,0,0,0,199,62.5);

	this.puente051 = new lib.Puente_2();
	this.puente051.name = "puente051";
	this.puente051.parent = this;
	this.puente051.setTransform(1039.4,937.8,1,1,0,0,0,199,62.5);

	this.objective053 = new lib.objective1();
	this.objective053.name = "objective053";
	this.objective053.parent = this;
	this.objective053.setTransform(933.7,401.4,1.477,6.205,90,0,0,68.8,30.7);

	this.manta054 = new lib.manta_75();
	this.manta054.name = "manta054";
	this.manta054.parent = this;
	this.manta054.setTransform(1386.4,985,1,1,0,0,0,108.8,68.5);

	this.objective055 = new lib.objective1();
	this.objective055.name = "objective055";
	this.objective055.parent = this;
	this.objective055.setTransform(898.7,451.2,2.208,9.455,90,0,0,68.8,30.8);

	this.manta055 = new lib.manta_75();
	this.manta055.name = "manta055";
	this.manta055.parent = this;
	this.manta055.setTransform(1433.5,969.7,1,1,0,0,0,108.8,68.5);

	this.objective057 = new lib.objective1();
	this.objective057.name = "objective057";
	this.objective057.parent = this;
	this.objective057.setTransform(1027.3,525,2.163,5.588,90,0,0,68.9,30.8);

	this.objective058 = new lib.objective1();
	this.objective058.name = "objective058";
	this.objective058.parent = this;
	this.objective058.setTransform(1556.1,462.2,2.006,27.382,0,78.6,49.8,69.4,30.3);

	this.cobertor058 = new lib.Cobertor_79();
	this.cobertor058.name = "cobertor058";
	this.cobertor058.parent = this;
	this.cobertor058.setTransform(1699.1,443.6,1.389,1.419,0,0,0,683.2,383.8);

	this.objective060 = new lib.objective1();
	this.objective060.name = "objective060";
	this.objective060.parent = this;
	this.objective060.setTransform(676.5,748.4,3.028,35.078,90,0,0,68.8,30.7);

	this.cableMetalico060 = new lib.vara_metalica();
	this.cableMetalico060.name = "cableMetalico060";
	this.cableMetalico060.parent = this;
	this.cableMetalico060.setTransform(551.7,382.7,1.375,1.518,0,0,0,682.9,383.9);

	this.pertiga061 = new lib.pertiga();
	this.pertiga061.name = "pertiga061";
	this.pertiga061.parent = this;
	this.pertiga061.setTransform(1076.3,716.1,1.312,1.515,0,0,0,735.2,412.4);

	this.objective061 = new lib.objective1();
	this.objective061.name = "objective061";
	this.objective061.parent = this;
	this.objective061.setTransform(1044.2,654.1,8.004,12.455,90,0,0,68.8,30.6);

	this.objective063 = new lib.objective1();
	this.objective063.name = "objective063";
	this.objective063.parent = this;
	this.objective063.setTransform(1407.1,396.6,2.006,13.017,90,0,0,69,30.7);

	this.unia063 = new lib.unia_84();
	this.unia063.name = "unia063";
	this.unia063.parent = this;
	this.unia063.setTransform(1393.6,413.6,1.403,1.394,0,0,0,200.1,200.1);

	this.objective064 = new lib.objective1();
	this.objective064.name = "objective064";
	this.objective064.parent = this;
	this.objective064.setTransform(1649.4,716.4,2.987,5.837,90,0,0,68.8,30.7);

	this.mantaPinza064 = new lib.manta_pinza_final();
	this.mantaPinza064.name = "mantaPinza064";
	this.mantaPinza064.parent = this;
	this.mantaPinza064.setTransform(1457,987,1,1,0,0,0,96.9,76);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape,p:{scaleX:2.73,x:1690.4,y:567.7}},{t:this.text_4,p:{x:1467.7,y:30,text:"HERRAMIENTAS",font:"52px 'Times New Roman'",lineHeight:59.6,lineWidth:416}},{t:this.pinzaDer001},{t:this.text_3,p:{x:1602,y:295.6,text:"Extremo Camión",lineWidth:272}},{t:this.pinzaIzq001},{t:this.text_2,p:{x:1602,y:546.5,text:"Extremo Varilla",font:"37px 'Times New Roman'",lineHeight:42.95,lineWidth:272,scaleX:1}},{t:this.varilla001},{t:this.text_1,p:{x:1612.2,y:1005.1,text:"Varilla",font:"37px 'Times New Roman'",lineHeight:42.95,lineWidth:272,color:"#000000",scaleX:1}},{t:this.objective001}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance_1},{t:this.objective002},{t:this.shape,p:{scaleX:2.73,x:1690.4,y:567.7}},{t:this.pinzaDer002},{t:this.text_3,p:{x:1616.1,y:328.6,text:"Extremo Camión",lineWidth:272}},{t:this.pinzaIzq002},{t:this.text_2,p:{x:1616.1,y:614.4,text:"Extremo Varilla",font:"37px 'Times New Roman'",lineHeight:42.95,lineWidth:272,scaleX:1}},{t:this.text_1,p:{x:1487.1,y:28,text:"HERRAMIENTAS",font:"52px 'Times New Roman'",lineHeight:59.6,lineWidth:416,color:"#000000",scaleX:1}}]},1).to({state:[{t:this.instance_2},{t:this.objective003},{t:this.shape,p:{scaleX:2.73,x:1690.4,y:567.7}},{t:this.text_2,p:{x:1488.5,y:19.2,text:"HERRAMIENTAS",font:"52px 'Times New Roman'",lineHeight:59.6,lineWidth:416,scaleX:1}},{t:this.pinzaDer003},{t:this.text_1,p:{x:1577.2,y:569.9,text:"Extremo Camión",font:"37px 'Times New Roman'",lineHeight:42.95,lineWidth:272,color:"#000000",scaleX:1}}]},1).to({state:[{t:this.instance_3},{t:this.shape,p:{scaleX:2.73,x:1690.4,y:567.7}},{t:this.btnNext004}]},1).to({state:[{t:this.objective005},{t:this.instance_4},{t:this.shape,p:{scaleX:3.45,x:1638.8,y:522}},{t:this.arnes005},{t:this.text_5},{t:this.text_4,p:{x:1379.6,y:461.5,text:"Casco",font:"37px 'Times New Roman'",lineHeight:42.95,lineWidth:272}},{t:this.text_3,p:{x:1390.6,y:588.9,text:"Mangas",lineWidth:272}},{t:this.guantes005},{t:this.text_2,p:{x:1543.3,y:865,text:"Guantes",font:"37px 'Times New Roman'",lineHeight:42.95,lineWidth:272,scaleX:1}},{t:this.mangas005},{t:this.casco005},{t:this.text_1,p:{x:1450.3,y:40,text:"HERRAMIENTAS",font:"52px 'Times New Roman'",lineHeight:59.6,lineWidth:416,color:"#000000",scaleX:1}}]},1).to({state:[{t:this.text_4,p:{x:1546.5,y:895.1,text:"Guantes",font:"37px 'Times New Roman'",lineHeight:42.95,lineWidth:272}},{t:this.text_3,p:{x:1548.9,y:573.6,text:"Mangas",lineWidth:272}},{t:this.instance_5},{t:this.objective006},{t:this.casco006},{t:this.text_2,p:{x:1518.6,y:245.3,text:"Casco",font:"37px 'Times New Roman'",lineHeight:42.95,lineWidth:272,scaleX:1}},{t:this.guantes006},{t:this.mangas006},{t:this.text_1,p:{x:1419.6,y:30,text:"HERRAMIENTAS",font:"52px 'Times New Roman'",lineHeight:59.6,lineWidth:416,color:"#000000",scaleX:1}}]},1).to({state:[{t:this.text_3,p:{x:1541,y:754.6,text:"Guantes",lineWidth:272}},{t:this.text_2,p:{x:1523.5,y:337,text:"Casco",font:"37px 'Times New Roman'",lineHeight:42.95,lineWidth:272,scaleX:1}},{t:this.instance_6},{t:this.objective007},{t:this.casco007},{t:this.guantes007},{t:this.text_1,p:{x:1396.5,y:30,text:"HERRAMIENTAS",font:"52px 'Times New Roman'",lineHeight:59.6,lineWidth:416,color:"#000000",scaleX:1}}]},1).to({state:[{t:this.text_2,p:{x:1518.6,y:378.4,text:"Casco",font:"37px 'Times New Roman'",lineHeight:42.95,lineWidth:272,scaleX:1}},{t:this.instance_7},{t:this.objective008},{t:this.casco008},{t:this.text_1,p:{x:1401.2,y:30,text:"HERRAMIENTAS",font:"52px 'Times New Roman'",lineHeight:59.6,lineWidth:416,color:"#000000",scaleX:1}}]},1).to({state:[{t:this.instance_8},{t:this.btnNext009}]},1).to({state:[{t:this.cobertor010},{t:this.objective010},{t:this.text_1,p:{x:1564.2,y:426.1,text:"Cobertor",font:"37px 'Times New Roman'",lineHeight:42.95,lineWidth:272,color:"#000000",scaleX:1}}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.objective012},{t:this.pinza012},{t:this.text_2,p:{x:1592.8,y:638.4,text:"Pinza",font:"37px 'Times New Roman'",lineHeight:42.95,lineWidth:272,scaleX:1}},{t:this.text_1,p:{x:1592.8,y:322.3,text:"Manta",font:"37px 'Times New Roman'",lineHeight:42.95,lineWidth:272,color:"#000000",scaleX:1}},{t:this.manta012}]},1).to({state:[{t:this.objective013},{t:this.pinza013},{t:this.text_1,p:{x:1585.7,y:423.3,text:"Pinza",font:"37px 'Times New Roman'",lineHeight:42.95,lineWidth:272,color:"#000000",scaleX:1}}]},1).to({state:[{t:this.objective03}]},1).to({state:[{t:this.text_3,p:{x:1597.3,y:985.6,text:"Cobertor",lineWidth:143}},{t:this.cobertor015},{t:this.objective015},{t:this.text_2,p:{x:469.2,y:1019.6,text:"Manta",font:"37px 'Times New Roman'",lineHeight:42.95,lineWidth:143,scaleX:1}},{t:this.text_1,p:{x:135.1,y:994.1,text:"Pinza",font:"37px 'Times New Roman'",lineHeight:42.95,lineWidth:143,color:"#000000",scaleX:1}},{t:this.soporte015},{t:this.manta015},{t:this.pinza015}]},1).to({state:[{t:this.text_3,p:{x:1589.6,y:983.6,text:"Cobertor",lineWidth:143}},{t:this.cobertor016},{t:this.text_2,p:{x:462.4,y:1019.3,text:"Manta",font:"37px 'Times New Roman'",lineHeight:42.95,lineWidth:143,scaleX:1}},{t:this.text_1,p:{x:127.3,y:994.1,text:"Pinza",font:"37px 'Times New Roman'",lineHeight:42.95,lineWidth:143,color:"#000000",scaleX:1}},{t:this.soporte016},{t:this.manta016},{t:this.pinza016},{t:this.objective016}]},1).to({state:[{t:this.text_3,p:{x:1589.6,y:983.6,text:"Cobertor",lineWidth:143}},{t:this.cobertor017},{t:this.text_2,p:{x:462.4,y:1019.3,text:"Manta",font:"37px 'Times New Roman'",lineHeight:42.95,lineWidth:143,scaleX:1}},{t:this.text_1,p:{x:127.3,y:994.1,text:"Pinza",font:"37px 'Times New Roman'",lineHeight:42.95,lineWidth:143,color:"#000000",scaleX:1}},{t:this.soporte017},{t:this.manta017},{t:this.objective017},{t:this.pinza017}]},1).to({state:[{t:this.text_2,p:{x:462.4,y:1019.3,text:"Manta",font:"37px 'Times New Roman'",lineHeight:42.95,lineWidth:143,scaleX:1}},{t:this.text_1,p:{x:127.3,y:994.1,text:"Pinza",font:"37px 'Times New Roman'",lineHeight:42.95,lineWidth:143,color:"#000000",scaleX:1}},{t:this.soporte018},{t:this.manta018},{t:this.objective018},{t:this.pinza018}]},1).to({state:[{t:this.text_2,p:{x:462.4,y:1019.3,text:"Manta",font:"37px 'Times New Roman'",lineHeight:42.95,lineWidth:143,scaleX:1}},{t:this.text_1,p:{x:127.3,y:994.1,text:"Pinza",font:"37px 'Times New Roman'",lineHeight:42.95,lineWidth:143,color:"#000000",scaleX:1}},{t:this.manta019},{t:this.objective3},{t:this.pinza019},{t:this.objective019}]},1).to({state:[{t:this.text_1,p:{x:127.3,y:994.1,text:"Pinza",font:"37px 'Times New Roman'",lineHeight:42.95,lineWidth:143,color:"#000000",scaleX:1}},{t:this.objective3},{t:this.pinza020},{t:this.objective020}]},1).to({state:[]},1).to({state:[{t:this.objective022},{t:this.soportePoste022},{t:this.text_1,p:{x:876.4,y:863.3,text:"Soporte Temporal de Poste",font:"37px 'Times New Roman'",lineHeight:42.95,lineWidth:421,color:"#000000",scaleX:1}}]},1).to({state:[{t:this.soportePoste023},{t:this.objective023},{t:this.text_1,p:{x:871.3,y:879.5,text:"Soporte Temporal de Poste",font:"37px 'Times New Roman'",lineHeight:42.95,lineWidth:421,color:"#000000",scaleX:1}}]},1).to({state:[]},1).to({state:[{t:this.cobertor025},{t:this.text_1,p:{x:607.5,y:849.9,text:"ARRASTRE LA PIEZA QUE SE DEBE RETIRAR",font:"37px 'Times New Roman'",lineHeight:42.95,lineWidth:826,color:"#FFFFFF",scaleX:1}}]},1).to({state:[{t:this.cobertor026a},{t:this.cobertor026b},{t:this.text_1,p:{x:696.4,y:851,text:"SELECCIONE LA PIEZA QUE SE DEBE RETIRAR",font:"37px 'Times New Roman'",lineHeight:42.95,lineWidth:826,color:"#FFFFFF",scaleX:1}}]},1).to({state:[{t:this.manta027},{t:this.objective027},{t:this.text_1,p:{x:530.5,y:841.9,text:"Manta y pinza",font:"37px 'Times New Roman'",lineHeight:42.95,lineWidth:229,color:"#000000",scaleX:0.803}}]},1).to({state:[]},1).to({state:[{t:this.amarre029},{t:this.objective029}]},1).to({state:[{t:this.cobertor030a},{t:this.cobertor030b}]},1).to({state:[{t:this.objective031}]},1).to({state:[]},1).to({state:[{t:this.manta033},{t:this.pinza033},{t:this.objective033}]},1).to({state:[{t:this.pinza034},{t:this.objective034}]},1).to({state:[{t:this.objective035},{t:this.manta035}]},1).to({state:[{t:this.objective036},{t:this.aislador036}]},1).to({state:[]},1).to({state:[{t:this.cruceta038},{t:this.objective038}]},1).to({state:[]},1).to({state:[{t:this.crucetaDoble040},{t:this.objective040}]},1).to({state:[]},1).to({state:[{t:this.aislantePolimerico042},{t:this.pistolas042},{t:this.objective042},{t:this.text_2,p:{x:1452.1,y:867.7,text:"Pistolas",font:"37px 'Times New Roman'",lineHeight:42.95,lineWidth:144,scaleX:1}},{t:this.text_1,p:{x:964.7,y:851,text:"Aislante Polimerico",font:"37px 'Times New Roman'",lineHeight:42.95,lineWidth:318,color:"#000000",scaleX:1}}]},1).to({state:[{t:this.pistolas043},{t:this.objective043},{t:this.text_1,p:{x:1212.6,y:858,text:"Pistolas",font:"37px 'Times New Roman'",lineHeight:42.95,lineWidth:136,color:"#000000",scaleX:1}}]},1).to({state:[]},1).to({state:[{t:this.cobertor045}]},1).to({state:[{t:this.unia046},{t:this.objective046}]},1).to({state:[]},1).to({state:[{t:this.objective048},{t:this.estribo048}]},1).to({state:[]},1).to({state:[{t:this.text_2,p:{x:517.2,y:828.8,text:"PUENTE",font:"40px 'Times New Roman'",lineHeight:46.3,lineWidth:229,scaleX:0.986}},{t:this.puente050},{t:this.soporteTempCruceta050},{t:this.text_1,p:{x:1115.2,y:828.8,text:"SOPORTE TEMP. CRUCETA",font:"40px 'Times New Roman'",lineHeight:46.3,lineWidth:307,color:"#000000",scaleX:0.986}},{t:this.objective050}]},1).to({state:[{t:this.text_1,p:{x:653.9,y:932.4,text:"PUENTE",font:"40px 'Times New Roman'",lineHeight:46.3,lineWidth:229,color:"#000000",scaleX:0.986}},{t:this.puente051}]},1).to({state:[]},1).to({state:[{t:this.objective053}]},1).to({state:[{t:this.manta054},{t:this.text_1,p:{x:1033.7,y:946.4,text:"MANTA",font:"45px 'Times New Roman'",lineHeight:51.85,lineWidth:200,color:"#000000",scaleX:0.982}}]},1).to({state:[{t:this.text_1,p:{x:1078.8,y:940.9,text:"MANTA",font:"45px 'Times New Roman'",lineHeight:51.85,lineWidth:200,color:"#000000",scaleX:0.982}},{t:this.manta055},{t:this.objective055}]},1).to({state:[]},1).to({state:[{t:this.objective057}]},1).to({state:[{t:this.cobertor058},{t:this.objective058}]},1).to({state:[]},1).to({state:[{t:this.cableMetalico060},{t:this.objective060}]},1).to({state:[{t:this.objective061},{t:this.pertiga061}]},1).to({state:[]},1).to({state:[{t:this.unia063},{t:this.objective063}]},1).to({state:[{t:this.text_1,p:{x:938.3,y:935.8,text:"MANTA CON PINZA",font:"45px 'Times New Roman'",lineHeight:51.85,lineWidth:288,color:"#000000",scaleX:0.982}},{t:this.mantaPinza064},{t:this.objective064}]},1).to({state:[]},1).wait(1));

	// ObjetosSecundarios
	this.text_6 = new cjs.Text("HERRAMIENTAS", "52px 'Times New Roman'");
	this.text_6.lineHeight = 60;
	this.text_6.lineWidth = 416;
	this.text_6.alpha = 0.80784314;
	this.text_6.parent = this;
	this.text_6.setTransform(1509.5,41.9,0.982,1);
	this.text_6._off = true;

	this.btnNextJ1 = new lib.btnNext();
	this.btnNextJ1.name = "btnNextJ1";
	this.btnNextJ1.parent = this;
	this.btnNextJ1.setTransform(1712.4,918.8,2.218,1.693,0,0,0,93.9,93.8);
	this.btnNextJ1.visible = false;

	this.btnNext011 = new lib.btnNext();
	this.btnNext011.name = "btnNext011";
	this.btnNext011.parent = this;
	this.btnNext011.setTransform(1712.9,922.2,2.218,1.693,0,0,0,93.9,93.8);

	this.btnNext014 = new lib.btnNext();
	this.btnNext014.name = "btnNext014";
	this.btnNext014.parent = this;
	this.btnNext014.setTransform(1715,921.9,2.2,1.693,0,0,0,94,93.9);

	this.btnNext021 = new lib.btnNext();
	this.btnNext021.name = "btnNext021";
	this.btnNext021.parent = this;
	this.btnNext021.setTransform(1766.6,953.6,1.641,1.35,0,0,0,94,93.9);

	this.btnNext024 = new lib.btnNext();
	this.btnNext024.name = "btnNext024";
	this.btnNext024.parent = this;
	this.btnNext024.setTransform(1757.5,953.7,1.738,1.35,0,0,0,94,93.9);

	this.objective025 = new lib.mc_objective025();
	this.objective025.name = "objective025";
	this.objective025.parent = this;
	this.objective025.setTransform(1116.9,377.7);
	this.objective025.alpha = 0.039;

	this.btnNext028 = new lib.btnNext();
	this.btnNext028.name = "btnNext028";
	this.btnNext028.parent = this;
	this.btnNext028.setTransform(1757.5,953.6,1.738,1.35,0,0,0,94,93.9);

	this.btnNext032 = new lib.btnNext();
	this.btnNext032.name = "btnNext032";
	this.btnNext032.parent = this;
	this.btnNext032.setTransform(1757.4,953.6,1.738,1.35,0,0,0,94,93.9);

	this.text_7 = new cjs.Text("Manta", "37px 'Times New Roman'");
	this.text_7.lineHeight = 43;
	this.text_7.lineWidth = 119;
	this.text_7.alpha = 0.80784314;
	this.text_7.parent = this;
	this.text_7.setTransform(553,846.4);

	this.btnNext037 = new lib.btnNext();
	this.btnNext037.name = "btnNext037";
	this.btnNext037.parent = this;
	this.btnNext037.setTransform(1757.5,953.6,1.738,1.35,0,0,0,94,93.9);

	this.btnNext039 = new lib.btnNext();
	this.btnNext039.name = "btnNext039";
	this.btnNext039.parent = this;
	this.btnNext039.setTransform(1757.5,953.6,1.738,1.35,0,0,0,94,93.9);

	this.btnNext041 = new lib.btnNext();
	this.btnNext041.name = "btnNext041";
	this.btnNext041.parent = this;
	this.btnNext041.setTransform(1756.8,953.6,1.738,1.35,0,0,0,94,93.9);

	this.btnNext044 = new lib.btnNext();
	this.btnNext044.name = "btnNext044";
	this.btnNext044.parent = this;
	this.btnNext044.setTransform(1757.5,953.6,1.738,1.35,0,0,0,94,93.9);

	this.btnNext047 = new lib.btnNext();
	this.btnNext047.name = "btnNext047";
	this.btnNext047.parent = this;
	this.btnNext047.setTransform(1757.5,953.6,1.738,1.35,0,0,0,94,93.9);

	this.btnNext049 = new lib.btnNext();
	this.btnNext049.name = "btnNext049";
	this.btnNext049.parent = this;
	this.btnNext049.setTransform(1756.8,953.6,1.738,1.35,0,0,0,94,93.9);

	this.btnNext052 = new lib.btnNext();
	this.btnNext052.name = "btnNext052";
	this.btnNext052.parent = this;
	this.btnNext052.setTransform(1779.1,964.8,1,1,0,0,0,84,84);

	this.btnNext056 = new lib.btnNext();
	this.btnNext056.name = "btnNext056";
	this.btnNext056.parent = this;
	this.btnNext056.setTransform(1752.2,950.1,1,1,0,0,0,84,84);

	this.btnNext059 = new lib.btnNext();
	this.btnNext059.name = "btnNext059";
	this.btnNext059.parent = this;
	this.btnNext059.setTransform(1797.6,958.1,1,1,0,0,0,84,84);

	this.btnNext062 = new lib.btnNext();
	this.btnNext062.name = "btnNext062";
	this.btnNext062.parent = this;
	this.btnNext062.setTransform(1816.5,976.5,1,1,0,0,0,84,84);

	this.btnNext065 = new lib.btnNext();
	this.btnNext065.name = "btnNext065";
	this.btnNext065.parent = this;
	this.btnNext065.setTransform(1543.5,686.1,1,1,0,0,0,84,84);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btnNextJ1},{t:this.text_6}]},9).to({state:[{t:this.btnNext011},{t:this.text_6}]},1).to({state:[{t:this.text_6}]},1).to({state:[{t:this.text_6}]},1).to({state:[{t:this.btnNext014}]},1).to({state:[]},1).to({state:[{t:this.btnNext021}]},6).to({state:[]},1).to({state:[{t:this.btnNext024}]},2).to({state:[{t:this.objective025}]},1).to({state:[]},1).to({state:[{t:this.btnNext028}]},2).to({state:[{t:this.text_6}]},1).to({state:[{t:this.text_6}]},1).to({state:[{t:this.text_6}]},1).to({state:[{t:this.btnNext032}]},1).to({state:[{t:this.text_7,p:{x:553,y:846.4,text:"Manta",lineWidth:119}},{t:this.text_6}]},1).to({state:[{t:this.text_6}]},1).to({state:[{t:this.text_6}]},1).to({state:[{t:this.text_6}]},1).to({state:[{t:this.btnNext037}]},1).to({state:[{t:this.text_6}]},1).to({state:[{t:this.btnNext039}]},1).to({state:[{t:this.text_6}]},1).to({state:[{t:this.btnNext041}]},1).to({state:[]},1).to({state:[{t:this.btnNext044}]},2).to({state:[]},1).to({state:[{t:this.text_7,p:{x:979,y:863.8,text:"Uña",lineWidth:80}},{t:this.text_6}]},1).to({state:[{t:this.btnNext047}]},1).to({state:[{t:this.text_7,p:{x:905.9,y:853,text:"Tecle de Faja",lineWidth:220}},{t:this.text_6}]},1).to({state:[{t:this.btnNext049}]},1).to({state:[]},1).to({state:[{t:this.btnNext052}]},2).to({state:[]},1).to({state:[{t:this.text_6}]},1).to({state:[{t:this.text_6}]},1).to({state:[{t:this.btnNext056}]},1).to({state:[]},1).to({state:[{t:this.btnNext059}]},2).to({state:[]},1).to({state:[{t:this.btnNext062}]},2).to({state:[]},1).to({state:[{t:this.btnNext065}]},2).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.text_6).wait(9).to({_off:false},0).wait(1).to({x:1510.1,y:41.7},0).wait(1).to({x:1509.6,y:39.7},0).wait(1).to({y:45.5},0).to({_off:true},1).wait(15).to({_off:false,scaleX:1,x:656.9,y:854.5,text:"ARRASTRE LA PIEZA QUE SE DEBE RETIRAR",font:"37px 'Times New Roman'",color:"#FFFFFF",lineHeight:43,lineWidth:826},0).wait(1).to({x:657.4,y:851.6,text:"SELECCIONE LA PIEZA QUE SE DEBE MOVERSE",lineWidth:864},0).wait(1).to({x:566.1,text:"ARRASTRE LA LINEA A SU POSICION CORRECTA"},0).to({_off:true},1).wait(1).to({_off:false,x:1253.8,y:846.4,text:"Pinza",color:"#000000",lineWidth:106},0).wait(1).to({x:726.6,y:856},0).wait(1).to({x:639.1,y:846.2,text:"ARRASTRE LA PIEZA QUE SE DEBE RETIRAR",color:"#FFFFFF",lineWidth:826},0).wait(1).to({x:661.5,y:855.1},0).to({_off:true},1).wait(1).to({_off:false,x:609.1,y:834.1},0).to({_off:true},1).wait(1).to({_off:false,x:525.1,y:865,text:"Cruceta Doble",color:"#000000",lineWidth:119},0).to({_off:true},1).wait(5).to({_off:false,x:56,y:903.4,text:"HERRAMIENTAS",font:"52px 'Times New Roman'",lineHeight:59.6,lineWidth:416},0).to({_off:true},1).wait(1).to({_off:false,x:60.9,y:922.1},0).to({_off:true},1).wait(5).to({_off:false,x:42.4,y:931.1},0).wait(1).to({x:49.8},0).to({_off:true},1).wait(10));

	// FondoTablaHerramientas
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(102,102,102,0.808)").s().p("EgNIBUEMAAAioHIaRAAMAAACoHg");
	this.shape_3.setTransform(1588.9,541.8,3.938,1.007);
	this.shape_3._off = true;

	this.text_8 = new cjs.Text("HERRAMIENTAS", "52px 'Times New Roman'");
	this.text_8.lineHeight = 60;
	this.text_8.lineWidth = 416;
	this.text_8.alpha = 0.80784314;
	this.text_8.parent = this;
	this.text_8.setTransform(876.4,829.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3}]},5).to({state:[{t:this.shape_3}]},4).to({state:[{t:this.shape_3},{t:this.text_8,p:{x:876.4,y:829.6}}]},5).to({state:[{t:this.shape_3}]},6).to({state:[{t:this.shape_3},{t:this.text_8,p:{x:35,y:911.6}}]},1).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3},{t:this.text_8,p:{x:43.8,y:929.8}}]},2).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},3).to({state:[{t:this.shape_3},{t:this.text_8,p:{x:33.9,y:923}}]},1).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3},{t:this.text_8,p:{x:43.7,y:928}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3},{t:this.text_8,p:{x:46.3,y:920.1}}]},1).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3},{t:this.text_8,p:{x:31.6,y:913.8}}]},1).to({state:[{t:this.shape_3}]},2).to({state:[]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},2).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.text_8,p:{x:32.5,y:935.8}}]},7).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(5).to({_off:false},0).wait(4).to({scaleX:2.46,x:1710.2,y:537},0).wait(5).to({scaleX:11.41,scaleY:0.24,x:960.4,y:954.2},0).wait(6).to({y:953.3},0).wait(1).to({y:953.4},0).wait(2).to({x:959.7},0).wait(3).to({x:960.4},0).wait(1).to({x:959.7},0).wait(1).to({x:960.4},0).wait(3).to({x:959.7},0).wait(10).to({x:960.4},0).wait(2).to({x:959.7},0).wait(1).to({x:960.4},0).wait(2).to({x:959.7},0).wait(3).to({x:960.4},0).wait(2).to({_off:true},1).wait(1).to({_off:false,x:959.7},0).wait(2).to({x:960.4},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(1));

	// Fondo
	this.instance_10 = new lib.abstract_tutorials_6();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,0,3.639,2.738);
	this.instance_10._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("Egf6BUcIAAgUIgnAAMAAAiojMBAcAAAIAAAUIAnAAMAAACojg");
	this.shape_4.setTransform(1712.3,540.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("EggNBUSMAAAiojMBAbAAAMAAACojg");
	this.shape_5.setTransform(1710.4,539.4);

	this.instance_11 = new lib.FondoPaso1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(0,-1);

	this.instance_12 = new lib.FondoPaso2();
	this.instance_12.parent = this;

	this.instance_13 = new lib.FondoPaso3();
	this.instance_13.parent = this;

	this.instance_14 = new lib.FondoPaso4();
	this.instance_14.parent = this;

	this.instance_15 = new lib.FondoPaso5();
	this.instance_15.parent = this;
	this.instance_15.setTransform(0,-1);

	this.instance_16 = new lib.FondoPaso6();
	this.instance_16.parent = this;

	this.instance_17 = new lib.PasoFInal();
	this.instance_17.parent = this;

	this.instance_18 = new lib.Screenshot165();
	this.instance_18.parent = this;

	this.instance_19 = new lib.Screenshot166();
	this.instance_19.parent = this;

	this.instance_20 = new lib.Screenshot167();
	this.instance_20.parent = this;

	this.fondo025 = new lib.mc_fondo025();
	this.fondo025.name = "fondo025";
	this.fondo025.parent = this;
	this.fondo025.setTransform(960,540);

	this.text_9 = new cjs.Text("SELECCIONE LA PIEZA QUE SE DEBE RETIRAR", "37px 'Times New Roman'", "#FFFFFF");
	this.text_9.lineHeight = 43;
	this.text_9.lineWidth = 826;
	this.text_9.alpha = 0.80784314;
	this.text_9.parent = this;
	this.text_9.setTransform(525.4,849.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(102,102,102,0.808)").s().p("EgNIBUEMAAAioHIaRAAMAAACoHg");
	this.shape_6.setTransform(959.9,953.4,11.418,0.235);

	this.fondo026 = new lib.mc_fondo026();
	this.fondo026.name = "fondo026";
	this.fondo026.parent = this;
	this.fondo026.setTransform(960,540);

	this.instance_21 = new lib.Screenshot185();
	this.instance_21.parent = this;

	this.instance_22 = new lib.Screenshot186();
	this.instance_22.parent = this;

	this.fondo029 = new lib.mc_fondo030();
	this.fondo029.name = "fondo029";
	this.fondo029.parent = this;
	this.fondo029.setTransform(960,540);

	this.fondo030 = new lib.mc_fondo031();
	this.fondo030.name = "fondo030";
	this.fondo030.parent = this;
	this.fondo030.setTransform(960,540);

	this.linea031 = new lib.mc_linea032();
	this.linea031.name = "linea031";
	this.linea031.parent = this;
	this.linea031.setTransform(1147,539.5);

	this.instance_23 = new lib.photo_20180524_101533();
	this.instance_23.parent = this;
	this.instance_23.setTransform(0,0,1.5,1.502);

	this.instance_24 = new lib.Screenshot190();
	this.instance_24.parent = this;

	this.instance_25 = new lib.Screenshot193();
	this.instance_25.parent = this;

	this.fondo035 = new lib.mc_fondo036();
	this.fondo035.name = "fondo035";
	this.fondo035.parent = this;
	this.fondo035.setTransform(960,540);

	this.fondo036 = new lib.mc_fondo037();
	this.fondo036.name = "fondo036";
	this.fondo036.parent = this;
	this.fondo036.setTransform(960,540);

	this.instance_26 = new lib.Screenshot196();
	this.instance_26.parent = this;

	this.instance_27 = new lib.Screenshot205();
	this.instance_27.parent = this;

	this.instance_28 = new lib.Screenshot205pngcopy();
	this.instance_28.parent = this;

	this.instance_29 = new lib.Screenshot216();
	this.instance_29.parent = this;

	this.instance_30 = new lib.Screenshot218();
	this.instance_30.parent = this;
	this.instance_30.setTransform(1,0);

	this.instance_31 = new lib.Screenshot219();
	this.instance_31.parent = this;

	this.instance_32 = new lib.Screenshot221();
	this.instance_32.parent = this;

	this.fondo045 = new lib.mc_fondo046();
	this.fondo045.name = "fondo045";
	this.fondo045.parent = this;
	this.fondo045.setTransform(960,540);

	this.instance_33 = new lib.Screenshot224();
	this.instance_33.parent = this;

	this.instance_34 = new lib.Screenshot225();
	this.instance_34.parent = this;

	this.instance_35 = new lib.Screenshot226();
	this.instance_35.parent = this;

	this.instance_36 = new lib._15_01();
	this.instance_36.parent = this;
	this.instance_36.setTransform(-2,0,1.407,1.406);

	this.objective051 = new lib.objective1();
	this.objective051.name = "objective051";
	this.objective051.parent = this;
	this.objective051.setTransform(1008.7,420.9,2.706,58.148,90,0,0,68.7,30.3);

	this.instance_37 = new lib._15_02();
	this.instance_37.parent = this;
	this.instance_37.setTransform(0,0,1.406,1.406);

	this.instance_38 = new lib._16_01();
	this.instance_38.parent = this;
	this.instance_38.setTransform(0,0,1.406,1.406);

	this.objective054 = new lib.objective1();
	this.objective054.name = "objective054";
	this.objective054.parent = this;
	this.objective054.setTransform(924.1,386.5,2.372,8.412,90,0,0,68.9,30.6);

	this.instance_39 = new lib._16_02();
	this.instance_39.parent = this;
	this.instance_39.setTransform(0,0,1.406,1.406);

	this.instance_40 = new lib._16_03();
	this.instance_40.parent = this;
	this.instance_40.setTransform(0,0,1.406,1.406);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(102,102,102,0.808)").s().p("EhqZANbIAA61MDUzAAAIAAa1g");
	this.shape_7.setTransform(1027.9,883.7);

	this.instance_41 = new lib._16_04();
	this.instance_41.parent = this;
	this.instance_41.setTransform(0,-4,1.406,1.411);

	this.fondo057 = new lib.mc_fondo057();
	this.fondo057.name = "fondo057";
	this.fondo057.parent = this;
	this.fondo057.setTransform(960,540);

	this.fondo058 = new lib.mc_fondo58();
	this.fondo058.name = "fondo058";
	this.fondo058.parent = this;
	this.fondo058.setTransform(960,540);

	this.instance_42 = new lib._17_03();
	this.instance_42.parent = this;
	this.instance_42.setTransform(0,0,1.406,1.406);

	this.instance_43 = new lib._18_01();
	this.instance_43.parent = this;
	this.instance_43.setTransform(0,0,1.406,1.406);

	this.fondo061 = new lib.mc_fondo061();
	this.fondo061.name = "fondo061";
	this.fondo061.parent = this;
	this.fondo061.setTransform(960,540);

	this.instance_44 = new lib._19_01();
	this.instance_44.parent = this;
	this.instance_44.setTransform(0,0,1.406,1.406);

	this.fondo063 = new lib.mc_fondo063();
	this.fondo063.name = "fondo063";
	this.fondo063.parent = this;
	this.fondo063.setTransform(960,540);

	this.instance_45 = new lib._19_02();
	this.instance_45.parent = this;
	this.instance_45.setTransform(0,0,1.406,1.406);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1,1,1).p("AAAA8IAAh3");
	this.shape_8.setTransform(684.6,788.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(102,102,102,0.808)").s().p("EhqZAQ5MAAAghxMDUzAAAMAAAAhxg");
	this.shape_9.setTransform(1019.7,290.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.808)").s().p("EhBVAK5IAA1xIF8AAMB8vAAAIAAVxg");
	this.shape_10.setTransform(1064.8,864.1);

	this.instance_46 = new lib._19_03();
	this.instance_46.parent = this;
	this.instance_46.setTransform(0,0,1.406,1.406);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},4).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.shape_4},{t:this.instance_10}]},1).to({state:[{t:this.shape_5},{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.shape_6,p:{x:959.9}},{t:this.text_9,p:{x:525.4,y:849.9,text:"SELECCIONE LA PIEZA QUE SE DEBE RETIRAR"}},{t:this.fondo025}]},1).to({state:[{t:this.fondo026}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.shape_6,p:{x:960}},{t:this.text_9,p:{x:593.2,y:854.5,text:"ARRASTRE LA PIEZA QUE SE DEBE RETIRAR"}},{t:this.fondo029}]},1).to({state:[{t:this.fondo030}]},1).to({state:[{t:this.instance_23},{t:this.linea031}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.fondo035}]},1).to({state:[{t:this.fondo036}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.fondo045}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37},{t:this.objective051}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39},{t:this.objective054}]},1).to({state:[{t:this.shape_7},{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.fondo057}]},1).to({state:[{t:this.fondo058}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.fondo061}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.fondo063}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(4).to({_off:false},0).wait(2).to({x:-9,y:-10},0).wait(3).to({scaleX:3.62,scaleY:2.71,x:4,y:0},0).wait(1).to({x:1,y:2},0).wait(1).to({scaleX:3.62,scaleY:2.72,x:0,y:0},0).wait(1).to({y:-1},0).wait(1).to({_off:true},1).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960,540,1920,1135.5);
// library properties:
lib.properties = {
	id: 'CBF65291F1453B498591E6CEEB144335',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/VestimentaAvatar_atlas_T.png?1527527728582", id:"VestimentaAvatar_atlas_"},
		{src:"images/VestimentaAvatar_atlas_2_T.png?1527527728584", id:"VestimentaAvatar_atlas_2"}
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