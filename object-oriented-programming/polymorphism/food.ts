abstract class Food {
   private name: string
   private calories: number

   constructor (name: string, calories: number){
    this.name = name
    this.calories = calories
   }

   getName(): string {
    return this.name
   }

   getCalories(): number {
    return this.calories
   }

   abstract cook(): void
   abstract eat(): void
}


 class Fruit extends Food {
    private isRipe: boolean
    constructor (name: string, calories: number, isRipe: boolean){
        super (name, calories)
        this.isRipe = isRipe
    }

getIsRipe(): boolean {
return this.isRipe
}

ripen(): void {
    this.isRipe = true
}

cook(): void {
    this.ripen
}

eat(): void {
   if (this.isRipe){
    console.log(`You can't eat ${this.getName()} raw.`)
return
   } else {
console.log(`You ate ${this.getName()}.`)
}

}

   }

  class Vegetable extends Food {
    private isHarvested: boolean

    constructor (name:string, calories: number, isHarvested: boolean ){
        super(name,calories)
        this.isHarvested = isHarvested
    }

    getIsHavested(): boolean {
        return this.isHarvested
    }

    harvest(): void{
        this.isHarvested = true
    }

    cook(): void {
        return this.harvest()
    }

    eat(): void {
        if (!this.isHarvested) {
          console.log(`You can't eat ${this.getName()} raw.`)
        } else {
          console.log(`You ate ${this.getName()}.`)
        }
      }
}

class Meat extends Food {
    private isCooked: boolean

    constructor(name: string, calories: number, isCooked: boolean) {
        super(name, calories)
        this.isCooked = isCooked
      }
    
      getIsCooked(): boolean {
        return this.isCooked
      }
    
      cook(): void {
        this.isCooked = true
      }
    
      eat(): void {
        if (!this.isCooked) {
          console.log(`You can't eat ${this.getName()} raw.`)
          return
        } else {
          console.log(`You ate ${this.getName()}.`)
        }
      }
    }
    const apple = new Fruit('Apple', 100, false)
    const carrot = new Vegetable('Carrot', 50, false)
    const steak = new Meat('Steak', 200, false)
    
    apple.cook()
    carrot.cook()
    steak.cook()
    
    apple.eat()
    carrot.eat()
    steak.eat()
   


