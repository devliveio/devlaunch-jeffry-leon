const nationalPrice = 0.1
const internationalPrice = 0.2
const percentageFactor = 100

const ticket= {
    ticketCreation: function (
        name,
        address,
        telephone,
        ticketPrice,
        departureTax,
        customerType,
        departureTime,
        arrivalTime,
        departureCity,
        destinationCity 
    ){
    return {
        name: name,
        address: address,
        telephone: telephone,
        ticketPrice: ticketPrice,
        departureTax: departureTax,
        customerType: customerType,
        departureTime: departureTime,
        arrivalTime: arrivalTime,
        departureCity: departureCity,
        destinationCity: destinationCity,

        price: function (){
            const discount = this.customerType === "national" ? nationalPrice : internationalPrice 
            let totalPrice = this.ticketPrice + departureTax - (discount * ticketPrice)
            const discountPercentage = discount * percentageFactor
            return  `Yor cost for the ticked is: $${totalPrice}. you discount is ${discountPercentage}`

        },

    }   

    },
}

const ticket1 = Ticket.createTicket(
    "Ana",
    "ana@gmail.com",
    "2454-2123",
    400,
    10,
    "national",
    "2020-01-01",
    "2020-01-01",
    "Florida",
    "New York"
  )
  const ticket2 = Ticket.createTicket(
    "Pedro",
    "pedro@gmail.com",
    "2454-2123",
    800,
    10,
    "international",
    "2020-01-01",
    "2020-01-01",
    "Colombia",
    "Mexico"
  )
  
  console.log(ticket1.price())
  console.log(ticket2.price())



