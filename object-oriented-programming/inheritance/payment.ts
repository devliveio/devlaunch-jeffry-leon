class Payment {
    protected amountOfMoney: number
    protected whoReceives: string

    constructor (amountOfMoney: number, whoReceives: string){
        this.amountOfMoney = amountOfMoney
        this.whoReceives = whoReceives
    }


    toString(): string {
        return `Amount: ${this.amountOfMoney}, Receiver: ${this.whoReceives}`
    }


    protected maskNumber(number: number): string {
        const visibleDigits = 4
        const maskedDigits = number.toString().length - visibleDigits
        const maskedSection = '*'.repeat(maskedDigits)
        const visibleSection = number.toString().substring(number.toString().length - visibleDigits)
        return `${maskedSection}${visibleSection}`
      }
    }

class CreditCardPayment extends Payment {
    private cardNumber: number
    private expirationDate: string
    
    constructor(amount: number, payee: string, cardNumber: number, expirationDate: string) {
      super(amount, payee)
      this.cardNumber = cardNumber
      this.expirationDate = expirationDate
    }
    
    toString(): string {
      const maskedCardNumber = this.maskNumber(this.cardNumber)
      return `${super.toString()}, Card Number: ${maskedCardNumber}, Expiration Date: ${this.expirationDate}`
    }
  }
  
  class BankTransferPayment extends Payment {
    private accountNumber: number
    private routingNumber: number
    
    constructor(amount: number, payee: string, accountNumber: number, routingNumber: number) {
      super(amount, payee)
      this.accountNumber = accountNumber
      this.routingNumber = routingNumber
    }
    
    toString(): string {
      const maskedAccountNumber = this.maskNumber(this.accountNumber)
      return `${super.toString()}, Account Number: ${maskedAccountNumber}, Routing Number: ${this.routingNumber}`
    }
  }

  const creditCardPayment = new CreditCardPayment(1000, "John Doe", 1234567890123456, "12/2026")
  console.log(creditCardPayment.toString())
  
  const bankTransferPayment = new BankTransferPayment(2200, "Jane Smith", 9876543210, 123456789)
  console.log(bankTransferPayment.toString())
