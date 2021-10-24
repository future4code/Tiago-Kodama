import { UserDataBase } from "./UserDataBase";

describe('User DataBase', () => {
    const userDataBase = new UserDataBase()
    const name = 'Teste'
    const email = `teste${Math.floor(Math.random()*100)}@teste.com`
    const password = '123456789'

    test('Create user', async () => {
        const user = await userDataBase.createUser(
            name,
            email,
            password
        )

        expect(user).not.toBe(null)
    })

    test('Get user by email', async () => {
        const user = await userDataBase.getUserByEmail(email)

        expect(user).not.toBe(null)
    })

    test('Get user by Id', async () => {
        const userByEmail = await userDataBase.getUserByEmail(email)

        if(!userByEmail) return 

        const userById = await userDataBase.getUserById(userByEmail.getId())

        expect(userByEmail).toEqual(userById)
    })
})