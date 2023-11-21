function getMoneySpent(keyboards, drives, b) {
    let total = -1
    for(let keyboard of keyboards) {
        for(let drive of drives) {
            let tempSum = keyboard + drive
            if(tempSum <= b && tempSum > total) {
                total = tempSum
            }
        }
    }
    return total;
}


console.log(getMoneySpent([5],[4], 5));