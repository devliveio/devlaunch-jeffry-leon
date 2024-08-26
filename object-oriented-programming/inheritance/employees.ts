class Employee {
    constructor(
      protected name: string,
      protected address: string,
      protected hireDate: string
    ) {}
  
    print(): void {
      console.log(`Name: ${this.name}, Address: ${this.address}, Hire Date: ${this.hireDate}`)
    }

    calculateGrossPay(hoursWorked: number): string {
        const grossAmount = this.calculateGrossAmount(hoursWorked)
        return `The amount paid to ${this.name} is $${grossAmount}`
      }
    
      protected calculateGrossAmount(hoursWorked: number): number {
        return 0
      }
    }

    class FullTimeEmployee extends Employee {
        constructor(
          name: string,
          address: string,
          hireDate: string,
          private fixedRateOfPay: number
        ) {
          super(name, address, hireDate)
        }
      
        protected calculateGrossAmount(hoursWorked: number): number {
          return this.fixedRateOfPay * hoursWorked
        }
      }

      class PartTimeEmployee extends Employee {
        constructor(
          name: string,
          address: string,
          hireDate: string,
          private fixedRateOfPay: number,
          private partTimeMultiplier: number
        ) {
          super(name, address, hireDate)
        }
      
        protected calculateGrossAmount(hoursWorked: number): number {
          return this.fixedRateOfPay * this.partTimeMultiplier * hoursWorked
        }
      }

      class ContractedEmployee extends Employee {
        constructor(
          name: string,
          address: string,
          hireDate: string,
          private hourlyRate: number
        ) {
          super(name, address, hireDate)
        }
      
        protected calculateGrossAmount(hoursWorked: number): number {
          return this.hourlyRate * hoursWorked
        }
      }
      
      
let fullTimeEmployee = new FullTimeEmployee("John Smith", "123 Main Street", "01/01/2019", 1000)
let partTimeEmployee = new PartTimeEmployee("Jane Doe", "456 Main Street", "01/01/2019", 1000, 0.5)
let contractedEmployee = new ContractedEmployee("John Doe", "789 Main Street", "01/01/2019", 100)

fullTimeEmployee.print()
partTimeEmployee.print()
contractedEmployee.print()

console.log(fullTimeEmployee.calculateGrossPay(40))
console.log(partTimeEmployee.calculateGrossPay(40))
console.log(contractedEmployee.calculateGrossPay(40))
