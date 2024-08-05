const fraction = {
    createFraction: function (numerator, denominator) {
      return { numerator, denominator }
    },
  
    performOperation: function (fraction1, fraction2, operation) {
      const numerator = operation(fraction1.numerator, fraction2.numerator)
      const denominator = fraction1.denominator * fraction2.denominator
      return this.createFraction(numerator, denominator)
    },
  
    operate: function (fraction1, fraction2, operationFunction) {
      return this.performOperation(fraction1, fraction2, operationFunction)
    },
  
    add: function (fraction1, fraction2) {
      const addOperation = (a, b) => a * fraction2.denominator + b * fraction1.denominator
      return this.operate(fraction1, fraction2, addOperation)
    },
  
    subtract: function (fraction1, fraction2) {
      const subtractOperation = (a, b) => a * fraction2.denominator - b * fraction1.denominator
      return this.operate(fraction1, fraction2, subtractOperation)
    },
  
    multiply: function (fraction1, fraction2) {
      const multiplyOperation = (a, b) => a * b
      return this.operate(fraction1, fraction2, multiplyOperation)
    },
  
    divide: function (fraction1, fraction2) {
      if (fraction2.numerator === 0) {
        throw new Error('Division by zero')
      }
      const divideOperation = (a, b) => a * fraction2.denominator
      return this.operate(fraction1, fraction2, divideOperation)
    }
  }
  
  const fraction1 = fraction.createFraction(2, 4)
  const fraction2 = fraction.createFraction(3, 5)
  
  console.log(fraction.add(fraction1, fraction2)) 
  console.log(fraction.subtract(fraction1, fraction2)) 
  console.log(fraction.multiply(fraction1, fraction2)) 
  console.log(fraction.divide(fraction1, fraction2))