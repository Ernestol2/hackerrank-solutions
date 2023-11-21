function divisibleSumPairs(n, k, ar) {
    let arr = []
    let next = 1;

    for(let test of ar) {
        for(let j=next; j<n; j++) {
            if((test + ar[j]) % k === 0){
                arr.push([test, ar[j]])
            } 
        }
        next++;
    }
    return arr.length
}

console.log(divisibleSumPairs(6, 3, [1,3,2,6,1,2]));