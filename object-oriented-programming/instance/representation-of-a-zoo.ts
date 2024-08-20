class Zoo {
    static print() {
        throw new Error("Method not implemented.");
    }
    private _zooName: string;
    private _address: string;
    private _Animal: Animal;

    constructor(zooName: string, address: string, Animal: Animal){
        this._zooName = zooName;
        this._address = address;
        this._Animal = Animal
    }

    get ZooName(): string{
        return this._zooName
    }

    get Address(): string{
        return this._address
    }

    get Animal(): Animal{
        return this._Animal
    }

    print(): void {
        console.log(`Name: ${this.ZooName}`)
        console.log(`Address: ${this.Address}`)
        console.log(`Animal: ${this.Animal}`)
    }

}

class Animal {
    private _animalName: string;
    private _species: string;
    private _age: number;

    constructor(AnimalName: string, Species: string, age: number ){
        this._animalName = AnimalName;
        this._species = Species;
        this._age = age
    }

    get AnimalName(): string{
        return this._animalName
    }

    get Species(): string{
        return this._species
    }

    get Age(): number{
        return this._age
    }

    print(): void{
        console.log(`Animal Name: ${this.AnimalName}`)
        console.log(`Species: ${this.Species}`)
        console.log(`Age: ${this.Age}`)
    }
}

let lion1 = new Animal ("Lion", "Mammal", 5)
let Zoo1 = new Zoo ("Zoo", "123 Main St", lion1)



Zoo.print()

