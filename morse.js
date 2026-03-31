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

function getRandomLetter(level=4) {
    const level1 = ["E", "T"];
    const level2 = [...level1, "A", "I", "M", "N"];
    const level3 = [...level2, "S", "U", "R", "W", "D", "G", "K", "O"];
    const level4 = [...level3, "B", "H", "L", "P", "V", "F", "J", "Q", "X", "C", "Y", "Z"];
    const level5 = [...level4, "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const level6 = [...level5, ".", ",", "?", "'", "!", "/"];

    if (level == 1) return level1[Math.floor(Math.random() * level1.length)];
    else if (level == 2) return level2[Math.floor(Math.random() * level2.length)];
    else if (level == 3) return level3[Math.floor(Math.random() * level3.length)];
    else if (level == 4) return level4[Math.floor(Math.random() * level4.length)];
    else if (level == 5) return level5[Math.floor(Math.random() * level5.length)];
    else return level6[Math.floor(Math.random() * level6.length)];
}

module.exports = { MORSE, getRandomLetter };