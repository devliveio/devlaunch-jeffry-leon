const MessageUpperCaseIncorrect = "Your email format is uppercase, and it should be lowercase"
const MessageLowerCaseCorrect = "Your email format is lowercase."
const MessageMixedCaseIncorrect = "Your email format is in mixed case, it should be in lowercase."

function emailFormat(email){
    return email === email.toUpperCase()
      ? MessageUpperCaseIncorrect
      : email === String.toLowerCase
        ? MessageLowerCaseCorrect
        : MessageMixedCaseIncorrect 
}

console.log(emailFormat("SALLY.SMITH534@HOTMAIL.COM"))
console.log(emailFormat("john.doe@gmail.com"))
console.log(emailFormat("MaxWell.JonEs87@outlook.com"))
