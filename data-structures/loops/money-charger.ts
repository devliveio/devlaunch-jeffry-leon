import PromptSync from "prompt-sync"
const prompt = PromptSync()

function pesosToDollars (pesos: number){
    return pesos / 3600
} 

function DollarsToPesos (dollars: number){
    return dollars * 3600
}

function pesosToEuros (pesos: number){
    return pesos /4200
}

function eurosToPesos (euros: number){
    return euros * 4200
}

function menu(){
    let option: number = 0

    do {
        console.log("1. Convert pesos to dollars")
        console.log("2. Convert dollars to pesos")
        console.log("3. Convert euros to pesos")
        console.log("4. Convert pesos to euros")
        console.log("5. Exit")
        option = parseInt(prompt("Enter an option: "))

        if (option >= 1 && option <= 4){
            let value = parseFloat(prompt("Enter the value: "))
            if (isNaN(value)) {
                console.log("Invalid input. Please enter a valid numeric value.")
                continue
        }

        switch (option) {
            case 1:
                console.log(`The value in dollars is: ${pesosToDollars(value)}`)
                break
            case 2:
                console.log(`The value in pesos is: ${DollarsToPesos(value)}`)
                break
            case 3:
                console.log(`The value in pesos is: ${eurosToPesos(value)}`)
                break
            case 4:
                console.log(`The value in euros: ${pesosToEuros(value)}`)
                break
    }
    } else if (option !== 5) {
        console.log("Invalid option. Enter a number between 1 and 5.")
    }


    } while(option !== 5)
}

menu()
