function miniMaxSum(arr) {
    // Write your code here
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    
    let total =  arr.reduce((acc, curr) => acc + curr, 0);
    
    console.log(`${total - max} ${total - min}`) 

}

//////////////

function minMaxSum(arr) {
    let sortedArr = arr.slice().sort((a, b) => a - b)
    let min = 0
    let max = 0

    for(let i=0; i<sortedArr.length -1; i++) {
        min += sortedArr[i]
    }
    for(let j=1; j<sortedArr.length; j++) {
        max += sortedArr[j]
    }
    
    return min + '  ' + max;
}

///////////////

function minMaxSum(arr) {
    let totalSum = arr.reduce((acc, curr) => acc + curr, 0)

    const min = Math.min(...arr)
    const max = Math.max(...arr)
    
    let minSum = totalSum - max;
    let maxSum = totalSum - min;

    return minSum + ' ' + maxSum
}