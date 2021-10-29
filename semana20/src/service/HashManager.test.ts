import { HashManager } from "./HashManager"

describe('hashManager', () => {
    const plaintext = 'secret'
    
    test('hash exist', async () => {
        const cypherText = await HashManager.hash(plaintext)
        expect(typeof cypherText).toBe('string')
    })

    test('decrypt', async () => {
        const cypherText = await HashManager.hash(plaintext)
        expect( await HashManager.compare(plaintext, cypherText) )
        .toBe(true)
    })

})