function string_xor(s, t) {
    let x = '';
    for(let i=0;i<s.length; i++) {
        if (t[i] === s[i]){
            x += '0'
        } else {
            x += '1';
        }
    }

    console.log(x);
}

console.log(string_xor('100111', '000110'));