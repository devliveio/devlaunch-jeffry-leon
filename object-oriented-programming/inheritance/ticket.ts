class Ticket {
    protected name: string
    protected date: string
    protected ticketCost: number
    public paymentDay: string

    constructor (name: string, date:string, ticketCost: number, paymentDay: string){
        this.name = name
        this.date = date
        this.ticketCost = ticketCost
        this.paymentDay = paymentDay
   
   }

    printTicket(): void {
        console.log("Ticket Details:")
        console.log(`Name: ${this.name}`)
        console.log(`Event Date: ${this.date}`)
        console.log(`Price: $${this.ticketCost}`)
        console.log(`Purchase Date: ${this.paymentDay}`)
      }


    }


    class VIPTicket extends Ticket {
        private earlyEntry: boolean
        private VIPLounge: boolean

        constructor(name: string, date: string, ticketCost: number, paymentDay: string, earlyEntry: boolean, VIPLounge: boolean){
            super (name, date, ticketCost, paymentDay)
            this.earlyEntry = earlyEntry
            this.VIPLounge = VIPLounge
        }

        printTicket(): void {
            super.printTicket()
            console.log(`Early Entry: ${this.earlyEntry}`)
            console.log(`VIP Lounge Access: ${this.VIPLounge}`)
          }
        }
        const basicTicket = new Ticket("John", "03-02-2024", 30,"03-02-2024" )
        const vipTicket = new VIPTicket("Carla", "03-02-2024", 50, "03-02-2024", true, true);
        
        console.log("Basic Ticket:")
        basicTicket.printTicket()
        console.log("\nVIP Ticket:")
        vipTicket.printTicket()