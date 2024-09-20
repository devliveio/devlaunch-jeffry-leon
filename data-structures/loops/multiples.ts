function sumOfMultiplesFor(stopping: number): number {
    let result = 0

for (let i = 0; i < stopping; i++) {
	if (i % 2 === 0 && i % 8 === 0){
    result += i


}
}
return result

}

function sumOfMultiplesWhile(stopping: number): number {
    let result = 0
    let i = 0 

    while (i < stopping){
        if (i % 2 === 0 && i % 8 === 0){
            result += i
        }

        i++
    }

    return result
}

const maxNumber = 100
const sumFor = sumOfMultiplesFor (maxNumber)
const sumWhile = sumOfMultiplesWhile (maxNumber)

console.log(`The result of the sum of multiples using for loop is: ${sumFor}`)
console.log(`The result of the sum of multiples using while loop is: ${sumWhile}`)

