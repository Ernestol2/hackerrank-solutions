function superDigit(n, k) {
    let arr = n.split('').map(e => e*1)
    let super_digit = 0

    while(1) {
        super_digit = arr.reduce((ac, cu) => ac + cu) * k;
        if (super_digit < 10) break;
        arr = super_digit.toString().split('').map(e => e*1)
        k = 1
    }

    return super_digit;
}

console.log(superDigit('9875', 4));