function unionArrays(array1: number[], array2: number[]) {
    const unionArray: number [] = []
    
    for(const num of array1){
    if (!unionArray.includes(num)) {
      unionArray.push(num);
    }
    
  }
  
  for(const num of array2){
    if (!unionArray.includes(num)) {
      unionArray.push(num);
    }
    
  }

  return unionArray

}
  
const array1: number[] = [1, 2, 3]
const array2: number[] = [100, 2, 1, 1]
console.log(unionArrays(array1, array2))


function exclusiveNumber (arrays1: number[], arrays2: number[]) {
    const exclusiveArray: number [] = []

    for(const num of arrays1){
        if (!arrays2.includes(num) && !exclusiveArray.includes(num)) {
          exclusiveArray.push(num)
        }
        
      }
      
      for(const num of array2){
        if (!array1.includes(num) && !exclusiveArray.includes(num)) {
          exclusiveArray.push(num);
        }
        
      }
    
      return exclusiveArray
    
    }

const arrays1: number[] = [1, 2, 3]
const arrays2: number[] = [100, 2, 1, 1]
console.log(exclusiveNumber(array1, array2))





