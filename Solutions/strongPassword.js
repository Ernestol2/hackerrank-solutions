function testpasswording(n,password) {
    let missingChars = 0;
  
    if (!/\d/.test(password)) {
      missingChars++;
    }
  
    if (!/[a-z]/.test(password)) {
      missingChars++;
    }
  
    if (!/[A-Z]/.test(password)) {
      missingChars++;
    }
    
    if (!/[!@#$%^&*()+-]/.test(password)) {
      missingChars++;
    }
    console.log(missingChars);
    return Math.max(missingChars, 6 - n);
  }
  
  // Example usage
console.log(testpasswording(7, 'AUzs-nV'));