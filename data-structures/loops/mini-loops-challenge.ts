function totalSumOfPowers (exponent: number ): number {
    let sum = 0 
    for (let i = 0; i <= exponent; i++){
        sum += 2 ** i
    }

    return sum
}

function SumOfFibonacci(n: number ): number {
    if (n <= 0) return 0
    if (n === 1) return 1

    let sum: number = 0
    let a: number = 0
    let b: number = 1

    for (let i = 2; i <= n; i++) {
        const temp: number = a + b
        sum += temp
        a = b
        b = temp
    }

    return sum + 1
}

function sumOfCube (n: number): number {
    let sum: number = 0
    for (let i = 1; i <= n; i += 2) {
        sum += i ** 3
    }
return sum
}

console.log("1. Total sum of powers of 2 from 2^1 to 2^64",totalSumOfPowers(64))
console.log("2. Sum of the first 'n' numbers in a Fibonacci-like sequence", SumOfFibonacci(10))
console.log("3. Sum of the terms in the series 1^3 + 3^3 + 5^3 + ... + n^3", sumOfCube(10))


