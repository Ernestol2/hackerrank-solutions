function hackerRankInString(s) {
    let test = 'hackerrank'
    let index = 0

    for(let i=0; i<s.length; i++) {
        if(s[i] === test[index]) index++;
        if(index === test.length) return 'YES'
    }

    return 'NO';
}

console.log(hackerRankInString('hereiamstackerrank'));


//ESTA SOLUCION MANEJA UN DOBLE CONTADOR.  