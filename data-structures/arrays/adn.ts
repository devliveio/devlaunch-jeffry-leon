const dna: string = 'gtggggggtttatgcctttagaacagcag'
const subsequenceCase: string = 'ggt'

function dnaSequence (dna : string, match: string): boolean {
    let subsequence =""
    for (let i = 0; i<=dna.length-match.length; i++){
        subsequence = dna.slice(i, i+match.length)
        if(subsequence === match)
            return true
    }

    return false
}

const testSubsequence = dnaSequence(dna, subsequenceCase)
console.log(`The subsequence is: ${testSubsequence}`)



