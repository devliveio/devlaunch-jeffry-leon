import PromptSync from "prompt-sync"
const prompt = PromptSync()

class Book {
  constructor(
    public title: string,
    public author: string,
    public year: number,
    public pages: number,
    public price: number
  ) {}

printBookInfo(): void{
    console.log ("Book Information: ")
    console.log ("Title: ", this.title)
    console.log ("Author:", this.author)
    console.log ("Year:", this.year)
    console.log ("Pages:", this.pages)
    console.log ("Price:", this.price)
    console.log ("----------------")

}}

function readBookFromConsole(): Book {
     const title = prompt("Enter Title: ")
     const author = prompt("Enter Author: ")
     const year = parseInt(prompt("Enter Year: "))
     const pages = parseInt(prompt("Enter pages: "))
     const price = parseInt(prompt("Enter Price: ")) 
     return new Book(title, author, year, pages, price)
}

function createBook(): Book {
    return readBookFromConsole()

}

function menu(): void {
    let book: Book | null = null

    while (true) {
        console.log("1. Create a Book")
        console.log ("2. Print a Book")
        console.log("3. Exit")
        const option = prompt ("Enter an option: ")

        switch (option) {
            case "1":
                book = createBook()
                break
            case "2":
              if  (book) {
                book.printBookInfo()
            } else {
                console.log ("No book information available")
            }
            break
            case "3":
                return
                default:
                    console.log("Invalid option. Please try again.")
                }

                console.log("--------------------")

    }
}

menu()









    