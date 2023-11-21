class Calculator {
    constructor() {}
    power(n, p) {
        try {
            if(n >= 0 && p >= 0) {
                return (n ** p) || error;
            } else {
                return 'n and p should be non-negative';
            }
        } catch(error) {
            return 0;
        }
    }
    
    
}