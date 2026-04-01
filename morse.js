const level1 = ["E", "T"];
const level2 = [...level1, "A", "I", "M", "N"];
const level3 = [...level2, "S", "U", "R", "W", "D", "G", "K", "O"];
const level4 = [...level3, "B", "H", "L", "P", "V", "F", "J", "Q", "X", "C", "Y", "Z"];
const level5 = [...level4, "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const level6 = [...level5, ".", ",", "?", "'", "!", "/"];

const LEVELS = {
    1: level1,
    2: level2,
    3: level3,
    4: level4,
    5: level5,
    6: level6
};

const MORSE = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    0: "-----",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "'": ".----.",
    "!": "-.-.--",
    "/": "-..-."
}

const FREQUENCIES = {
    E: 8, 
    T: 8, 
    A: 8, 
    I: 8, 
    N: 8, 
    S: 7,
    R: 7, 
    O: 7, 
    L: 5, 
    U: 5,
    M: 5, 
    D: 5, 
    G: 3,
    B: 4, 
    C: 4, 
    P: 3,
    F: 3, 
    H: 3, 
    J: 3, 
    K: 1, 
    Q: 1,
    V: 1, 
    W: 1, 
    X: 1, 
    Y: 1,
    Z: 1,
    
    '1': 2, '2': 2, '3': 2, '4': 2, '5': 2, '6': 2, '7': 2, '8': 2, '9': 2, '0': 2,
    '.': 3, ',': 3, '?': 2, "'": 1, '!': 3, '/': 1
};

function getRandomLetter(level = 4, lastletter) {
    const allowed = LEVELS[level];
    const previous = LEVELS[level - 1] || [];

    let pool = [];

    for (const char of allowed) {
        let weight = FREQUENCIES[char] || 1;

        if (!previous.includes(char)) {
            weight *= 3;
        }

        for (let i = 0; i < weight; i++) {
            pool.push(char);
        }
    }

    while (true) {
        const char = pool[Math.floor(Math.random() * pool.length)];

        if (char !== lastletter) {
            return char;
        }
    }
}

module.exports = { LEVELS, MORSE, getRandomLetter };