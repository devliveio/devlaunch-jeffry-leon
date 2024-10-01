const arr = [NaN, 0, 15, false, -22, "", undefined, 47, null, "a simple string"]

function removeFalsy(arr: any[]): any[] {
    
    return arr.filter((item) => {
        return item !== null &&
        item !== 0 &&
        item !== "" &&
        item !== undefined &&
        item !== false &&
        !Number.isNaN(item)

    })
}

console.log(removeFalsy(arr));


