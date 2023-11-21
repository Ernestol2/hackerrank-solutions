interface AdvancedArithmetic {
    divisorSum(n: number): number;
}

class Calculator implements AdvancedArithmetic {
    divisorSum(n: number) {
        let arr = [];
        for (let i=1; i <= n; i++) {
            if (n%i === 0) arr.push(i);
        }
        return arr.reduce((acc,cur) => acc+cur, 0);
    }
}

function main() {
    const n = readLine();
    const myCalculator = new Calculator();
    
    const sum = myCalculator.divisorSum(+n);
    console.log('I implemented: AdvancedArithmetic');
    console.log(sum);
}