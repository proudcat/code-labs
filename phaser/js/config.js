var CONFIG = (function () {

  var atlas = {
    "rope-yeah": {
      "type": "atlas",
      "texture": "assets/rope-yeah.png",
      "atlas": "assets/rope-yeah.json"
    },
    drop: {
      "type": "atlas",
      "texture": "assets/drop.png",
      "atlas": "assets/drop.json"
    },
    all: {
      "type": "atlas",
      "texture": "assets/all.png",
      "atlas": "assets/all.json"
    },
    bg: {
      "type": "image",
      "texture": "assets/bg.png"
    }
  };

  var ui = [
    {
      "name": "ui",
      "texture": "assets/ui.png",
      "atlas": "assets/ui.json"
      "groups": [{
        "name": "group1",
        "x": 0,
        "y": 0
      }],
      "components": [
        {
          "key": "ok",
          "group": "group1",
          "type": "button",

          "args": [
            "x": 0,
            "y": 0,
            "overFrame": 0,
            "outFrame": 0,
            "downFrame": 0,
            "upFrame": 0
          ]
        }, {
          "key": "ok",
          "type": "button",
          "x": 0,
          "y": 0,
          "overFrame": 0,
          "outFrame": 0,
          "downFrame": 0,
          "upFrame": 0
        }
      ]
    }
  ];

  var animations = [

  ];

  return {
    atlas: atlas,
  }
})();
