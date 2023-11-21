function bonAppetit(bill, k, b) {
    const notEaten = bill[k]
    let totalCost = bill.reduce((acc, cu) => acc + cu, 0);
    let splitedBill = (totalCost - notEaten) / 2;
    
    
    if(splitedBill === b) {
        console.log('Bon Appetit');
    } else {
        console.log(b - splitedBill);
    }

}

(bonAppetit([3,10,2,9], 1, 12));