function circularArrayRotation(a, k, queries) {
    // Write your code here
    for (let i=0;i<k;i++){
        let temp = a.pop()
        a.unshift(temp)
    }

    let newArr = queries.map(e => {
        return (a[e]);
    })

    return newArr;
}

console.log(circularArrayRotation([3,4,5], 2, [1,2]))