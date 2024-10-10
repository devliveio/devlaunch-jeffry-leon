import PromptSync from "prompt-sync"
const prompt = PromptSync()

class Suspect {
    constructor (
        public name: string,
        public chromosome: string,
        
    ){}

    printSuspectDetails(): void {
        console.log(`The suspect name is: ${this.name}`)
        console.log(`The chromosome of suspect is: ${this. chromosome}`)
    }}

class Analysis {

    public sample: string = "00000101010101010101"
    private suspects: Suspect[]

    constructor (suspects: Suspect[]){
        this.suspects = suspects
    }

    guilty(){
        let maxSimilarity = 0 
        let mostSimilarSuspect = {}
        const currentSample: string = this.sample
        function calculateSimilarity(suspect: Suspect){
            let matchCount = 0
            for (let i = 0; i < currentSample.length; i++){
                if (currentSample[i] === suspect.chromosome[i]){
                    matchCount ++
                }
            }

            return matchCount
        }

        const currentSuspect: Suspect[] = this.suspects
        for (let j = 0; j < currentSuspect.length; j++){
            const similarity = calculateSimilarity(currentSuspect[j])
            if (similarity > maxSimilarity){
                maxSimilarity = similarity;
                mostSimilarSuspect = currentSuspect[j];
            }
        }

        return (`This suspect is: ${mostSimilarSuspect} with a relationship of ${maxSimilarity *100 / currentSample.length} %`)
    }}

    class Menu {
        public suspects: Suspect [] = []
        private prompt: string
        constructor (prompt: string){
            this.prompt = prompt
            this.suspects = []
        } 

        private enterSuspect(){
            const name: string = prompt("Name: ")
            const chromosome: string = prompt("Chromosome: ")

            const suspect = new Suspect (name, chromosome)
            return suspect
        }

        private performAnalysis(){
            if (this.suspects.length < 2){
                console.log ("insufficient suspects for analysis.");
            }
            const analyser = new Analysis(this.suspects)
            const result = analyser.guilty()
            console.log(result)
        }

        private listSuspects(){
            if (this.suspects.length === 0){
                console.log("There are no suspects to display ")
            } else console.log("List of suspects: ");{
                this.suspects.forEach(function (suspect, index){
                console.log(`${index + 1}. Name: ${suspect.name} Chromosome: ${suspect.chromosome}. `)
            })
        }
    }
          
        public mainMenu() {
            let option = -1;
            while (option !== 4){
                option = parseInt(prompt(this.prompt));
                switch (option){
                    case 1: 
                    this.suspects.push(this.enterSuspect());
                    break;
                    case 2: 
                    this.listSuspects()
                    break;
                    case 3:
                    this.performAnalysis()
                    break;
                    case 4:
                    console.log("Exiting the program")
                    default:
                        console.log("invalid option")       
                }
            }
        }

    }

const menu = new Menu ("Select an option: \n1. Enter Suspect\n2. List Suspect\n3. Perform Analysis\n4. Exit ");
menu.mainMenu()
    
    
 

