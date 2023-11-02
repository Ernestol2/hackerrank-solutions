function countingValleys(steps, path) {
    let arr = []
    let count = 0;
    for(let i=0; i<steps; i++) {
        if(path[i] === 'D') {
            count--;
            arr.push(count);
        } else {
            count++;
            arr.push(count)
        }
    }
    let valleyFlag = null;
    let valleyCount = 0;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] < 0) {
            valleyFlag = false;
        } else if(arr[i - 1] < 0 && arr[i] == 0) {
            valleyFlag = true;
            valleyCount++;
        }
    }

    
    return valleyCount;
}

console.log(countingValleys(12, 'DDUUUUDDDDUU'));