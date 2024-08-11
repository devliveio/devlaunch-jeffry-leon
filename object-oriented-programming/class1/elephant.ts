class elephant{
    private robust: string;
    private memory: string;
    private largestLivingAnimal: string;

    constructor(robust: string, memory: string, largestLivingAnimal: string){
        this.robust = robust
        this.memory = memory
        this.largestLivingAnimal = largestLivingAnimal
    }

    getRobust(): string{
        return this.robust
    }
    
    setRobust(robust: string): void{
        this.robust = robust
    }

    getMemory(): string{
        return this.memory
    }

    setMemory(memory: string): void{
        this.memory = memory
    }

    getLargestlivinganimal(): string{
        return this.largestLivingAnimal 
    }

    setLargestlivinganimal(largestLivingAnimal: string): void{
        this.largestLivingAnimal = largestLivingAnimal
    }
    
    toString(): string{
        return `Robust: ${this.robust}, Memory: ${this.memory}, Largestlivinganimal: ${this.largestLivingAnimal}`


    }

}