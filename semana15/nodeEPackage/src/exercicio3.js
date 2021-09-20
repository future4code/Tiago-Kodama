const pushTask = taskName => {
    const toDo = ['Jog']
    toDo.push(taskName)

    return toDo 
}

module.exports = {pushTask}