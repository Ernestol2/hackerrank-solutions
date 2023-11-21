function birthdays(s, d, m) {
    let count = 0;
    let arr = []
    let newArr = []
    let res = []

        for(let i=0; i<s.length; i++) {
            arr.push(s.slice(i, i+m))       
        }
        for(let piece of arr) {
            newArr.push(piece.reduce((a, c) => a + c));
        }
        console.log(newArr);        

        for(let i=0; i<newArr.length; i++) {
            if(count<d && newArr[i] == d) {
                res.push(newArr[i])
                count++;
            } else if (count==d){
                break;
            }
        }

    return res.length;
}

console.log(birthdays([1,2,1,3,2], 3, 2));