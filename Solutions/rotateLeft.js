function rotateLeft(d, arr) {
    // Write your code here
    for(let i=0; i<d; i++) {
        let temp = arr.shift()
        arr.push(temp)
    }
    return arr;

}

console.log(rotateLeft(2, [1,2,3,4,5]));