# Morse Trainer (CLI - Node.js)

A minimal command-line Morse code trainer built with Node.js.
The app plays a Morse sequence (audio) and prompts you to guess the corresponding letter. It tracks your current streak and saves your best scores using SQLite.

---

## Features

* 🔊 Plays Morse code using system audio (Windows PowerShell)
* 🎯 Random letter training
* 📈 Tracks current streak and max streak
* 💾 Saves scores in SQLite
* 🧱 Clean modular architecture

---

## Project Structure

```
/morse-trainer
    ├── index.js      # Main entry point
    ├── morse.js      # Morse mappings + utilities
    ├── audio.js      # Sound playback (beeps)
    ├── db.js         # SQLite persistence
```

---

## Installation

1. Clone the repository

```
git clone https://github.com/console-x1/MorseTrainer.git
cd morse-trainer
```

2. Install dependencies

```
npm install
```

---

## Usage

Run the trainer:

```
node index.js
```

First a level will be prompt :
```
Level  >> 
```
Type a number (1 to 6) to indicate the level you want and then press Enter. The level defines which letters will be used according to their lengths, based on Morse code.

You will hear a Morse sequence and be prompted:
```
Letter >>
```
Type the corresponding letter and press Enter.

---

## How It Works

* A random letter is selected from a predefined set
* Its Morse code is played using system beeps
* You input your guess
* The app updates:

  * Current streak
  * Maximum streak

---

## Notes

* Audio playback relies on Windows PowerShell (`[console]::beep`)
* Behavior may vary depending on system configuration
* Terminal must allow sound output

---
