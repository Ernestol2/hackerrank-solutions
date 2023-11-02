function findMedian(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    const middle = Math.floor(sortedArr.length / 2);

    return sortedArr[middle]
}

console.log(findMedian([0,1,2,4,6,5,3]))