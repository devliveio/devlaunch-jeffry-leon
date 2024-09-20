import PromptSync from "prompt-sync"
const prompt = PromptSync()

function countVotes (numberOfPeople: number): Record<string, number> {
    let voteCounts = {
        candidate1: 0,
        candidate2: 0,
        candidate3: 0,
        blank: 0,
        null: 0
    }
for (let i = 0; i < numberOfPeople; i++ ){
    const randomVote = Math.floor(Math.random() * 4)

    if (randomVote === 0){
        voteCounts.blank ++
    }else if (randomVote === 1){
        voteCounts.candidate1++

    }else if (randomVote === 2){
        voteCounts.candidate2++
    }else {
        voteCounts.candidate3++
    }
}

return voteCounts

}

const numPeople = 100
const voteCounts = countVotes(numPeople)

console.log("Candidate 1 Votes:", voteCounts.candidate1)
console.log("Candidate 2 Votes:", voteCounts.candidate2)
console.log("Candidate 3 Votes:", voteCounts.candidate3)
console.log("Blank Votes:", voteCounts.blank)
console.log("Null Votes:", voteCounts.null)