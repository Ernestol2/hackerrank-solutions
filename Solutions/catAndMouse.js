function catAndMouse(x,y,z) {
    let a = Math.abs(z-x);
    let b = Math.abs(z-y);

    return a>b ? 'Cat B' : b>a ? 'Cat A' : 'Mouse C'; 

}

console.log(catAndMouse(1,0,3));