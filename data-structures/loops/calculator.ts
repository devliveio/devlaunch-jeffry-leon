function menu(): void {
    const prompt = require('prompt-sync')
    let option = 0;

    do {

        console.log ("1. sum");
        console.log("2. Rest");
        console.log("3. Multiply");
        console.log("4. Divide");
        console.log ("5. Exit");
        option = parseInt(prompt("Ingrese una opción: "));

        if (option >= 1 && option <= 4){
            let num1 = parseInt(prompt("Ingrese el primer número: "));
            let num2 = parseInt(prompt("Ingrese el segundo número: "));


            switch (option) {
                case 1: 
                    console.log("The sum is: " +(num1 + num2));
                    break;
                case 2:
                    console.log("The rest is: " + (num1 - num2));
                    break;
                case 3:
                    console.log("The Multiply is: " + (num1 * num2));
                    break;
                case 4:
                    console.log("The divide is: " + (num1 / num2));
                    break;        

            }

            console.log ("Press Enter to continue...");
            prompt();
            console.clear();
        }
    } while (option != 5)

}

menu();