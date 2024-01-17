function superReducedString(s) {
    let reducedString = reduceString(s);
    return reducedString;
}

function reduceString(s) {
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i + 1]) {
            return reduceString(s.slice(0, i) + s.slice(i + 2));
        }
    }
    return s ? s : 'Empty String';
}

console.log(superReducedString('aaccdd'));