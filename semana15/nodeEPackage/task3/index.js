const chalk = require('chalk')
const {read, update} = require('./database/handle')


const main = async () => {
    try {
        const [,,newTask] = process.argv

        const newList = await read()

        await update([...newList, newTask])
        
    } catch (error) {
        console.error(chalk.red(`Erro: ${error.message}`),)
    }
}

main()