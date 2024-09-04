interface JobRole {
    work(): void
}
class Programmer implements JobRole {
    constructor (private name: string){}
    work(): void{
        console.log(`${this.name} is coding and debugging`)
}}
class Designer implements JobRole {
    constructor (private name: string){}
    work(): void{
        console.log (`${this.name} is creating visual Designs`)
}}
class Administrator implements JobRole {
    constructor (private name: string){}
    work(): void{
        console.log (`${this.name} is managing projects and teams`)
}}

const programmer = new Programmer("John")
programmer.work()
const designer = new Designer("Alice")
designer.work()
const administrator = new Administrator("Bob")
administrator.work()



