import { UserRepositoryTestError, UserRepositoryTestOk } from "../../repository/IUserRepository.test";
import { UserCreatorUseCase } from './UserCreatorUseCase'

describe('Create user usecase', () => {
    test('sucess', async () => {
        let isOk = true

        try {
            const userRepository = new UserRepositoryTestOk()
            const userCreatorUseCase = new UserCreatorUseCase(userRepository)

            await userCreatorUseCase.execute('Name', 'email@email.com', 'password')
            
        } catch (error) {
            isOk = false
        } finally {
            expect(isOk).toBe(true)
        }
    })

    test('fail', async () => {
        let isOk = true

        try {
            const userRepository = new UserRepositoryTestError()
            const userCreatorUseCase = new UserCreatorUseCase(userRepository)
            
            await userCreatorUseCase.execute('Name', 'email@email.com', 'password')
            
        } catch (error) {
            isOk = false
        } finally {
            expect(isOk).toBe(false)
        }
    })
})