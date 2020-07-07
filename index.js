const sharp = require('sharp');
module.exports = {
 ImageResize:function()
{
	return new Promise((resolve, reject) => {
sharp("input.jpg")
  .resize(320, 240)
  .toFile('output.webp', (err, info) => { console.log(info); resolve(info.width);});
	});
}
};

