function pageCount(n, p) {
    let book = []
    let frontSearch = 0;
    let backSearch = 0;

    for(let i=0; i<=n; i += 2) {
        book.push([i, i+1])
    }

    for(let i=0; i<book.length; i++) {
        if(book[i].indexOf(p) >= 0) {
            frontSearch = i;
        }
    }

    book.reverse()
    
    for(let i=0; i<book.length; i++) {
        if(book[i].indexOf(p) >= 0) {
            backSearch = i;
        }
    }

    return Math.min(frontSearch, backSearch)

}  

console.log(pageCount(7, 3));

//////// BEST SOLUTION

function pageCount(n, p) {
    return Math.min(Math.floor(p / 2), 
      Math.floor(n / 2) - Math.floor (p / 2));
  }


