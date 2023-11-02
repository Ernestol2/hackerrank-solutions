function countingSort(arr) {
    // Write your code here
   if (arr.length === 0) return [];

    const count = new Array(100).fill(0);

    for (let i = 0; i <= arr.length; i++) {
        count[arr[i]]++;
    }

    return count;

}

// trick was in the NOTE part. where it says always return
// a frequency array with 100 elements. so there was no need
// to find min or max values. arr.length was hardcoded.