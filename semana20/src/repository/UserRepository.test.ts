import { User } from "../entitie/User";
import { generateId } from "../service/idGenerator";
import { UserRepository } from "./UserRepository";


describe('User repository', () => {
    const userRepository = new UserRepository()

    test('save and find user', async () => {
        let statusOk = true

        try {
            const count = Math.floor(Math.random()*100)
            const userToSave = new User(generateId(), `${count}name`, `${count}email@email.com`, '123456')
            await userRepository.save(userToSave)

            const userSaved = await userRepository.findByEmail( `${count}email@email.com`)

            if(userSaved?.id !== userToSave.id)
                throw new Error(JSON.stringify({ userToSave, userSaved}))
            
        } catch (error: any) {
            console.log(error.sqlMessage || error.message || error)
            statusOk = false
        }

        expect(statusOk).toBeTruthy()
    })
})