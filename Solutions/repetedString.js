function repeatedString(s, n) {
    if(s === 'a') return n;
    let countOfA = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a') {
            countOfA++;
        }
    }

    const fullRepetitions = Math.floor(n / s.length);
    const remainingChars = n % s.length;

    countOfA *= fullRepetitions;

    for (let i = 0; i < remainingChars; i++) {
        if (s[i] === 'a') {
            countOfA++;
        }
    }

    return countOfA;
}

console.log(repeatedString('aba', 10));