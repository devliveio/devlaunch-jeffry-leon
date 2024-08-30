interface Payment {
    payout(): void;
}


class CreditCard implements Payment {
    payout(): void {
        console.log ("Processing credit card payment")
    }
}

class DebitCard implements Payment {
    payout(): void {
        console.log ("Processing debit card payment")
    }
}

class PayPal implements Payment {
    payout(): void{
        console.log ("Processing paypal payment")
    }
}

function processPayment(payment: Payment): void{
    payment.payout()
}

const creditCard = new CreditCard()
const debitCard = new DebitCard()
const payPal = new PayPal()

processPayment(creditCard)
processPayment(debitCard)
processPayment(payPal)




