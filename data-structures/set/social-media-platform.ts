interface User {
    
    id: number | string
    name: string
    followers: User[]
    following: User[]
}

function suggestUsersToFollow(user: User): User[]{
    const followingSet = new Set(user.following)
    const suggestedSet = new Set<User>()
    for (const followingUser of followingSet){
        for (const follower of followingUser.followers){
            if (follower !== user && !followingSet.has(follower)){
                suggestedSet.add(follower)
            }
        }

    }

    return Array.from(suggestedSet)
}

const alice: User = {
    id: 1,
    name: "Alice",
    followers: [],
    following: [],
}

const bob: User = {
    id: 2,
    name: "Bob",
    followers: [alice],
    following: [],
}

const charlie: User = {
    id: 3,
    name: "Charlie",
    followers: [alice, bob],
    following: [bob],
}

const diana: User = {
    id: 4,
    name: "Diana",
    followers: [alice, charlie],
    following: [charlie],
}

const suggestedUsers = suggestUsersToFollow(diana)
console.log(suggestedUsers)







