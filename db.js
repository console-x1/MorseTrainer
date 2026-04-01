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

function getMaxStreak(level, gamemode = 'sound') {
  return new Promise((resolve, reject) => {
    db.get(
      `SELECT MAX(max_streak) as max FROM scores WHERE level = ? AND gamemode = ?`,
      [level, gamemode],
      (err, row) => {
        if (err) return reject(err);
        resolve(row.max || 0);
      }
    );
  });
}

module.exports = { saveScore, getMaxStreak };