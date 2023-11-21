function hourglassSum(arr) {
    let maxSum = -Infinity;

    for (let i = 0; i <= 3; i++) {
        for (let j = 0; j <= 3; j++) {
            let currentSum =
                arr[i][j] + arr[i][j + 1] + arr[i][j + 2] +
                arr[i + 1][j + 1] +
                arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];

            maxSum = Math.max(maxSum, currentSum);
        }
    }

    return maxSum;
}

const inputArray = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
];

const result = hourglassSum(inputArray);
console.log(result);