// fibonacci.js - A module to calculate the Fibonacci series

function generateFibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    
    let series = [0, 1];
    for (let i = 2; i < n; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }
    return series;
}

const terms = 10;
console.log(`Fibonacci series up to ${terms} terms:`, generateFibonacci(terms));