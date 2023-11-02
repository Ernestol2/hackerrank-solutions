function main(N) {
    
    if(N % 2 != 0) {
        console.log('Weird')
    } else if(N % 2 === 0 && N <= 5) {
        console.log('Not Weird')
    } else if(N % 2 === 0 && N <= 20) {
        console.log('Weird')
    } else if(N % 2 === 0 && N > 20) {
        console.log('Not Weird')
    }
}

console.log(main(22));