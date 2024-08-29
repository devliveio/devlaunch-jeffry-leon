class Product {
    protected name: string
    protected price: number
    protected description: string

    constructor (name: string, price: number, description: string){
        this.name = name
        this.price = price
        this.description = description
    }

getName(): string{
    return this.name
}

getPrice(): number{
    return this.price
}

getDescription(): string{
    return this.description
}

setPrice(price: number): void{
    this.price = price
}
}

class ElectronicProduct extends Product {
    protected brand: string
    protected model: string

    constructor (name: string, price: number, description: string, brand: string, model: string){
    super (name, price, description)
    this.brand = brand
    this.model = model
}

getBrand(): string {
    return this.brand
}

getModel(): string {
    return this.model
}

}

class BookProduct extends Product {
protected author: string
protected genre: string

constructor (name: string, price: number, description: string, author: string, genre: string){
    super (name, price, description)
    this.author = author
    this.genre = genre
}

getAuthor(): string {
    return this.author
}

getGenre(): string {
    return this.genre
}
}

class Cart {
    private totalPrice: number
  
    constructor() {
      this.totalPrice = 0
    }
  
    addElectronicProduct(product: ElectronicProduct): void {
      this.totalPrice += product.getPrice()
    }
  
    addBookProduct(product: BookProduct): void {
      this.totalPrice += product.getPrice()
    }
  
    applyElectronicDiscount(discountRate: number): void {
      this.totalPrice *= discountRate
    }
  
    calculateTotalPrice(): number {
      return this.totalPrice
    }
  }

const cart = new Cart()

const electronicProduct = new ElectronicProduct("Laptop", 1000, "High-performance laptop", "Dell", "XPS 15")
const bookProduct = new BookProduct("The Great Gatsby", 15, "Classic novel", "F. Scott Fitzgerald", "Fiction")

cart.addElectronicProduct(electronicProduct)
cart.addBookProduct(bookProduct)

console.log("Before discount, Total Price:", cart.calculateTotalPrice())

cart.applyElectronicDiscount(0.9)

console.log("After discount, Total Price:", cart.calculateTotalPrice())