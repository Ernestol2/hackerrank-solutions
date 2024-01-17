function hurdleRace(k, height) {
    // Write your code here
    let max = Math.max(...height)

    return k > max ? 0 : max - k;
}

console.log(hurdleRace(4, [1,6,3,5,2]));