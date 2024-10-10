import PromptSync from "prompt-sync"
const prompt = PromptSync()

class FoodVendingMachine{
    private products: {[key: string]: number} ={
        A: 270,
        B: 340,
        C: 390
    }

    private validCoins: number[] = [10, 50, 100]

    private getProductPrice(productType: string): number | undefined {
        return this.products[productType]
    }

    public purchaseProduct(productType: string): string {
        const price = this.getProductPrice(productType)
        if (price === undefined) {
            return "Invalid Option"
        }

        let amountPaid = 0 
            while (amountPaid < price){
                const coin = parseInt(prompt("Enter the coin: "))
                if (!this.validCoins.includes(coin)){
                    return "invalida coin, Please enter a correct coin."
                }

                amountPaid += coin
                console.log (`current amount paid: ${amountPaid}`)
            }

            if (amountPaid > price){
                const change = amountPaid - price
                return `Your change is: ${change}`
            }

            return "Thanks for you purchase"
        }
    }
const vendingMachine = new FoodVendingMachine()
const productType = prompt("Enter the product")
const result = vendingMachine.purchaseProduct(productType.toUpperCase())
console.log(result)
    




