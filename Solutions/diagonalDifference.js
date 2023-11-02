function diagonalDifference(arr) {

    let leftToRight = 0;
    let rightToLeft = 0;

    for (let i = 0; i < arr.length; i++) {
        leftToRight += arr[i][i];
        rightToLeft += arr[i][arr.length - 1 - i];
    }

    return Math.abs(leftToRight - rightToLeft);
}

console.log(diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
]));