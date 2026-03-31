const { exec } = require('child_process');

function beep(freq = 600, duration = 100) {
  exec(`powershell -c "[console]::beep(${freq},${duration})"`);
}

function sleep(ms) {
  return new Promise(res => setTimeout(res, ms));
}

async function playSymbol(symbol) {
  if (symbol === ".") {
    beep(600, 100);
    await sleep(150);
  } else {
    beep(600, 400);
    await sleep(450);
  }
}

async function playLetter(code) {
  for (const s of code) {
    await playSymbol(s);
  }
}

module.exports = { playLetter, sleep };