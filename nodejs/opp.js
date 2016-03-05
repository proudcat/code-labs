console.log(process.versions);
console.log('⬆️⬆️⬆️⬆️⬆️<version info>⬆️⬆️⬆️⬆️⬆️');

console.log("-------- prototype ---------");

var Hero = function (name, speed) {

  this.name = name;

  this.skills = [];

  this.say = function (words) {
    console.log(words);
  };

};

Hero.prototype = {
  walk: function () {
    console.log("i am walking with speed ", this.speed);
  },

  skillAt: function (skill, target) {
    console.log("use skill " + skill + " to " + target);
  }
};

Hero.prototype.constructor = Hero;

var luna = new Hero();
var coco = new Hero();

console.log(luna.walk === coco.walk);
console.log(luna.say === coco.say);

console.log("------- call & apply -------");

var Chanel = (function () {

  var reqLogin = function (msg, cb, context) {

    context = context || this;

    setTimeout(function () {

      var dto = {
        userMoney: 1000
      };
      // cb(dto);
      cb.call(context, dto);

    }, 1500);
  };

  return {
    reqLogin: reqLogin
  };
})();


var Game = function () {

  this.bet = 10;

  this.login = function () {

    var msg = {
      userName: "yulijun",
      password: "123"
    };

    Chanel.reqLogin(msg, function (dto) {
      console.log(this.bet, dto.userMoney);
    }, this);
  };
};

var game = new Game();
game.login();
