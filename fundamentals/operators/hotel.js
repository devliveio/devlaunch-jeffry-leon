const prompt = require('prompt-sync')()

const nights = prompt('How many nights did you stay? ')
const total = nights * 100 * 0.95

console.log(`Your total is $${total}`)