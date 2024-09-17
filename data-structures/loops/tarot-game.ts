import PromptSync from "prompt-sync"
const prompt = PromptSync()

function isValidDate (day: number, month: number, year: number): boolean {
    if (year <= 0 || month < 1 || month > 12 || day < 1){
        return false
    }
  const daysInMonth: number = new Date (year, month, 0).getDate()
  return day <= daysInMonth
}

function sumDigits (number: number): number {
    let sum = 0
    while (number > 0) {
        sum += number % 10
        number = Math.floor(number /10)
    }

    return sum
}

function calculateTarotNumber (day: number, month: number, year: number): number | null {

    if (!isValidDate (day, month, year)){
        console.error("No valid date.")
        return null
    }

    let total: number = day + month + year

    while (total >= 10){
        total = sumDigits(total)
    }

    return total
}

const birthDay: number = parseInt(prompt("Enter your birth day: "))
const birthMonth: number = parseInt(prompt("Enter your birth month: "))
const birthYear: number = parseInt(prompt("Enter your birth year: "))
const tarotNumber: number | null = calculateTarotNumber(birthDay, birthMonth, birthYear)
console.log(`Your tarot number is : ** ${tarotNumber} **`)




