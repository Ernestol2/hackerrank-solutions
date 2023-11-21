function migratory(arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = 1 
        } else {
            obj[arr[i]]++
        }
    }

    let ans = 0
    let temp = 0
    for(const [key, value] of Object.entries(obj)) {
        if(value > temp) {
            temp = value
            ans = key
        }
    }
    return ans;
}

console.log(migratory([ 1, 4, 4, 4, 5, 3 ]));