function reduceNumbers(n){

    let reduceNUmber = reduce(n)
    return reduceNUmber
}

function reduce(n) {
    n = n.toString()
    
    for(let i=0; i<n.length; i++){
        if(n[i] === n[i+1]){
            return reduce(n.slice(0,i) + n.slice(i+2)) 
        }
    }
    return n ? n : 'Empty Number'
}

console.log(reduceNumbers(22344566));