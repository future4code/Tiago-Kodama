console.log('Start application')

const {calculator} = require('./src/exercicio2')

const [,,operation, value1, value2] = process.argv

console.log(calculator(operation, Number(value1), Number(value2)))