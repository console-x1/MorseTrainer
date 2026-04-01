# Morse Trainer (CLI - Node.js)

A minimalist Morse code trainer in the terminal, now with both **Sound** and **Visual** modes.
You either hear the Morse… or stare at it like it owes you money. Your job is still the same: guess the letter.

---

## Features

* 🎯 Two training modes:

  * **Sound** → plays Morse audio
  * **Visual** → displays Morse code
* 🎮 Interactive CLI menu (arrow navigation)
* 🔥 Streak + max streak tracking
* 💾 SQLite score persistence (per level)
* 🎚️ Custom difficulty via “level” input
* 🎨 Colored terminal output

---

## Project Structure

```
/morse-trainer
  ├── index.js      # Main game loop + menu
  ├── morse.js      # Morse mappings + random logic
  ├── audio.js      # Morse sound playback
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

Dependencies used:

* `sqlite3`
* `colors`

---

## Usage

```bash
node index.js
```

---

## Gameplay

### 1. Choose a gamemode

* **Visual** → Morse is displayed
* **Sound** → Morse is played as audio
* **Exit** → leave (bravely)

### 2. Choose a level

You input a level manually (e.g. number or custom logic depending on your implementation).

### 3. Play

* A random letter is selected
* You must guess it
* The game tracks:

  * 🔥 current streak
  * 🏆 max streak

### 4. Fail

* Your streak resets
* Your score is saved in SQLite

---

## Example (Visual mode)

```
◜══════════════════
| Morse  >>  .-
| Letter >>  A
| [🔥] streak : 3
| [🔥] Max    : 7
◟══════════════════
```

---

## Example (Sound mode)

```
◜══════════════════
(bip bip...)
| Letter >>  S
| [🔥] streak : 3
| [🔥] Max    : 7
◟══════════════════
```

---

## Notes

* Sound mode uses system beeps (Windows PowerShell)
* Visual mode is faster for pattern recognition
* Scores are stored per level

---

## Possible Improvements

* Adaptive difficulty (more frequent failed letters)
* Real level system instead of manual input
* Word training mode
* Per-letter statistics
* Better audio engine (avoid spawning processes per beep)
* UI polish (less “terminal from 1998” vibes)

---

## Philosophy

* Keep it simple
* Train recognition, not decoding
* Short sessions, high intensity