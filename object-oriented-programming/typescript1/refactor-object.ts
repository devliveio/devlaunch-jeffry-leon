interface User {
    username: string
    email: string
    isEmailVerified: boolean
    status: string

}

const user1: User = {
    username: "devlive",
    email: "devlive@example.com",
    isEmailVerified: false,
    status: "Registered",
  }
  
  const user2: User = {
    username: "john_doe",
    email: "john@example.com",
    isEmailVerified: true,
    status: "Active",
  }
  
    const relationships: { [key: string]: string } = {
    "devlive": "john_doe"

    }
    function isFollowing(follower: string, followee: string): boolean {
    return relationships[follower] === followee
  }
  
  const follower = user1.username
  const followee = user2.username
  console.log(`${follower} is following ${followee}:`, isFollowing(follower, followee)
  )