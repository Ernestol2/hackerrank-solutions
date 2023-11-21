function main(n) {

    let arr = []
    for(let i=1; i<=n; i++) {
        if(n%i === 0) {
            arr.push(i)
        }
    }
    return arr.reduce((acc, cu) => acc + cu, 0)
}

console.log(main(20));