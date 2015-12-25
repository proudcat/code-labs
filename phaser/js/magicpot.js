var targetWidth = 800;
var targetHeight = 600;

//device aspcet ratio   暂时没啥卵用
var deviceRatio = (window.innerWidth / window.innerHeight);
var newRatio = (targetHeight / targetWidth) * deviceRatio;
var gameWidth = newRatio * targetWidth;
var gameHeight = targetHeight;

// var game = new Phaser.Game("100%","100%", Phaser.AUTO, '', {
var game = new Phaser.Game(1136, 768, Phaser.AUTO, '', {
	init: init,
	preload: preload,
	create: create,
	update: update,
	resize: resize,
});


//页面左边那个bitch（各种动画那个小人）
var bitch = function () {

	//动画
	var anim_frames = {
		rope: "",
		yeah: "",
		drop: "",
		yangkun: "",
		bitch: "",
		dance: "",
		idle: "",
		balance: "",
		lookback: ""
	};

	//精灵
	var sprite;

	//从视频导出来的动画 位置有偏差 没有游戏美工 这里用程序修正偏差 哔了狗了。
	var pos = {
		drop: [105, 725],
		normal: [120, 740],
		balance: [141, 740],
		rope: [119, 740],
	};

	//动画播放顺序
	var anim_loop = ["idle", "balance", "idle", "dance", "idle", "yeah", "idle", "yangkun", "idle", "bitch", "idle",
		"lookback"];

	//anim_loop 中当前播放的索引
	var anim_index = 0;

	//判断当前是否有动画正在播放，其实有更好的方式，但是我就特么这么写。
	var playing = false;

	//动画状态机 播放到哪个动画了。
	var state = -1;

	var update = function () {
		if (state === 1) { //bitch进入动画
			play('drop', function (sprite, animation) {
				state = 2;
			});
			sprite.visible = true;
		} else if (state === 2) { //播放 anim_loop

			if (anim_index > anim_loop.length - 1) {
				anim_index = 0;
			}

			play(anim_loop[anim_index], function (sprite, animation) {
				anim_index++;
			});
		} else if (state === 3) { //craw rope

		}
	};

	//播放精灵动画 顺便修正位置和缩放 哔了狗了+1
	var play = function (name, done) {
		if (playing) {
			return;
		}

		sprite.scale.setTo(0.755, 0.755);
		sprite.anchor.setTo(0.5, 1);
		sprite.x = pos.normal[0];
		sprite.y = pos.normal[1];
		playing = true;
		console.log('playing ', name);
		switch (name) {
		case "rope":
			sprite.x = pos.rope[0];
			sprite.y = pos.rope[1];
			sprite.scale.setTo(0.645, 0.645);
			sprite.loadTexture('rope-yeah');
			break;
		case "yeah":
			sprite.loadTexture('rope-yeah');
			break;
		case "bitch":
		case "dance":
		case "idle":
		case "lookback":
		case "yangkun":
			sprite.loadTexture('all');
			break;
		case "balance":
			sprite.x = pos.balance[0];
			sprite.y = pos.balance[1];
			sprite.loadTexture('all');
			break;
		case "drop":
			sprite.scale.setTo(1, 1);
			sprite.loadTexture('drop');
			sprite.x = pos.drop[0];
			sprite.y = pos.drop[1];
			break;
		}

		var anim = sprite.animations.getAnimation(anim_frames[name]);
		if (anim == null || anim == undefined) {
			anim = sprite.animations.add(name, anim_frames[name], 10, true, false);
		}

		if (anim !== undefined && anim !== null) {
			anim.play(10, false, false);
			// sprite.animations.play('yeah');
			if (typeof (done) === 'function') {
				anim.onComplete.add(function (sprite, anim) {
					playing = false;
					done(sprite, anim);
				}, this);
			}
		} else {
			console.log('can not play', name);
		}
	};


	//bitch这个闭包的api
	return {
		//初始化bitch精灵和动画帧
		init: function () {

			sprite = game.add.sprite(pos.normal[0], pos.normal[1]);
			sprite.anchor.setTo(0.5, 1);
			sprite.visible = false;

			anim_frames.rope = Phaser.Animation.generateFrameNames('rope', 1, 31, '', 2);
			anim_frames.yeah = Phaser.Animation.generateFrameNames('yeah', 1, 48, '', 2);
			anim_frames.drop = Phaser.Animation.generateFrameNames('drop', 2, 52, '', 2);
			anim_frames.yangkun = Phaser.Animation.generateFrameNames('yangkun', 1, 46, '', 2);
			anim_frames.bitch = Phaser.Animation.generateFrameNames('bitch', 1, 31, '', 2);
			anim_frames.dance = Phaser.Animation.generateFrameNames('dance', 1, 56, '', 2);
			anim_frames.idle = Phaser.Animation.generateFrameNames('idle', 1, 34, '', 2);
			anim_frames.balance = Phaser.Animation.generateFrameNames('balance', 1, 38, '', 2);
			anim_frames.lookback = Phaser.Animation.generateFrameNames('lookback', 1, 71, '', 2);

			game.time.events.loop(200, function () {
				update();
			}, this);

			state = 1; //bitch进入动画
		},

		playRope: function (done) {
			state = 3;
			//sprite.animations.stop();
			playing = false;
			play('rope', function (sprite, animation) {
				state = 2;
				if (typeof done === 'function') {
					done();
				}
			});
		}
	};
}();

var ui = function () {
	var button_pos = [
		[]
	];

}();



/**
 * 游戏状态机
 * state:
			wait:刚进入游戏状态
			roll:点击转动按钮后状态
			result:显示结果状态
			auto:自动旋转状态
 */
var fsm = StateMachine.create({
	events: [
		{
			name: 'start',
			from: '*',
			to: 'wait'
		}, {
			name: 'scroll',
			from: 'wait',
			to: 'roll'
		},
		{
			name: 'showResult',
			from: 'roll',
			to: 'result'
		},
		{
			name: 'autoScroll',
			from: 'wait',
			to: 'auto'
		},
		{
			name: 'showReward',
			from: ['result', 'wait'],
			to: 'reward'
		},
		{
			name: 'rewardBack',
			from: 'reward',
			to: 'wait'
		}
    ],

	callbacks: {

		onstart: function (event, from, to) {
			sprites.man.animations.play('bitch');
		},

		onscroll: function (event, from, to) {

		},

		onshowResult: function (event, from, to) {},

		onautoScroll: function (event, from, to) {},

		onshowReward: function (event, from, to) {},

		onrewardBack: function (event, from, to) {

		},

		onbeforeevent: function (event, from, to) {
			console.log("before event: " + from + " to " + to);
		},

		onafterevent: function (event, from, to) {
			console.log("after event: " + from + " to " + to);
		},

		onchangestate: function (event, from, to) {
			console.log("CHANGED STATE: " + from + " to " + to);
		}
	}
});

function init() {

	game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
	game.scale.setShowAll();
	resize();
}

function update() {

}

function resize() {
	game.scale.refresh();
}

function preload() {
	RES.init(game, CONFIG);
	RES.loadAll();
}

function create() {
	var bg = game.add.image(this.world.width / 2, this.world.height / 2, 'bg');
	bg.anchor.setTo(0.5);
	bitch.init();
	//fsm.start();
	game.input.onDown.add(function () {
		bitch.playRope();
	}, this);
	//	text = game.add.text(game.world.centerX, game.world.centerY);

	// game.input.onDown.add(function () {
	// console.log("stop loop....");
	// grid_anim.stop();
	// }, this);

}
