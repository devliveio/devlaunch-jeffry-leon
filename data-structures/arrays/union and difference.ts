const array1: number [] = [1, 2, 3];
const array2: number [] = [100, 2, 1, 1];

const union = array1.reduce((acc, val) => {
    if (!acc.includes(val)) {
      acc.push(val);
    }
    return acc;
  }, array2.slice());
  
  array2.forEach(val => {
    if (!union.includes(val)) {
      union.push(val);
    }
  });
  
  console.log(union);