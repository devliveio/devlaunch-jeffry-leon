const book = {
    createBook (author,title, numberOfPages, bookPrice){
        return {
            author,
            title,
            numberOfPages,
            bookPrice, 

            printDetails() {
                console.log(
                    `Title: ${this.title}, Author:${this.author}, Year: ${this.year}, Pages ${this.numberOfPages}, Price ${this.bookPrice}`
            
                )
            },
        editDetails(Title, author, year, numberOfPages, bookPrice) {

        this.title = title
        this.author = author
        this.year = year
        this.numberOfPages = numberOfPages
        this.price = bookPrice

           },
         }

    },
}

const book1 = book.createBook (
    "The Lord of the Rings",
    "J. R. R. Tolkien",
    "1954",
    1178,
    10000
  )
  book1.printDetails()
  console.log("-------- After editing it --------")
  book1.editDetails(
    "The Lord of the Rings 2",
    "J. R. R. Tolkien",
    "1984",
    2000,
    10000
  )
  book1.printDetails()

