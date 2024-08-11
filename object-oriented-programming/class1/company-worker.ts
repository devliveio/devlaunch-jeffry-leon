class Employee {
	private _salary: number

	constructor(salary: number) {
		this.salary = salary
	}

	get salary(): number {
		return this.salary
	}

	set salary(amount: number) {
		if (amount > 0) {
			this._salary = amount
		} else {
			throw new Error('Salary must be a positive number.')
		}
	}
}


    
     