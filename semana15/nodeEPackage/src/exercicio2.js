/**
 * 
 * @param {string} opation 
 * @param {number} value1 
 * @param {number} value2 
 * @returns 
 */

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

module.exports = { calculator }