function kangaroo(x1, v1, x2, v2) {
    if (v1 === v2) {
        if (x1 === x2) {
            return 'YES';
        } else {
            return 'NO';
        }
    }
    console.log((x2-x1) / (v1-v2));
    const jumps = (x2 - x1) / (v1 - v2);
    if (jumps >= 0 && Number.isInteger(jumps)) {
        return 'YES';
    } else {
        return 'NO';
    }
}

console.log(kangaroo(0, 2, 0, 6));