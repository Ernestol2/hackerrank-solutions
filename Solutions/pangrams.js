function pangrams(s) {
    let string = s.toLowerCase();
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let regex = new RegExp(`[${alphabet}]`, 'g');

    const unique = new Set(string.match(regex))

    return unique.size === 26 ? 'pangram' : 'not pangram'
}

console.log(pangrams('We promptly judged antique ivory buckles for the next prize'));