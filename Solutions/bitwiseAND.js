function bitwiseAnd(N, K) {
    // Write your code here
    if (((K - 1) | K) <= N) { 
        return K - 1; 
    } else { 
        return K - 2; 
    }

}