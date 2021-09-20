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

const [,,op, v1, v2] = process.argv

console.log(calculator(ob, v1, v2))