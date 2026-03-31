const readline = require('readline');
const { MORSE, getRandomLetter } = require('./morse');
const { playLetter } = require('./audio');
const { saveScore, getMaxStreak } = require('./db');
const color = require('colors');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

async function loop() {
  let streak = 0;
  let maxStreak = getMaxStreak();
  while (true) {
    console.log("◜══════════════════")
    const level = await ask('| Level  >> '.grey)
    const letter = getRandomLetter(level);
    const code = MORSE[letter];

    await playLetter(code);
    const answer = await ask("| Letter >> ".blue);

    const correct = answer.toUpperCase().trim() === letter.toUpperCase().trim();

    if (correct) {
      streak += 1;
      if (streak > maxStreak) {
        maxStreak = streak;
      }
    } else {
      console.log("| Answer >>".red, letter);
      console.log("| [🔥 ] Last   :".red, streak)
      
      saveScore(streak, level);
      streak = 0;
    }

    console.log("| [🔥 ] streak :".blue, streak);
    console.log("| [🔥 ] Max    :".green, maxStreak);

    console.log("◟══════════════════\n");
  }
}

loop();