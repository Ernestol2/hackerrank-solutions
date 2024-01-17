function angryProfessor(k, a) {
    // Write your code here
    let count = 0;
    a.map(e => {
        if(e <= 0) count++
    })

    return (count >= k) ? 'NO' : 'YES'
}

console.log(angryProfessor(3, [-1,-3,4,2]));