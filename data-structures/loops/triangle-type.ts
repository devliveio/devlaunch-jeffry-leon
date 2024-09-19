function checkTriangleType(side1: number, side2: number, side3: number) {
    if (side1 === side2 && side2 === side3){
        return "Equilateral Triangle"
    } else if (side1 === side2 || side1 === side3 || side2 === side3){
        return "Isosceles Triangle"
    }else{
        return "Scalene Triangle"
    }}

    function getInput(prompt: string): number {
        const promptSync = require('prompt-sync')()
        return parseFloat(promptSync(prompt))
      }
    function runTriangleprogram(): void {
        let option = 0
        let side1, side2, side3

        do {
            console.log("1. Check Equilateral Triangle")
            console.log("2. Check Isosceles Triangle")
            console.log("3. Check Scalene Triangle")
            console.log("4. Exit")
            option = getInput("Enter an option: ")

            if (option >= 1 && option <= 3){
                side1 = getInput("Enter the length of side 1: ")
                side2 = getInput("Enter the length of side 2: ")
                side3 = getInput("Enter the length of side 3: ")


                switch (option) {
                    case 1:
                      break
                    case 2:
                      break
                    case 3:
                      break
                  }

                  const triangleType = checkTriangleType(side1, side2, side3)
                  console.log(`The triangle is a ${triangleType}.`)
                  console.log("----------------------")
                } else if (option !== 4) {
                  console.log("Invalid option. Please try again.")
                }
            
              } while (option !== 4)
            }
            
            runTriangleprogram()
    
      