const readline = require('readline');

const { MORSE, getRandomLetter } = require('./morse');
const { playLetter } = require('./audio');
const { saveScore, getMaxStreak } = require('./db');
require('colors');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise(resolve => rl.question(question, answer => resolve(answer)));
}

async function chooseGamemode() {
  console.log("\nChoose a gamemode:".america);
  console.log("1. Visual".blue);
  console.log("2. Sound".green);
  console.log("3. Exit".red);

  const choice = await ask("> ".yellow);

  if (choice === "1") return "Visual";
  if (choice === "2") return "Sound";
  if (choice === "3") return "Exit";

  console.log("Invalid choice.\n".red);
  return chooseGamemode();
}

async function loop() {
  const gamemode = await chooseGamemode();
  console.clear()

  if (gamemode === "Exit") {
    rl.close();
    process.exit();
  }

  let streak = 0;
  let level;
  let lastletter = "";
  let maxStreak = await getMaxStreak(gamemode.toLowerCase());

  while (true) {
    console.log("◜══════════════════");

    if (!level) {
      level = await ask('| Level  >> '.grey);
    }

    const letter = getRandomLetter(level, lastletter);
    const code = MORSE[letter];
    lastletter = letter
    
    if (gamemode === "Sound") {
      await playLetter(code);
    } else {
      console.log('| Morse  >>'.blue, code);
    }

    const answer = await ask('| Letter >> '.grey);

    const correct =
      answer &&
      answer.toUpperCase().trim() === letter.toUpperCase().trim();

    if (correct) {
      streak += 1;
      if (streak > maxStreak) {
        maxStreak = streak;
      }
    } else {
      console.log("| Answer >>".red, letter);
      console.log("| [🔥 ] Last   :".red, streak);

      saveScore(streak, level, gamemode.toLowerCase());
      streak = 0;
    }

    console.log("| [🔥 ] streak :".blue, streak);
    console.log("| [🔥 ] Max    :".green, maxStreak);

    console.log("◟══════════════════\n");
  }
}

loop();