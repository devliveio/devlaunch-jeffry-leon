import PromptSync from "prompt-sync"
const prompt = PromptSync()

function diceGame (): number {
    let numDiceAttempts = parseInt(prompt("How many times do you want to roll the dice? "))
    let cumulativeAmount = 0
for (let i = 0; i < numDiceAttempts; i++){ 
    const diceRoll = Math.floor(Math.random()*6) +1

    if (diceRoll === 6) {
        cumulativeAmount += 5
    } else if (diceRoll === 1){
        cumulativeAmount += 1
    } else {
        cumulativeAmount -=2
    }
}

return cumulativeAmount

}

const result = diceGame()
console.log(`Cumulative amount at the end game:${result}`)