function breakingRecors(scores) {

    let min = scores[0]
    let max = scores[0]
    let res = [0, 0]

    for(let i=1; i<scores.length; i++){
        if(scores[i] < min) {
            min = scores[i];
            res[1]++
        } else if (scores[i] > max) {
            max = scores[i];
            res[0]++;
        }
    }
    
    return res;
}

console.log(breakingRecors([10,5,20,20,4,5,2,25,1]));