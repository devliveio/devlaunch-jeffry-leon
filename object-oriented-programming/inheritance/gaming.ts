class Character {
    public name: string
    protected health: number

    constructor (name: string, health: number){
        this.name = name
        this.health = health
    }

    attack(target: Character){
        console.log(`${this.name} attacks ${target.name}`)
    }

    defend(){
        console.log(`${this.name} defends`)
    }
  } 

  class Warrior extends Character {
    private meleeWeapon: string

    constructor (name: string, health: number, meleeWeapon: string){
        super (name, health)
        this.meleeWeapon = meleeWeapon
    }

    WeaponAttack(target: Character){
        console.log(`${this.name} attacks ${target.name} with ${this.meleeWeapon}` )
    }
}

class Wizard extends Character {
    private wand: string

    constructor (name: string, health: number, wand: string){
        super (name, health)
        this.wand = wand
    }

    CastingSpells(target: Character){
        console.log(`${this.name} casts a spell on ${target.name} with ${this.wand}`)
    }

}

class Rogue extends Character {
    private agility: string

    constructor (name: string, health: number, agility: string){
        super (name, health)
        this.agility = agility
    }

    secretExploration() {
        console.log(`Preparing ${this.agility} on a  secret mission`)
      }
    
      sneakAttack(target: Character) {
        console.log(`${this.name} performs a sneak attack on ${target.name}`)
      }
    }
    const warrior = new Warrior("Aragorn", 100, "melee")
    const mage = new Wizard("Gandalf", 80, "Magic Wand")
    const rogue = new Rogue("Legolas", 90, "sneak attack")
    
    warrior.attack(mage) 
    mage.CastingSpells(rogue) 
    rogue.sneakAttack(warrior)
    
