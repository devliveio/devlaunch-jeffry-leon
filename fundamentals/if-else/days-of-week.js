const prompt = require("prompt-sync")()

const day = Number(prompt('What day of the week ?'))

switch (day) {
    case 1:
      console.log('Monday');
      break;
    case 2:
      console.log('Tuesday');
      break;
    case 3:
      console.log('Wednesday');
      break;
    case 4:
      console.log('Thursday');
    case 5:
      console.log('Friday');
    case 6:
      console.log('Saturday');
    case 7:
      console.log('Sunday');
      break;
    default:
      console.log('Invalid day')
    }

