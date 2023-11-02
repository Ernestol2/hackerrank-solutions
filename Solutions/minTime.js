function minTime(files, numCores, limit) {

    files.sort((a, b) => b - a);
    
    let cores = files.slice(0, limit)
    let rest = files.slice(limit)
    
    cores.forEach(core => {
        if(core%numCores === 0) rest.push(core / numCores)
        else rest.push(core)
    })
    console.log(cores);
    console.log(rest);
    
    return rest.reduce((ac, cu) => ac + cu);
}

console.log(minTime([4, 1, 3, 2, 8], 4, 3))