import { User } from './User'

describe('Testing Entitie User with id', () => {
    const name = 'Tiago'
    const email = 'email@email.com'
    const password = 'senha'
    const id = Date.now().toString()
    const user = new User(name, email, password, id)
    
    test('id', () => {
        expect(user.id).toBe(id)
    })

    test('name', () => {
        expect(user.name).toBe(name)
    })

    test('email', () => {
        expect(user.email).toBe(email)
    })

    test('password', () => {
        expect(user.password).toBe(password)
    })
})

describe('Testing Entitie User without id', () => {
    const name = 'Tiago'
    const email = 'email@email.com'
    const password = 'senha'

    const user = new User(name, email, password)
    
    test('id', () => {
        expect(typeof user.id).toBe('string')
    })

    test('name', () => {
        expect(user.name).toBe(name)
    })

    test('email', () => {
        expect(user.email).toBe(email)
    })

    test('password', () => {
        expect(user.password).toBe(password)
    })
})