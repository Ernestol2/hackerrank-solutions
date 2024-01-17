function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function processData(input) {
    let data = input.split('\n').slice(1).map(n => parseInt(n));

    for (let i = 0; i < data.length; i++) {
        if (isPrime(data[i])) {
            console.log('Prime');
        } else {
            console.log('Not prime');
        }
    }
}

const input = "5\n2\n3\n4\n5\n6";
processData(input);