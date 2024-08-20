class Car {
    public brand: string
    public model: string
    private year: number
    private owner: string
    private basePrice: number
    private depreciationRate: number

    constructor(brand: string, model: string, year: number, owner: string, basePrice: number, depreciationRate: number){
        this.brand = brand
        this.model = model
        this.year = year
        this.owner = owner
        this.basePrice = basePrice
        this.depreciationRate = depreciationRate
    }

    calculateAge(): number{
        const currentYear = new Date().getFullYear()
        return currentYear - this.year

    }

    calculatePrice(): number {
        const age = this.calculateAge()
        let price = this.basePrice * (1-this.depreciationRate)

        if (age > 10 && age <= 20){
            price *= 0.8
            }else if (age > 20 ){
                price *= 0.5
            }

            return price
        } 
    }

    class CarComparator {
        static compareByPricePerYear(car1: Car, car2: Car): Car {
          const pricePerYear1 = car1.calculatePrice() / car1.calculateAge()
          const pricePerYear2 = car2.calculatePrice() / car2.calculateAge()
      
          return pricePerYear1 < pricePerYear2 ? car1 : car2
        }
      }
      
const car1 = new Car("Toyota", "Camry", 2015, "John", 20000, 0.1)
const car2 = new Car("Honda", "Accord", 2010, "Alice", 15000, 0.12)

console.log("Car 1 price:", car1.calculatePrice())
console.log("Car 2 price:", car2.calculatePrice())

const cheaperCar = CarComparator.compareByPricePerYear(car1, car2)
console.log("Cheaper car per year:", cheaperCar.brand, cheaperCar.model)