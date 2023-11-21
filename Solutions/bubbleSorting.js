function sorting(a, n) {
    let numOfSwaps = 0;
    for(let i=0; i < n-1; i++) {
        for(let j=i+1; j < n; j++){ 
            if(a[i] > a[j]) {
                let temp = a[i]
                a[i] = a[j];
                a[j] = temp;
                numOfSwaps++;
            }
        }
        if(numOfSwaps === 0) {
            break;
        }
    }
    console.log(`Array is sorted in ${numOfSwaps} swaps`);
    console.log(`First Element: ${a[0]}`);
    console.log(`Last Element: ${a[n-1]}`);

}

console.log(sorting([4,3,2,1], 4));