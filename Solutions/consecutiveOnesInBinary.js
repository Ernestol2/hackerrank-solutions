function intToBinary(n) {
    let binary = n.toString(2).split('')
    let arrOfLengths = (binary.join('').split('0'));
    let temp = 0;

    for(let longest of arrOfLengths) {
        if(longest.length > temp) temp = longest.length
    }

    console.log(temp);
}

console.log(intToBinary(125));

/* 
NUMBER TO BINARY

const binaryString = decimalNumber.toString(2);

*/