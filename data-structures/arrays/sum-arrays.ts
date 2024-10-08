function Arrays_sum(arr1: number[], arr2: number[]): number [] 
{
  var result: number[] = [];
  var ctr = 0;
  var x=0;

 while (ctr < arr1.length && ctr < arr2.length) 
  {
    result.push(arr1[ctr] + arr2[ctr]);
    ctr++;
  }

 if (ctr === arr1.length) 
 {
    for (x = ctr; x < arr2.length; x++)   {
      result.push(arr2[x]);
    }
  } 
  else
  {
  for (x = ctr; x < arr1.length; x++) 
    {
      result.push(arr1[x]);
    }
  }
  return result;
}

const arr1: number[] = [1, 0, 2, 3, 4]
const arr2: number[] = [3, 5, 6, 7, 8, 13, 9]
console.log(Arrays_sum(arr1, arr2))


