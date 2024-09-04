import PromptSync from "prompt-sync"
const prompt = PromptSync()

abstract class Beverage {
abstract prepare(): void
abstract serve(): void
abstract customize(): void
}

class Coffee extends Beverage {
    prepare() {
      console.log("Grinding beans and brewing coffee")
    }
  
    serve() {
      console.log("Your coffee is served!")
    }
  
    customize() {
      console.log("Customizing your coffee:")
      console.log("1. Add milk")
      console.log("2. Add sugar")
      const choice = prompt("Enter your choice (1/2): ")
      switch (choice) {
        case "1":
          console.log("Added milk to the coffee")
          break
        case "2":
          console.log("Added sugar to the coffee")
          break
        default:
          console.log("Invalid choice")
          break
      }
    }
  }

  class Tea extends Beverage {
    prepare() {
      console.log("Steeping tea leaves")
    }
  
    serve() {
      console.log("Your tea is served!")
    }
  
    customize() {
      console.log("Customizing your tea:")
      console.log("1. Add ice")
      console.log("2. Add honey")
      const choice = prompt("Enter your choice (1/2): ")
      switch (choice) {
        case "1":
          console.log("Added lemon to the tea")
          break
        case "2":
          console.log("Added honey to the tea")
          break
        default:
          console.log("Invalid choice")
          break
      }
    }
  }

  class Soda extends Beverage {
    prepare() {
      console.log("Adding carbonation to soda")
    }
  
    serve() {
      console.log("Your soda is served!")
    }
  
    customize() {
      console.log("Customizing your soda:")
      console.log("1. Add ice cream")
      console.log("2. Add lemon slice")
      const choice = prompt("Enter your choice (1/2): ")
      switch (choice) {
        case "1":
          console.log("Added ice cream to the soda")
          break
        case "2":
          console.log("Added lemon slice to the soda")
          break
        default:
          console.log("Invalid choice")
          break
      }
    }
  }

  class OnlineCoffeeShop {
    placeOrder(beverage: Beverage) {
      console.log("Placing order...")
      beverage.prepare()
      beverage.customize()
      beverage.serve()
    }
  }

const coffee = new Coffee()
const tea = new Tea()
const soda = new Soda()

const onlineCoffeeShop = new OnlineCoffeeShop()
onlineCoffeeShop.placeOrder(coffee)
onlineCoffeeShop.placeOrder(tea)
onlineCoffeeShop.placeOrder(soda)
  