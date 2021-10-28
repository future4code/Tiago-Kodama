import { compare, hash } from "./hashManager"

describe('hashManager', () => {
    const plaintext = 'secret'
    
    test('hash exist', async () => {
        const cypherText = await hash(plaintext)
        expect(typeof cypherText).toBe('string')
    })

    test('decrypt', async () => {
        const cypherText = await hash(plaintext)
        expect( await compare(plaintext, cypherText) )
        .toBe(true)
    })

})