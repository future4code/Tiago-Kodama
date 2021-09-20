const chalk = require('chalk')

const main = (inputName, inputAge) => {
    try {
        if(!inputName || !inputAge) throw new Error('Esperava dois argumentos.')

        console.log(`Olá, ${inputName}! Você tem ${inputAge} anos.`)
        console.log(`Em sete anos você terá ${Number(inputAge)+7}`)
    } catch (error) {
        console.error(chalk.red(`Erro: ${error.message}`),)
    }
}

const [,,inputName, inputAge] = process.argv

main(inputName, inputAge)
