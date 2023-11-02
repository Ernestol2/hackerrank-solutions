function lonelyInteger(a) {

    return a.filter(e => a.indexOf(e) === a.lastIndexOf(e));
}

console.log(lonelyInteger([1,2,3,4,3,2,1]));