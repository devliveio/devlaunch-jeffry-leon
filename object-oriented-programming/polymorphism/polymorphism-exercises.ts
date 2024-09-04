interface Animal {
    move(): void;
} 

class Fish implements Animal {

    move(): void {
        console.log("Swimming")
    }
}

class Bird implements Animal {
    move(): void {
        console.log("Flying")
    }
}

class Human implements Animal {
    move(): void {
        console.log("Walking")
    }
}

function displayMovement(animal: Animal): void{
    animal.move()
}

const fish = new Fish()
const bird = new Bird()
const human = new Human()

displayMovement(fish)
displayMovement(bird)
displayMovement(human)