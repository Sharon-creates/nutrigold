const fs = require('fs');

const sources = [
  "c:\\Users\\USER\\Pictures\\nutri gold\\1776217134568.png",
  "c:\\Users\\USER\\Pictures\\nutri gold\\1776215122341.png",
  "c:\\Users\\USER\\Pictures\\nutri gold\\1776215278999.png",
  "c:\\Users\\USER\\Pictures\\nutri gold\\1776215769082.png",
  "c:\\Users\\USER\\Pictures\\nutri gold\\1776216527376.png",
  "c:\\Users\\USER\\Pictures\\nutri gold\\1776217015918.png"
];

sources.forEach((src, index) => {
  try {
    fs.copyFileSync(src, `c:\\Users\\USER\\Nutrigold\\public\\slide-${index + 1}.png`);
  } catch (e) {
    console.error(e);
  }
});
