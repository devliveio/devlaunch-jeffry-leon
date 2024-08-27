abstract class Animal {
    protected name: string
    protected age: number

    constructor (name: string, age: number){
        this.name = name
        this.age = age
    }

    getName(): string {
        return this.name
    }

    getAge(): number {
        return this.age
    }

   abstract getDescription(): string

   abstract calculateLifespan(): number
}

class Dog extends Animal {
    private breed: string
    private averageLifespan: number = 12

    constructor (name: string, age: number, breed: string){
        super (name, age)
        this.breed = breed
    }

    getBreed(): string {
        return this.breed
    }

    getDescription(): string {
        return `Name: ${this.name}, Age: ${this.age}, Breed: ${this.breed}`
      }

      calculateLifespan(): number {
        return this.averageLifespan - this.age
      }
    }  

    class Cat extends Animal {
        private color: string
        private averageLifespan: number = 15

        constructor (name: string, age: number, color: string){
            super(name, age)
            this.color = color
    }

    getColor(): string {
        return this.color
    }

    getDescription(): string {
        return `Name: ${this.name}, Age: ${this.age}, Color: ${this.color}`
      }

      calculateLifespan(): number {
        return this.averageLifespan - this.age
      }
    }

const dog = new Dog("Buddy", 5, "Golden Retriever")
console.log(dog.getDescription())
console.log(`Remaining lifespan: ${dog.calculateLifespan()} years`)

const cat = new Cat("Whiskers", 3, "Tabby")
console.log(cat.getDescription())
console.log(`Remaining lifespan: ${cat.calculateLifespan()} years`)
    


