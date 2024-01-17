function saveThePrisoner(n, m, s) {
    return (s+m - 1) % n;
}

console.log(saveThePrisoner(4, 6, 2));