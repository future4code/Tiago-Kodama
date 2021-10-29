import { ServerError } from './ServerError'

describe('ServerError', () => {

    const message = 'My server error'
    const code = 422

    try {
        throw new ServerError(message, code)

    } catch (error: any) {
        test('Message', () => {
            expect(error.message).toBe(message)
        })

        test('Code', () => {
            expect(error.code).toBe(code)
        })
    }
})