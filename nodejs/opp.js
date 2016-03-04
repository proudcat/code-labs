console.log(process.versions);
console.log('⬆️⬆️⬆️⬆️⬆️<version info>⬆️⬆️⬆️⬆️⬆️');

/*********** common util ************/
var print = function (src) {
  for (var prop in src) {
    if (typeof src[prop] !== 'function') {
      console.log(prop, src[prop]);
    }
  }
  console.log('oooooooooooooooooooo');
};
/************** End ****************/

console.log('----------- 闭包 ---------');

var closure = (function () {

  var age = 10;

  var hehe = function () {
    console.log(hehe.toString());
  };

  function didi() {
    console.log(didi.toString());
  }

  return {
    hehe: hehe,
    didi: didi
  };
})();

closure.hehe();
closure.didi();

console.log('---------- prototype ----------');

var Luna = function () {

  this.nick = 'bitch';

  this.say = function () {
    console.log('hi', this.name);
  };

};

Luna.prototype = {

  name: "yueqi",

  print: function () {
    console.log(this.name);
  },
  set: function (name) {
    this.name = name;
  }
};

Luna.prototype.constructor = Luna;

var hero = new Luna();
hero.set("sb");
hero.print();

var friend = new Luna();
friend.set("princess");
friend.print();
hero.print();

console.log(hero.print === friend.print);
console.log(hero.say === friend.say);


console.log('---------- object clone ----------');

var GameInfo = function () {
  this.GameID = 0;
  this.IsRace = false;
  this.GameMoney = 0;
  this.IsReConnectMode = false;
  this.test = [];
  this.fish = {
    hehe: 123,
    huhu: "hi"
  };
};

GameInfo.prototype = {
  name: 'kk',
  clone: function () {}
};
GameInfo.prototype.constructor = GameInfo;

var puke = new GameInfo();
puke.GameID = 13;
puke.GameMoney = 121354;
puke.test = [1, 2, 3];
puke.name = 'xxxx';
var shit = JSON.parse(JSON.stringify(puke));
print(puke);
shit.test.push(88);
print(shit);
