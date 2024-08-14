class TV {

    public static readonly maxVolume: number = 50
    public static readonly minVolume: number = 0
    public static readonly minChannel: number = 1
    public static readonly maxChannel: number = 50


    private _brand: string;
    private _channel: number;
    private _volume: number;
    
    constructor(Brand: string, channel: number, volume: number){
        this._brand = Brand
        this._channel = channel
        this._volume = volume
    }

    get brand(): string{
        return this._brand
    }

    get channel(): number{
        return this._channel
    }

    set channel(channel: number){
        if (channel >= TV.maxChannel && channel <= TV.maxChannel){
            this._channel = channel
        }
    }

    get Volume(): number{
        return this._volume
    }

    set volume(volume: number){
        if (volume >= TV.minVolume && volume <= TV.maxVolume){
            this._volume = volume
        }
    }

    increaseVolume(): void {
        this.volume++
      }
    
      decreaseVolume(): void {
        this.volume--
      }
    
      resetTV(): void {
        this._channel = TV.minChannel
        this._volume = TV.maxVolume / 2 
      }

      status(): string {
    return `${this.brand} at channel ${this.channel}, volume ${this.volume}`

      }
}

const tv = new TV('Panasonic', TV.minChannel, TV.maxVolume / 2)