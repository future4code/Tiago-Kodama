const fs = require('fs')

const read = () => {
    let newList = fs.readFileSync('db.txt')
        .toString()
        .split("\n")

    return newList
}

const update = (newList) => {
    const stringList = newList.toString().replace(/,/g, '\n')

    fs.writeFileSync('db.txt', stringList)
}

module.exports = { read, update }