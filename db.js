const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('scores.db');

db.run(`
  CREATE TABLE IF NOT EXISTS scores (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    max_streak INTEGER,
    level INTEGER DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

function saveScore(score, level) {
    db.run(`INSERT INTO scores(max_streak, level) VALUES(?, ?)`, [score, level]);
}

function getMaxStreak() {
    let maxStreak = 0;
    db.get(`SELECT MAX(max_streak) FROM scores`, (err, row) => {
        if (err) {
            console.error(err.message);
        }
        maxStreak = row['MAX(max_streak)'] || 0;
    });
    return maxStreak;
}

module.exports = { saveScore, getMaxStreak };