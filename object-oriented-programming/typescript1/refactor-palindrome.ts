function isPalindromeNum(num: number): boolean {
    const numToStr: string = number.toString()
    const reverseDigits: string = numToStr.split("").reverse().join("")
    const checkIfPalindrome: boolean = numToStr === reverseDigits
  
    return checkIfPalindrome ? true : false
  }
  const number: number = 121
  console.log(isPalindromeNum(number))