class Employee {
    constructor(private firstName: string, private lastName: string, private departmentType: string, private salary: number ){}
    
    getDepartmentType(){
        return this.departmentType
    }
    
    
    getSalary(){
        return this.salary
    }
}


class Department {
    constructor (public name: string, public employee: Employee){}

}

class Company {
    private marketing?: Employee
    private socialMedia?: Employee
    private sales?: Employee
    private name: string

    constructor(name: string){
        this.name = name
    }


    addEmployee(employee: Employee){
        const departmentType = employee.getDepartmentType()
        this.marketing = departmentType === "marketing" ? employee : this.marketing
        this.sales = departmentType === "sales" ? employee : this.sales
        this.socialMedia = departmentType === "social media" ? employee: this.socialMedia
    }

    totalSalary(){
        let totalSalary = 0
        if (this.marketing){
            totalSalary += this.marketing.getSalary()
        }

        if (this.sales){
            totalSalary += this.sales.getSalary()
        }

        if (this.socialMedia){
            totalSalary += this.socialMedia.getSalary()

        }

        return totalSalary
    }
}

const marketingEmployee = new Employee("marketing", "John", "Doe", 1500)
const salesEmployee = new Employee("sales", "Jane", "Doe", 2000)
const socialMediaEmployee = new Employee("social media", "Alice", "Smith", 1800)

const company = new Company("AB-COMPANY")

company.addEmployee(marketingEmployee)
company.addEmployee(salesEmployee)
company.addEmployee(socialMediaEmployee)

console.log("The total salary is: $" + company.totalSalary())


