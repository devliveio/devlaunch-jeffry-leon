class Login {

    private username: string
    private password: string

    constructor (username: string, password: string){
        this.username
        this.password
    }

    getUsername(): string{
        return this.username
    }

    setUsername(username: string): void{
        this.username = username
    }

    getPassword(): string{
        return this.password
    }

    setPassword(password: string):void{
        this.password = password

    }

    verifyLogin(username: string, password: string): void{
        const isVerified = username === this.username && password === this.password
        console.log(isVerified ? 'Login Successfully':'Authentication failed')
    }

}


const nehal = new Login('nehal_mahida', 'password:)')
const js = new Login('rs', 'Notion:)')

nehal.verifyLogin('nehal_mahida', 'password:)')
js.verifyLogin('rs', 'Notion:)')

nehal.verifyLogin('nehal_mahida', 'password:)123')
js.verifyLogin('rs', 'Notion:)123')