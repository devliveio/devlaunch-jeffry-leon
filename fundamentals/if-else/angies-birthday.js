const prompt = require('prompt-sync')();

const birthdate = prompt("What is your birthdate in format (YYYY/MM/DD)? ");

const birthday = new Date(birthdate)
const today = new Date()

const age = today.getFullYear() - birthday.getFullYear()

console.log(birthday.getFullYear());

if (birthdate >= 5 && birthdate <= 13 ) {
    console.log('Children');
  } else if (birthdate >= 14 && birthdate <= 17 ) {
    console.log('Teenagers');
  } else if (birthdate >= 18 && birthdate <= 29) {
    console.log('Young Adult');
  } else if (birthdate >= 30 && birthdate <= 60) {
    console.log('Adulthood');
  } else if (birthdate >= 61) {
    console.log('Elderly');  
  } else {
    console.log('Not support that age');
  }
  