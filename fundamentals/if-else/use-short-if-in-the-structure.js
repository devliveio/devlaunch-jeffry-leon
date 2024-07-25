const prompt = require('prompt-sync')()

const age = Number(prompt('How old are you? '))

const result = (
   (age >= 5 && age <= 13) ? 'Child' :
    (age >= 14 && age <= 17) ? 'Teenager':
     (age >= 18 && age <= 29) ? 'Adult' :
      (age >= 30 && age <= 60) ? 'Adulthood' :
       (age >= 61) ? 'Elderly': 'Not support your age.'
)

console.log(result)