var RES = (function () {

  var _type = [
    "image",
    "textureatlas",
    "text",
    "json",
    "shader",
    "xml",
    "script",
    "binary",
    "spritesheet",
    "audio",
    "video",
    "tilemap",
    "physics",
    "bitmapfont",
    "packfile"
  ];

  var _res;
  var _game;

  return {
    /*
     *  intialize the resoure.
     *  @param {Phaser.Game} Game - phaser game instance.
     *  @param {object} config -  config object.
     *  @param {boolean} load [optional]- is load all the resource.
     */
    init: function (game, config) {
      _game = game;
      _res = config.atlas;
    },

    load: function (key) {

      var res = _res[key];
      if (res === null || res === undefined) {
        return;
      }

      switch (res.type) {
      case "atlas":
        game.load.atlas(key, res.texture, res.atlas);
        break;
      case "image":
        game.load.image(key, res.texture);
        break;
      default:
      }
    },

    loadAll: function () {
      for (var item in _res) {
        this.load(item);
      }
    }

  };
})();
