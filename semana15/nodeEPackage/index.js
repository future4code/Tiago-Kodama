const { pushTask } = require('./src/exercicio3')

const [,,newTask] = process.argv

console.log(pushTask(newTask))