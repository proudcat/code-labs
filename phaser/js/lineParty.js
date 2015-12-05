var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
	preload: preload,
	create: create
});

var p17 = new Point(558, 56);
var p16 = new Point(559, 86);
var p15 = new Point(560, 114);
var p14 = new Point(561, 138);
var p13 = new Point(562, 167);
var p12 = new Point(563, 193);
var p11 = new Point(564, 220);
var p10 = new Point(558, 249);

var p27 = new Point(617, 56);
var p26 = new Point(618, 86);
var p25 = new Point(619, 114);
var p24 = new Point(620, 138);
var p23 = new Point(621, 167);
var p22 = new Point(622, 193);
var p21 = new Point(623, 220);
var p20 = new Point(624, 249);

var p37 = new Point(687, 56);
var p36 = new Point(688, 86);
var p35 = new Point(689, 114);
var p34 = new Point(690, 138);
var p33 = new Point(691, 167);
var p32 = new Point(692, 193);
var p31 = new Point(693, 220);
var p30 = new Point(694, 249);

var mask_cell_pos = [
			//第一列
			[p10, p11, p12, p13, p14, p15, p16, p17],
			//第二列
			[p20, p21, p22, p23, p24, p25, p26, p27],
			//第三列
			[p30, p31, p32, p33, p34, p35, p36, p37]
	];

var mask_col_pos = [
	new Point(563,153),new Point(622,153),new Point(685,153)
];

//右上奖励倍率表(三列,每列8个格子) 闪烁动画
var grid_anim = (function () {

	var state = 0; //动画状态机 0:格子blink  1:列blink  -1:stop

	var index = []; //格子blink 索引
	var mask = []; //格子blink 遮罩

	var index_col = 0; //column blink index
	var mask_col; //column blink mask

	var loop_event;
	var initialized = false;

	function setMaskEnabled(visible) {
		_.each(mask, function (e, i, l) {
			e.visible = visible;
		});
	}

	function resetIndex() {
		index = [7,0,7];
	}

	function loadMask() {
		for (var i = 0; i < 3; i++) {
			var sprite = game.add.sprite(-100, -100, 'atlas', 'lighth');
			sprite.anchor.setTo(0.5);
			sprite.visible = true;
			mask.push(sprite);
		}

		mask_col = game.add.sprite(-100, -100, 'atlas', 'lightv');
		mask_col.anchor.setTo(0.5);
		mask_col.visible = false;
	}

	function blink() {

		if (state === 0) {
			setMaskEnabled(true);

			var idx = index[0];

			//第一列和第三列从上往下闪动
			mask[0].x = mask_cell_pos[0][idx].x;
			mask[0].y = mask_cell_pos[0][idx].y;
			mask[2].x = mask_cell_pos[2][idx].x;
			mask[2].y = mask_cell_pos[2][idx].y;
			index[0] = --idx < 0 ? 7 : idx;
			index[2] = index[0];

			//第二列从下往上闪动
			idx = index[1];

			if (idx > mask_cell_pos[0].length -1) {
				index[1] = 0;
				state = 1;
				setMaskEnabled(false);
				resetIndex();
			}else{
				mask[1].x = mask_cell_pos[1][idx].x;
				mask[1].y = mask_cell_pos[1][idx].y;
				index[1] = ++idx; //only 8 cells per column
			}

		} else if (state === 1) {
			if (index_col > 2) {
				mask_col.visible = false;
				index_col = 0;
				state = 0;
			}else{
				mask_col.x = mask_col_pos[index_col].x;
				mask_col.y = mask_col_pos[index_col].y;
				mask_col.visible = true;
				index_col++;
			}
		} else {

		}
	}

	return {
		//开始播放动画
		start: function () {

			if (!initialized) {
				initialized = true;

				loadMask();
				resetIndex();


				loop_event = game.time.events.loop(Phaser.Timer.SECOND * 0.2, blink, this);
			} else {
				for (var i = 0; i < 3; i++) {
					index[i] = 0;
					mask[i].visible = true;
				}
				mask_col.visible = false;
			}

			index_col = 0;

			state = 0;

		},

		//停止播放动画
		stop: function () {
			state = -1;

			if (initialized) {
				loop_event.loop = false;
				setMaskEnabled(false);
				mask_col.visible = false;
			}
		}
	}
})();

function preload() {
	// game.load.image('bg', 'assets/bg.png');
	// game.load.image('outline', 'assets/bgoutline.png');
	// game.load.image('lighth', 'assets/lighth.png');
	// game.load.image('lightv', 'assets/lightv.png');
	game.load.atlas('atlas', 'assets/atlas.png', 'assets/atlas.json');

}

function create() {
	game.add.image(0, 0, 'atlas', 'background');

//	text = game.add.text(game.world.centerX, game.world.centerY);
	grid_anim.start();

	// game.input.onDown.add(function () {
	// 	console.log("stop loop....");
	// 	grid_anim.stop();
	// }, this);

}
