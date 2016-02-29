var path = require("path");
var fs = require("fs");
var rootPath = "D:/Projects/Games/DianYouGame/Client/Html5/DianWanSwf/Slot/SlotMagicPot/1/assets/streamvideo_564_flv";

// fs.rename('/path/to/Afghanistan.png', '/path/to/AF.png', function(err) {
//     if (err) console.log('ERROR: ' + err);
// });

walk(rootPath, function(err, results) {
    if (err)
        throw err;
    
    var item;
    for (var i = 0; i < results.length; i++) {
        var item = results[i];
        var newName = item.replace('ffout00','drop');
        fs.rename(item,newName , function(err) {
            if (err) {
                  console.log('ERROR: ' + err);
                  return;
            }
              
            console.log(path.basename(item) + " ==> " + path.basename(newName));
        });
    }
});

//filepath.replace('ffout00','drop')
function walk(dir, done) {

    var results = [];

    fs.readdir(dir, function(err, files) {

        if (err)
            return done(err);

        var file;

        var pending = files.length;

        if (!pending)
            return done(null, results);

        for (var i = 0; i < files.length; i++) {
            file = path.resolve(dir, files[i]);

            fs.stat(file, function(err, stat) {
                if (stat && stat.isDirectory()) {
                    walk(file, function(err, res) {
                        results = results.concat(res);
                        if (!--pending)
                            done(null, results);
                    });
                } else {
                    results.push(file);
                    if (!--pending)
                        done(null, results);
                }
            });

            //renameFile(dir + "\\" + file);
        }
    });
}