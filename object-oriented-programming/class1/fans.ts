class Fan{
    private speedSettings: number;
    private size: boolean;
    private powerMeasured: number;
    private type: string;
    private color: string;

    constructor(speedSettings: number, size: boolean, powerMeasured: number, type: string, color: string){
        this.speedSettings = speedSettings;
        this.size = size;
        this.powerMeasured = powerMeasured;
        this.type = type;
        this.color = color;
    }

    getSpeed(): number {
       return this.speedSettings
    }

    setSpeed(speedSettings: number): void {
        this.speedSettings = speedSettings
    }

    issize(): boolean{
        return this.size
    }

    setsize(size: boolean): void{
        this.size = size
    }

    getpowerMeasure(): number{
        return this.powerMeasured
    }

    setpowerMeasured(powerMeasured: number): void{
        this.powerMeasured = powerMeasured
    }

    gettype(): string{
        return this.type
    }

    settype(type: string): void{
        this.type = type
    }

    getcolor(): string{
        return this.color
    }

    setcolor(color: string){
        this.color = color
    }

    toString(): string{
        return `Speed: ${this.speedSettings}, Size: ${this.size}, PowerMeasure: ${this.powerMeasured}, Type: ${this.type}, Color: ${this.color}`
    
    }

}

