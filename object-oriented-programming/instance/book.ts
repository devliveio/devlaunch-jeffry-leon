class Book {
  

    private title: string
    private author: string
    private IDNumber: string
    private pages: number
    private price: number

    constructor (title: string, author:string, IDNumber: string, pages: number, price: number){
        this.title = title
        this.author = author
        this.IDNumber = IDNumber
        this.pages = pages
        this.price = price
        
    }

    getTitle(): string{
        return this.title
    }

    getAuthor(): string{
        return this.author
    }

    getIdNumber(): string{
        return this.IDNumber
    }

    getPages(): number{
        return this.pages
    }

    getPrice(): number{
        return this.price
    }

    checkDuplicateIDNumber(otherIDNumber: string): boolean{
        return this.IDNumber === otherIDNumber
    }
}

class BookAvailability{
    private book: Book
    private isAvailable: boolean;

    constructor (book: Book){
        this.book = book
        this.isAvailable = true
    }

    private getMessage(isBorrowed: boolean): string{
    

        return isBorrowed
        ? `${this.book.getTitle()} has been borrowed.`
        : `${this.book.getTitle()} has been returned.`
    }

    private updateAvailability(isAvailable: boolean): void{
        this.isAvailable = isAvailable
        const message = this.getMessage(isAvailable)
        console.log(message)
    }

    borrowBook(): void {
        if (this.isAvailable){
            this.updateAvailability(false)
            
        }else{
            console.log(`${this.book.getTitle()} is already borrowed.`)
        }
    }

    returnBook(): void {
        if (!this.isAvailable){
            this.updateAvailability(true)
        }else{
            console.log(`${this.book.getTitle()} is already available.`)
        }
    }

    isBookAvailable(): boolean {
        return this.isAvailable
}

}

const book1 = new Book("The Catcher in the Rye", "J.D. Salinger", "123-456789", 214, 12.99)
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "987-654321", 324, 15.99)

console.log(`Is ${book2.getTitle()} a duplicate? ${book1.checkDuplicateIDNumber(book2.getIdNumber())}`)

const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "987-654321", 180, 10.99)
    
const bookAvailability1 = new BookAvailability(book1)
const bookAvailability2 = new BookAvailability(book2)
const bookAvailability3 = new BookAvailability(book3)

console.log(`${book1.getTitle()} is available: ${bookAvailability1.isBookAvailable()}`)
bookAvailability1.borrowBook()
console.log(`${book1.getTitle()} is available: ${bookAvailability1.isBookAvailable()}`)
bookAvailability1.returnBook()
console.log(`${book1.getTitle()} is available: ${bookAvailability1.isBookAvailable()}`)

console.log(`${book3.getTitle()} is available: ${bookAvailability3.isBookAvailable()}`)