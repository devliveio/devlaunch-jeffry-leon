class User {
    userName: string
    typeOfPrinter: Printer

    constructor (userName: string, typeOfPrinter: Printer){
        this.userName = userName
        this.typeOfPrinter = typeOfPrinter
    }

    printDocument(){
        console.log(`This ${this.userName} is printing a document`)
        this.typeOfPrinter.print()
    }
}

class Printer{
    print(){
        console.log("Printing document")
    }
}

class PDFPrinter extends Printer {
    print(){
        console.log("Printing document to PDF")
    }
}

class FaxPrinter extends Printer {
    print(){
        console.log("Printing document to Fax")
    }
}

const printer = new Printer()
const pdfPrinter = new PDFPrinter()
const faxPrinter = new FaxPrinter

const user1 = new User("User1", printer)
const user2 = new User("User2", pdfPrinter)
const user3 = new User("User3", faxPrinter)



