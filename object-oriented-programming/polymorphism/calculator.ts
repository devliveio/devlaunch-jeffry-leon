import PromptSync from 'prompt-sync'
const prompt = PromptSync()

interface Operation {
    perform(a: number, b: number): void
}

class Calculator implements Operation{
    protected result: number
    constructor(){
    this.result = 0
}
getResult(): number{
    return this.result
}
perform(a: number, b: number): void {
    console.log("Performing basic operation")
}
add(a: number, b: number): void {
    this.perform(a, b)
    this.result = a + b
  }

  subtract(a: number, b: number): void {
    this.perform(a, b)
    this.result = a - b
  }

  multiply(a: number, b: number): void {
    this.perform(a, b)
    this.result = a * b
  }

  divide(a: number, b: number): void {
    this.perform(a, b)
    if (b !== 0) {
      this.result = a / b
    } else {
      console.log("Error: Division by zero")
    }
  }
}

class ScientificCalculator extends Calculator {
  perform(a: number, b: number): void {
    console.log("Performing scientific operation")
  }

  square(a: number): void {
    this.perform(a, 0)
    this.result = Math.pow(a, 2)
  }

  cube(a: number): void {
    this.perform(a, 0) 
    this.result = Math.pow(a, 3)
  }

  squareRoot(a: number): void {
    this.perform(a, 0)
    this.result = Math.sqrt(a)
  }
}

function performBasicCalculation(calc: Calculator, operationType: string, a: number, b: number): void {
  switch (operationType) {
    case "add":
      calc.add(a, b)
      break
    case "subtract":
      calc.subtract(a, b)
      break
    case "multiply":
      calc.multiply(a, b)
      break
    case "divide":
      calc.divide(a, b)
      break
    default:
      console.log("Invalid operation type for basic calculator.")
  }
}

function performScientificCalculation(calc: ScientificCalculator, operationType: string, a: number): void {
  switch (operationType) {
    case "square":
      calc.square(a)
      break
    case "cube":
      calc.cube(a)
      break
    case "squareRoot":
      calc.squareRoot(a)
      break
    default:
      console.log("Invalid operation type for scientific calculator.")
  }
}

const calculatorType = prompt("Choose calculator type (basic, scientific): ")

if (calculatorType === "basic") {
  const operationTypeBasic = prompt("Enter the basic operation type (add, subtract, multiply, divide): ")
  const userInputA = parseFloat(prompt("Enter the first number: "))
  const userInputB = parseFloat(prompt("Enter the second number: "))

  const basicCalc = new Calculator()
  performBasicCalculation(basicCalc, operationTypeBasic, userInputA, userInputB)
  console.log("Basic Calculator Result:", basicCalc.getResult())
} else if (calculatorType === "scientific") {
  const operationTypeSci = prompt("Enter the scientific operation type (square, cube, squareRoot): ")
  const userInputNumber = parseFloat(prompt("Enter the number for scientific calculation: "))

  const sciCalc = new ScientificCalculator()
  performScientificCalculation(sciCalc, operationTypeSci, userInputNumber)
  console.log("Scientific Calculator Result:", sciCalc.getResult())
} else {
  console.log("Invalid calculator type.")
}

