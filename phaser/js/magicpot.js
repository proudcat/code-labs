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

	var counter = 0;

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

	var lines_sprite_names = [
		"line1",
		"line2",
		"line3",
		"line4",
		"line5",
		"line6",
		"line7",
		"line8",
		"line9",
		"line10",
		"line11",
		"line12",
		"line13",
		"line14",
		"line15",
		"line16",
		"line17",
		"line18",
		"line19",
		"line20",
		"line21",
		"line22",
		"line23",
		"line24",
		"line25"
	];

	var lines_pos = [
		[0, -18],
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0],
		[0, 0]
	];

	var buttons_pos = [
	 	[989, 652],
		[1007, 509],
		[1007, 789],
		[989, 481],
		[989, 816],
		[1723, 631],
		[1704, 659],
		[1704, 715],
		[1723, 575],
		[1007, 622],
		[1007, 681],
		[989, 539],
		[989, 762],
		[1704, 491],
		[1723, 803],
		[989, 594],
		[989, 707],
		[1723, 519],
		[1704, 775],
		[1007, 735],
		[1007, 565],
		[1704, 603],
		[1723, 689],
		[1704, 547],
		[1723, 743]
	];

	var buttons_text_name = [
		"num1",
		"num2",
		"num3",
		"num4",
		"num5",
		"num6",
		"num7",
		"num8",
		"num9",
		"num10",
		"num11",
		"num12",
		"num13",
		"num14",
		"num15",
		"num16",
		"num17",
		"num18",
		"num19",
		"num20",
		"num21",
		"num22",
		"num23",
		"num24",
		"num25"
	]

	var buttons_sprite_name = [
		"button1",
		"button2",
		"button3",
		"button4",
		"button5",
		"button6",
		"button7",
		"button8",
		"button9",
		"button10",
		"button11",
		"button12",
		"button13",
		"button14",
		"button15",
		"button16",
		"button17",
		"button18",
		"button19",
		"button20",
		"button21",
		"button22",
		"button23",
		"button24",
		"button25"
	];

	var num_buttons = [];
	var lines = [];

	var create_buttons = function () {
		// console.log('centerX', this.game.world.centerX);
		// console.log('centerY', this.game.world.centerY);
		// var
		for (var i = 0; i < buttons_sprite_name.length; i++) {
			var pos = buttons_pos[i];
			var button = game.add.button(pos[0] - this.game.world.centerX - 240, pos[1] - this.game.world.centerY + 100,
				"main", num_button_click, this,
				"image 454",
				buttons_sprite_name[i]);
			button.name = (i + 1);
			button.scale.setTo(0.7);
			button.anchor.setTo(0.5);

			var text = game.add.sprite(0, 0, "main", buttons_text_name[i]);
			text.anchor.setTo(0.5);

			var line = game.add.sprite(this.game.world.centerX - 25, this.game.world.centerY + lines_pos[i][1], "main",
				lines_sprite_names[i]);
			line.scale.setTo(0.65);
			line.anchor.setTo(0.5);
			line.visible = false;
			lines.push(line);



			// var text = game.make.text(15, 10, i, {
			// 	font: '20px Arial',
			// 	align: "center",
			// 	boundsAlignH: "center",
			// 	boundsAlignV: "middle"
			// });

			button.addChild(text);
			//button.addChild(line);

			// game.add.sprite(this.game.world.centerX, this.game.world.centerY, "main", "button1");


			//hover
			button.onInputOver.add(function (sprite, pointer) {
				console.log('hover');
			}, this);

			//out
			button.onInputOut.add(function (sprite, pointer) {
				console.log('out');
			}, this);

			num_buttons.push(button);
		}
	}

	var num_button_click = function (sender, pointer) {
		console.log(sender.name);
	}

	var create_lines = function () {

	}

	var counter = 0;

	return {
		init: function () {
			create_buttons();
			lines[0].visible = true;
			game.time.events.loop(400, function () {

				return;

				//test
				for (var i = 0; i < lines.length; i++) {
					lines[i].visible = false;
				}

				lines[counter].visible = true;

				counter++;
				if (counter >= lines.length) {
					counter = 0;
				}

			}, this);


		}
	}

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

		onshowResult: function (event, from, to) {

		},

		onautoScroll: function (event, from, to) {

		},

		onshowReward: function (event, from, to) {

		},

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
	var bg = game.add.image(this.world.centerX, this.world.centerY, 'bg');
	bg.anchor.setTo(0.5);

	bitch.init();
	ui.init();
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
