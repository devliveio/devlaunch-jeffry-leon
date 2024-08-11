class Airport {
    private airportCode: string;
    private flightStatus: string;
    private location: string;
    private numberOfGates: number;

    constructor(airportCode: string, flightStatus: string, location: string, numberOfGates: number) {
        this.airportCode = airportCode;
        this.flightStatus = flightStatus;
        this.location = location;
        this.numberOfGates = numberOfGates;
    }
    
    getAirportCode(): string {
        return this.airportCode
    }

    setAirportCode(airportCode: string): void{
        this.airportCode = airportCode
    }

    getFlightStatus(): string {
        return this.flightStatus
    }

    setFlightStatus(flightStatus: string): void {
        this.flightStatus = flightStatus
    }

    getLocation(): string {
        return this.location
    }

    setLocation(location: string): void {
        this.location = location

    }

    getNumberOfGates(): number {
        return this.numberOfGates
    }

    setNumberOfGates(numberOfGates: number): void {
        this.numberOfGates = numberOfGates
    }

    toString (): string {
        return `Airport Code: ${this.airportCode}, Flight Status: ${this.flightStatus}, Location: ${this.location}, Number Of Gates: ${this.numberOfGates}`
    }

}

let airport = new Airport("LAX","Good", "Los Angeles, CA", 100)
console.log(airport.toString())