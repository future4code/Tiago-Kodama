import { generateId } from './idGenerator'


describe('Id generator', () => {
    test('return string', () => {
        expect( typeof generateId() )
        .toBe( 'string' )
    })

    test('Unique', () => {
        expect( generateId() )
        .not.toBe( generateId() )
    })
})