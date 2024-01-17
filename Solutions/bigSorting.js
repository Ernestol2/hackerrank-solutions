function bigSorting(unsorted) {
    
    return unsorted.sort((a, b, diff = 0) => 
    (diff = a.length - b.length) != 0 ? diff : a < b ? -1 : 1 );
}

console.log(bigSorting([ '31415926535897932384626433832795', '1', '3', '10', '3', '5' ]));