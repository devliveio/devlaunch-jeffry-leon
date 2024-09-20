const Track = 20 

function gameOfFrogs (): void{
    let frog1Position = 0
    let frog2Position = 0
    let frog3Position = 0

    while(true){
        frog1Position = moveFrog(frog1Position)
        frog2Position = moveFrog(frog2Position)
        frog3Position = moveFrog(frog3Position)

        if (frog1Position >= Track) {
            announceWinner(1)
            break
        } else if (frog2Position >= Track) {
            announceWinner(2)
            break
        }else if (frog3Position >= Track) {
            announceWinner(3)
            break
        }
        }
        }

        function moveFrog (position: number): number {
            const jump = Math.floor(Math.random()*3)
            return position + jump
        }

        function announceWinner (frogNumber: number): void {
            console.log(`Frog ${frogNumber} is the winner`)
        }

gameOfFrogs()

    

