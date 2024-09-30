const arr1: number[] = [1, 0, 2, 3, 4]
const arr2: number[] = [3, 5, 6, 7, 8, 13, 9]


function sumArrays(arr1: number[], arr2: number[]) {
    const result: number [] = []
    const maxLength = Math.max(arr1.length, arr2.length)
    
    for(let i = 0; i < maxLength; i++){
        const value1 = arr1[i] || 0
        const value2 = arr2[i] || 0
        result.push(value1 + value2)
      
}

    return result;

}
const sumArray = sumArrays (arr1, arr2)
console.log(sumArray)


