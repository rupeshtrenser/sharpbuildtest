const sharp = require('sharp');

sharp("input.jpg")
  .resize(320, 240)
  .toFile('output.webp', (err, info) => { console.log(info); });