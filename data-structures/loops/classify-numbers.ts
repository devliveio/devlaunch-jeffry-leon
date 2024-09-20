const isOdd = "Odd"
const isEven = "Even"

function ClassifyNumbers(numberToReach: number): string {
    let result = ""

for (let i = 1; i < numberToReach; i++) {
	const Num = i % 2 === 1 ? isOdd : isEven
    result += `${i} is ${Num}\n`


}

return result

}

console.log(ClassifyNumbers(50))




