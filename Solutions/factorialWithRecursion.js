function factorial(n) {

    if(n < 2) {
     return 1;
    } else {
     let fact = n * factorial(n - 1);
      return fact;
     }
    
 }
 
 console.log(factorial(5));