
function A(){
  this.print = function(){

  };
}
A.prototype.hehe = function(){};

var a = new A();
var b = new A();
console.log(a.print == b.print);
console.log(a.print === b.print);

console.log(a.hehe == b.hehe);
console.log(a.hehe === b.hehe);

var Chanel = (function () {

  var reqLogin = function (msg, cb, context) {

    console.log("requset login in......");

    context = context || this;

    setTimeout(function () {

      if (typeof cb === "function") {
        var dto = {
          userMoney: 1000
        };
        // cb(dto);
        cb.call(context, dto);
      } else {
        console.warn("message does not have a callback function");
      }

    }, 1500);
  };

  return {
    reqLogin: reqLogin
  };
})();


var logic = function () {

  this.bet = 10;

  this.login = function () {

    var msg = {
      userName: "yulijun",
      password: "123"
    };

    Chanel.reqLogin(msg, function (dto) {
      console.log("start game.........");
      console.log(this.bet, dto.userMoney);
    },this);
  };
};

var shit = new logic();
shit.login();

var example = {

  name: 'who',

  wrong: function () {
    setTimeout(function () {
      console.log(this.name);
    }, 0);
  },

  right: function () {
    var self = this;

    setTimeout(function () {
      console.log(self.name);
    }, 0);
  }
};

// example.wrong();
// example.right();
