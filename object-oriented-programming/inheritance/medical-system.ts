class Patient {
    protected name: string
    protected dateOfBirth: string
    protected insuranceNumber: number

    constructor (name: string, dateOfBirth: string, insuranceNumber: number){
        this.name = name
        this.dateOfBirth = dateOfBirth
        this. insuranceNumber = insuranceNumber
    }


    print(): void {
        console.log(`Name: ${this.name}`)
        console.log(`Date of birthday: ${this.dateOfBirth}`)
        console.log(`Insurance Number: ${this.insuranceNumber}`)

    }
}

class Outpatient extends Patient {
    protected doctorVisited: string
    protected consultationCost: number
    protected medicinesPurchased: number

    constructor (name: string, dateOfBirth: string, insuranceNumber: number, doctorVisited: string, consultationCost: number, medicinesPurchased: number){
        super (name, dateOfBirth, insuranceNumber)
        this.insuranceNumber = insuranceNumber
        this.doctorVisited = doctorVisited
        this.consultationCost = consultationCost
        this.medicinesPurchased = medicinesPurchased
    }

    print(): void {
        super.print()
        console.log(`Doctor: ${this.doctorVisited}
            Consultation Cost: ${this.consultationCost}
            Medicines Purchased: ${this.medicinesPurchased}`)
      }
    }

    class Inpatient extends Patient {
        protected roomType: string
        protected daysStayed: number
        protected additionalTreatments: number

        constructor (name: string, dateOfBirth: string, insuranceNumber: number, roomType: string, daysStayed: number, additionalTreatments: number){
            super (name, dateOfBirth, insuranceNumber)
            this.roomType = roomType
            this.daysStayed = daysStayed
            this.additionalTreatments = additionalTreatments
        }

        print(): void {
            super.print()
            console.log(`Room Type: ${this.roomType}
                Number of Days Stayed: ${this.daysStayed}
                Additional Treatments Taken: ${this.additionalTreatments}`)
          }
        }
    
let patient2 = new Outpatient("Mary", "02/02/1991", 987654321, "Dr. Smith", 100, 50)
let patient3 = new Inpatient("Peter", "03/03/1992", 135792468, "Private", 5, 2)

patient2.print()
patient3.print()
