function gridChallenge(grid) {
    // Write your code here
    let sortedGrid = grid.map((word) => word.split('').sort().join(''));

    let prev;
    for (let string of sortedGrid) {
        if(typeof(prev) !== 'undefined') {
            for(let j=0; j<string.length; j++) {
                if(prev[j] > string[j]){
                    return 'NO'
                }
            }
        } else {
            prev = string
        }
    }
    return 'YES';
}

console.log(gridChallenge([
    'ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv'
]));