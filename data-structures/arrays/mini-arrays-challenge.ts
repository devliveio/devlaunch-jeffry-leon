function isPrime (number: number): boolean {
    for (let i = 2; i <= Math.sqrt(number); i++){
        if(number % i === 0){
            return false
        }
    }

    return true;
}

console.log (isPrime)


function smallestPrime(numbers: number[]): number | undefined {
    let smallestPrime: number | undefined;
  
    for (const num of numbers) {
      if (isPrime(num)) {
        if (smallestPrime === undefined || num < smallestPrime) {
          smallestPrime = num
        }
      }
    }
    return smallestPrime
  }


const testNumbers: number [] = [20, 21, 22, 23, 24, 25]
console.log(smallestPrime(testNumbers))

