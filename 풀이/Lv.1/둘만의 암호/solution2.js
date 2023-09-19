function solution(s, skip, index) {
    const arr = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 97));
    const alphabet = arr.filter(c => !skip.includes(c));
    /*const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
        "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
        "u", "v", "w", "x", "y", "z"].filter(c => !skip.includes(c));*/
    return s.split("").map(c => alphabet[(alphabet.indexOf(c) + index) % alphabet.length]).join("");
}
