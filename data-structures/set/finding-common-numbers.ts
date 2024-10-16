function findCommonElements(arr1: Iterable<unknown>, arr2: Iterable<unknown>){

    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    const commonElements = [... set1].filter(element => set2.has(element))

    return commonElements
}

const array1 = [1, 2, 3, 4, 5]
const array2 = [3, 4, 5, 6, 7]
const common = findCommonElements(array1, array2)
console.log(common)



