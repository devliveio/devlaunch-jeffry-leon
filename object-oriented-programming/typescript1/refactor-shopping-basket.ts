const applePrice: number = 1.5
const bananaPrice: number = 0.75
const avocadoPrice: number = 2.0
const discount: number = 0.9

function calculateTotalCost(item1Quantity: number, item2Quantity: number, item3Quantity: number,hasDiscount: number) {
    let totalCost: number = item1Quantity * applePrice + item2Quantity * bananaPrice + item3Quantity * avocadoPrice;
    if (hasDiscount) {
        totalCost *= discount
}
return totalCost;
}
const appleQty: number = 2
const bananaQty: number = 3
const avocadoQty: number = 1
const hasDiscount: boolean = true
console.log(`Total cost: $${calculateTotalCost(appleQty, bananaQty, avocadoQty, discount).toFixed(2)}`)