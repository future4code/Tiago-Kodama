import { User } from './User'

describe('Testing Entitie User with id', () => {
    const name = 'Tiago'
    const email = 'email@email.com'
    const password = 'senha'
    const id = Date.now().toString()
    const user = new User(name, email, password, id)
    
    test('id', () => {
        expect(user.getId()).toBe(id)
    })

    test('name', () => {
        expect(user.getName()).toBe(name)
    })

    test('email', () => {
        expect(user.getEmail()).toBe(email)
    })

    test('password', () => {
        expect(user.getPassword()).toBe(password)
    })
})

describe('Testing Entitie User without id', () => {
    const name = 'Tiago'
    const email = 'email@email.com'
    const password = 'senha'

    const user = new User(name, email, password)
    
    test('id', () => {
        expect(typeof user.getId()).toBe('string')
    })

    test('name', () => {
        expect(user.getName()).toBe(name)
    })

    test('email', () => {
        expect(user.getEmail()).toBe(email)
    })

    test('password', () => {
        expect(user.getPassword()).toBe(password)
    })
})