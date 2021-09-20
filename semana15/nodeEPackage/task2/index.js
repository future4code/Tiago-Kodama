const chalk = require('chalk')

const calculator = (
    opation, 
    numberValue1, 
    numberValue2) => {

    switch (opation) {
        case 'add':
            return numberValue1+numberValue2

        case 'sub':
            return numberValue1-numberValue2

        case 'mult':
            return numberValue1*numberValue2

        case 'div':
            return numberValue1/numberValue2
    
        default:
            break;
    }
} 



const main = () => {
    try {
        const [,,op, v1, v2] = process.argv

        if(!op||!v1||!v2) 
            throw new Error('Esperava três argumentos.')
        
        console.log(calculator(op, v1, v2))
       
    } catch (error) {
        console.error(chalk.red(`Erro: ${error.message}`),)
    }
}


main()
