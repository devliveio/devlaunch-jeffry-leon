abstract  class Vehicle {
    protected model: string
    protected year: number
    protected manufacturer: string

    constructor (model: string, year: number, manufacturer: string){
        this.model = model
        this.year = year
        this.manufacturer = manufacturer
    }
    
abstract toString(): string

}

class Car extends Vehicle {
    private engine: string
    private fuelCapacity: number
    private fuelEfficiency: number

    constructor (model: string, year: number, manufacturer: string, engine: string, fuelCapacity: number, fuelEfficiency: number){
        super(model, year, manufacturer)
        this.engine = engine
        this.fuelCapacity = fuelCapacity
        this.fuelEfficiency = fuelEfficiency
    }

    getEngine(): string {
        return this.engine
      }

    calculateMaxRange(): number {
        return this.fuelCapacity * this.fuelEfficiency
      }

      toString(): string {
        return `Car: Model - ${this.model}, Year - ${this.year}, Manufacturer - ${this.manufacturer}, Engine - ${this.engine}, Fuel Capacity - ${this.fuelCapacity} gallons, Fuel Efficiency - ${this.fuelEfficiency} mpg`
      }
      
    }

    class Motorcycle extends Vehicle {
        private type: string
        private engineDisplacement: number

        constructor (model: string, year: number, manufacturer: string, type: string, engineDisplacement: number){
            super (model, year, manufacturer)
            this.type = type
            this.engineDisplacement = engineDisplacement
        }

        getType(): string {
            return this.type
        }

        getEngineDisplacement(): number {
            return this.engineDisplacement
        }

        toString(): string {
            return `Motorcycle: Model - ${this.model}, Year - ${this.year}, Manufacturer - ${this.manufacturer}, Type - ${this.type}, Engine Displacement - ${this.engineDisplacement} cc`
          }
    }

const car = new Car("Toyota Camry", 2020, "Toyota", "V6", 15, 30)
console.log(car.toString())

const motorcycle = new Motorcycle("Honda CB500X", 2021, "Honda", "Adventure", 500)
console.log(motorcycle.toString())


      
      







