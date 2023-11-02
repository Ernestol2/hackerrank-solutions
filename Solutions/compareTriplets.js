function compareTriplets(a, b) {
    let res = [0, 0]
    
    for(let i=0; i<a.length; i++) {
        if(a[i] > b[i]) {
            res[0]++;
        } else if(a[i] === b[i]) {
            res;
        } else {
            res[1]++;
        }
    } 
    
    return res;
}

console.log(compareTriplets(
    [17, 28, 30],
    [99, 16, 8]
));