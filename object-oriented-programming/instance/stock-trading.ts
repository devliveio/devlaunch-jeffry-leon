class Trader {
    private traderName: string
    private accountBalance: number
    
    constructor (traderName: string, accountBalance: number){

        this.traderName
        this.accountBalance
    }
    
    private logTransaction(stockSymbol: string, quantity: number, action: string, pricePerShare: number): void {
        console.log(`${this.traderName} ${action} ${quantity} shares of ${stockSymbol} at $${pricePerShare} per share.`)
}

buyStock(stockSymbol: string, quantity: number, pricePerShare: number): void {
    const totalCost = quantity * pricePerShare
    if (totalCost <= this.accountBalance) {
    this.logTransaction(stockSymbol, quantity, "bought", pricePerShare)
    this.accountBalance -= totalCost
    } else {
    console.log(`${this.traderName} does not have enough funds to buy ${quantity} shares of ${stockSymbol}.`)
}
}

sellStock(stockSymbol: string, quantity: number, pricePerShare: number): void {
    const totalGain = quantity * pricePerShare
    this.logTransaction(stockSymbol, quantity, "sold", pricePerShare)
    this.accountBalance += totalGain

}

viewAccountBalance(): void {
    console.log(`${this.traderName}'s account balance: $${this.accountBalance}`)

    }
}

class StockExchange {
    private trader: Trader

    constructor(trader: Trader) {
        this.trader = trader
      }

      executeBuy(stockSymbol: string, quantity: number, pricePerShare: number): void {
        this.trader.buyStock(stockSymbol, quantity, pricePerShare)
      }

      executeSell(stockSymbol: string, quantity: number, pricePerShare: number): void {
        this.trader.sellStock(stockSymbol, quantity, pricePerShare)
      }

      viewAccountBalance(): void {
        this.trader.viewAccountBalance()
      }
    }

const trader = new Trader("John", 10000)
const stockExchange = new StockExchange(trader)

const trader2 = new Trader("Jane", 12000)
const stockExchange2 = new StockExchange(trader2)

stockExchange2.executeBuy("SOL", 12, 150) 
stockExchange2.executeSell("SOL", 6, 200)
stockExchange2.viewAccountBalance()

stockExchange.executeBuy("AAPL", 10, 150) 
stockExchange.executeSell("AAPL", 5, 160) 
stockExchange.viewAccountBalance()