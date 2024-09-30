
function sortNumbers (numbers: number[]): number[] {
    const n: number = numbers.length

    for (let i = 0; i < n - 1; i++){
        for (let j = 0; j < n - i - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
              const temp = numbers[j]
              numbers[j] = numbers[j + 1]
              numbers[j + 1] = temp
            }
          }
        }
        return numbers
      }
    
const numbers: number [] = [1, 10, 4, 7, 6, 3]
console.log("Original numbers:", numbers)
const sortedNumbers = sortNumbers(numbers)
console.log("Sorted numbers:", sortedNumbers)
    


