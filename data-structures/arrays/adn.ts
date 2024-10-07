const dna: string =  `gtggggggtttatgcctttagaacagcag`

const subsequence: string = `ggg`

function findSequence(dna: string, match: string): boolean {
    let subsequence = ""
    for (let i = 0; i <= dna.length-match.length; i++){
        subsequence = dna.slice(i, i + match.length)
        if(subsequence === match) return true
    }

    return false
}

console.log(findSequence(dna, subsequence))



