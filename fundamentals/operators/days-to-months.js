const DaysInMonth = 30
const prompt = require('prompt-sync')();

const days = prompt('number of days?');

const months = match.floor(days / DaysInMonth)
const daysLeft = days % DaysInMonth

console.log(`${days} days are ${months} months and ${daysLeft} days`)
