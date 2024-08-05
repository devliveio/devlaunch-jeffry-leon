const car = {
    createCar (brandName, model, weight, color){
        return {
            brandName,
            model,
            weight,
            color,

            printDetails(){
                console.log(`Name: $${this.brandName}, Model: ${this.model}, weight: ${this.weight}, Color: ${this.color}`)
            },
            action(actionName) {
                console.log(`${this.name} is ${actionName}`)
              },
              start() {
                this.action("starting")
              },
              stop() {
                this.action("stopping")
              },
              drive() {
                this.action("on the road")
              },
              brake() {
                this.action("braking")
              }
            }
          }
        }
        
        const toyotaCamry = car.createCar("Toyota", "Camry", 1000, "red")
        
        toyotaCamry.printData()
        toyotaCamry.start()
        toyotaCamry.stop()
        toyotaCamry.drive()
        toyotaCamry.brake()