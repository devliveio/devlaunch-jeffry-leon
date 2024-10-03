import PromptSync from "prompt-sync"
const prompt = PromptSync()

function calculateDiscountAmount(n: number, prices: number[]): void{
    let totalCost = 0
    let discount = 0
    let discountPercent = 0.2
    let count = 0

    prices.forEach(price =>{
        totalCost += price
        if (count === n){
            discountPercent /=2
            count = 0
        }

        if (count < n){
            discount += price * discountPercent
            count++
        }
    })
const finalPrice = totalCost - discount

console.log(`Total: ${totalCost.toFixed(2)}`)
console.log(`Discount: ${discount.toFixed(2)}`)
console.log(`Total to pay ${finalPrice.toFixed(2)}`)

}

const Products = Number(prompt(`Quantity of products: `))

const prices: number[] = []

for(let i =0; i < Products; i++){
    const price = Number(prompt(`Product price ${i + 1}: `))
    prices.push(price)
}

calculateDiscountAmount (3, prices)