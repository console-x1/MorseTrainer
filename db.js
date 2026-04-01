const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('scores.db');

db.run(`
  CREATE TABLE IF NOT EXISTS scores (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    max_streak INTEGER,
    level INTEGER DEFAULT 1,
    gamemode TEXT DEFAULT 'sound',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

function saveScore(score, level, gamemode='sound') {
    db.run(`INSERT INTO scores(max_streak, level, gamemode) VALUES(?, ?, ?)`, [score, level, gamemode]);
}

function getMaxStreak(gamemode='sound') {
    let maxStreak = 0;
    db.get(`SELECT MAX(max_streak) FROM scores WHERE gamemode = ?`, [gamemode], (err, row) => {
        if (err) console.log(err)

        maxStreak = row?.['MAX(max_streak)'] || 0;
    });
    return maxStreak;
}

module.exports = { saveScore, getMaxStreak };