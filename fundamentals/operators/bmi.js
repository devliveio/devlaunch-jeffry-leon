const prompt = require('prompt-sync')();

const name = prompt("What is your name? ");
const height = parseFloat(prompt("What is your height in meters? "));
const weight = parseFloat(prompt("What is your weight in kilograms? "));


const bmi = weight / Math.pow(height, 2);

console.log(`Hi ${name}, your BMI is ${bmi.toFixed(2)}`);