import { compareHash, generateHash } from './hashManager'

describe('Hash Manager', () => {
    const password = '123456'

    test('generate and verify', async () => {
        const hash = await generateHash(password)
        const verify = await compareHash(password, hash)

        expect(verify).toBeTruthy()
    })

})