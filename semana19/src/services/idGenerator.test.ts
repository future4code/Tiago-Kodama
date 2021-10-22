import { idGenerator } from "./idGenerator"

describe('id generator', () => {

    const id = idGenerator()

    test('is string', () => {
        expect(typeof id).toBe('string')
    })

    test('unique', () => {
        const id2 = idGenerator()
        expect(id === id2).toBe(false)
    })
})