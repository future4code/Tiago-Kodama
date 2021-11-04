import { TokenHandler ,authenticationData } from './TokenHandler'

describe('Token handler', () => {
    const payload: authenticationData = { id: '1234567' }

    test('Generate jwt', () => {
        const token = TokenHandler.generateToken(payload)
        expect(typeof token).toBe('string')
    })

    test('Correct data', () => {
        const token = TokenHandler.generateToken(payload)
        const data = TokenHandler.getTokenData(token)
        expect(data).toEqual(payload)
    })
})