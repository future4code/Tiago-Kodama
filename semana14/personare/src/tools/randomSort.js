export function randomSort(array){
    const newArray = [...array]

    for(let i=0; i<newArray.length; i++){
        const randomIndex = Math.floor(Math.random()*newArray.length)
        const element = newArray[i]
        const swap = newArray[randomIndex]

        newArray[i] = swap
        newArray[randomIndex] = element
    }

    return newArray
}