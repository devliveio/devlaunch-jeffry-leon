const container: number[] =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const totalWeight: number = container.reduce((accumulator, weight) => accumulator + weight, 0)
const averageWeight: number = totalWeight / container.length 

const exceedingAverage: number [] = container.filter(wight => wight > averageWeight)
const countExceedingAverage: number = exceedingAverage.length

console.log(averageWeight)
console.log(countExceedingAverage)



