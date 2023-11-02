function sockMerchant(n, ar) {
    let res = {}
    for (let i=0; i<n; i++) {
        if (!res[ar[i]]) {
            res[ar[i]] = 1
        } else {
            res[ar[i]] += 1
        }
    }
    return Object.values(res).map(v => Math.floor(v / 2))
            .reduce((acc, cu) => acc + cu)
}

console.log(sockMerchant(7, [1,2,1,2,1,3,2]));