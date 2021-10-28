import { generateToken, getTokenData, authenticationData } from './tokenHandler'

describe('Token handler', () => {
    const payload: authenticationData = { id: '1234567' }

    test('Generate jwt', () => {
        const token = generateToken(payload)
        expect(typeof token).toBe('string')
    })

    test('Correct data', () => {
        const token = generateToken(payload)
        const data = getTokenData(token)
        expect(data).toEqual(payload)
    })
})