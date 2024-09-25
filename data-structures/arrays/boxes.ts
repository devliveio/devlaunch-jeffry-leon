const container: number [] = 
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const totalWeight: number = container.reduce((acc, weight) => acc + weight, 0);
const averageWeight: number = totalWeight /container.length

const boxesExceeding: number [] = container.filter(weight => weight > averageWeight)
const countExceeding: number = boxesExceeding.length

console.log(averageWeight)
console.log(countExceeding)




