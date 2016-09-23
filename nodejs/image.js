const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');

let file = '/Users/koala/work/resources/theme-park/shit/1280x720_main.json';

function save(i, file, data) {
  let base64Data = data.replace(/^data:image\/(png|jpeg);base64,/, "");
  let dir = path.parse(file).dir;
  mkdirp(dir, function (err) {
    if (err) {
      console.error(err);
    } else {
      fs.writeFile(file, base64Data, 'base64', function (err) {
        if (err) {
          console.log("save [%s] error %s", file, err);
        } else {
          console.log(i, file);
        }
      });
    }
  });
}

// let c = 'data:image/png;base64,iVBORw0KG,adfasfasdfasdf,data:image/jpeg;base64,iVBORw0KG';

fs.readFile(file, 'utf8', (err, data) => {
  if (err) {
    throw err;
  }

  let jsonObj = JSON.parse(data);

  let keys = Object.keys(jsonObj.files);

  keys.forEach((e, i) => {
    let outputFile = path.join(__dirname, "bitch", e + ".png");
    save(i, outputFile, jsonObj.files[e]);
  });
});
