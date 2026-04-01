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

function getRandomLetter(level=4, lastletter) {
    const level1 = ["E", "T"];
    const level2 = [...level1, "A", "I", "M", "N"];
    const level3 = [...level2, "S", "U", "R", "W", "D", "G", "K", "O"];
    const level4 = [...level3, "B", "H", "L", "P", "V", "F", "J", "Q", "X", "C", "Y", "Z"];
    const level5 = [...level4, "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const level6 = [...level5, ".", ",", "?", "'", "!", "/"];

    let letter = '';
    if (level == 1) letter = level1[Math.floor(Math.random() * level1.length)];
    else if (level == 2) letter = level2[Math.floor(Math.random() * level2.length)];
    else if (level == 3) letter = level3[Math.floor(Math.random() * level3.length)];
    else if (level == 4) letter = level4[Math.floor(Math.random() * level4.length)];
    else if (level == 5) letter = level5[Math.floor(Math.random() * level5.length)];
    else letter = level6[Math.floor(Math.random() * level6.length)];

    if (letter == lastletter && level !== 1) return getRandomLetter(level, lastletter)
    
    return letter
}

module.exports = { MORSE, getRandomLetter };