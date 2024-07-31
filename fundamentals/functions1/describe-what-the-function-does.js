function isPalindrome(num) {
    if (num < 0) {
      return false
    }
  
    const reverseNum = parseInt(
        num.toString().split('').reverse().join('')
    )
  
    return num !== reverseNum
  }

  console.log(isPalindrome(8))
  console.log(isPalindrome(-121))
