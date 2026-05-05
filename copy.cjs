const fs = require('fs');
const path = require('path');

const srcFiles = [
  "C:\\Users\\USER\\Appdata\\Local\\Temp\\2026-04-14T23-14-06-699Z-IMG_9360.jpeg",
  "C:\\Users\\USER\\Appdata\\Local\\Temp\\2026-04-14T23-14-10-896Z-IMG_9361.jpeg",
  "C:\\Users\\USER\\Appdata\\Local\\Temp\\2026-04-14T23-14-12-880Z-IMG_9362.jpeg",
  "C:\\Users\\USER\\Appdata\\Local\\Temp\\2026-04-14T23-14-14-725Z-IMG_9363.jpeg"
];

const destFiles = [
  "c:\\Users\\USER\\Nutrigold\\public\\nutrigold-1l.jpeg",
  "c:\\Users\\USER\\Nutrigold\\public\\nutrigold-3l.jpeg",
  "c:\\Users\\USER\\Nutrigold\\public\\nutrigold-5l.jpeg",
  "c:\\Users\\USER\\Nutrigold\\public\\nutrigold-25l.jpeg"
];

const publicDir = "c:\\Users\\USER\\Nutrigold\\public";
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

srcFiles.forEach((src, idx) => {
  try {
    fs.copyFileSync(src, destFiles[idx]);
    console.log(`Copied ${src} to ${destFiles[idx]}`);
  } catch (err) {
    console.error(`Error copying ${src}:`, err);
  }
});
