function chocolateFeast(n, c, m) {
    // Write your code here
    let numWraps = n / c;
    const result = [];
    result[0] = numWraps;
  
    while (numWraps >= m) {
      let tradeCount = Math.floor(numWraps / m);
      result.push(tradeCount);
      numWraps -= tradeCount * m;
      numWraps += tradeCount;
    }
    return Math.floor(result.reduce((acc, curr) => acc + curr));
  }
  
  console.log(chocolateFeast(2339, 4, 1337));
  
  /* ANOTHER SOLUTION */
  
  /* 
  function chocolateFeast(n, c, m) {
      let totalChocolates = Math.floor(n / c);
      let wrappers = totalChocolates;
  
      while (wrappers >= m) {
          const newChocolates = Math.floor(wrappers / m);
          totalChocolates += newChocolates;
          wrappers = wrappers % m + newChocolates;
      }
  
      return totalChocolates;
  }
  */