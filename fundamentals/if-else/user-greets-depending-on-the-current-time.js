const prompt = require('prompt-sync')()

const time = prompt('What time is it? ') // 00:00 - 23:59

const [hour, minutes] = time.split(":") // [23, 59]

if (hour >= 5 && hour < 12) {
    console.log('Good Morning');
  } else if (hour >= 12 && hour < 18 ) {
    console.log('Good Afternoon');
  } else {
    console.log('Good Night');
  }
  