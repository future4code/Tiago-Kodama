const pushTask = taskName => {
    const toDo = ['Jog']
    toDo.push(taskName)

    return toDo 
}

const [,,newTask] = process.argv

console.log(pushTask(newTask))