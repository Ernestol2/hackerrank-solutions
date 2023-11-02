function findCandles(candles) {

    let biggest = Math.max(...candles)
    
    return candles.filter((candle) => candle === biggest).length
}

console.log(findCandles([4,4,1,3]));