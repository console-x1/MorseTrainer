const { exec } = require('child_process');

function beep(freq, duration) {
  exec(`powershell -c "[console]::beep(${freq},${duration})"`);
}

function sleep(ms) {
  return new Promise(res => setTimeout(res, ms));
}

async function playSymbol(symbol) {
  if (symbol === ".") {
    beep(1000, 100);
    await sleep(150);
  } else {
    beep(1000, 600);
    await sleep(650);
  }
}

async function playLetter(code) {
  for (const s of code) {
    await playSymbol(s);
  }
}

module.exports = { playLetter, sleep };