export default function GeneratePass() {
    let password: string = ''
    let characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let passWordLength = 8

    for (let index = 0; index < passWordLength; index++) {
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        )
    }

    return  password

}