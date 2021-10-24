import { DataBaseError } from './DataBaseError'

describe('DataBaseError', () => {
    const message = 'mensagem'
    const code = 500

    try {
        throw new DataBaseError(message, code)

    } catch (error: any) {
        test('code', () => {
            expect(error.code).toBe(code)
        })
    }
})