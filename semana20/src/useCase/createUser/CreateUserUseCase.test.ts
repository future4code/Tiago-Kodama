import { UserRepositoryTestError, UserRepositoryTestOk } from "../../repository/IUserRepository.test";
import { CreateUserUseCase } from './CreateUserUseCase'

describe('Create user usecase', () => {
    test('sucess', async () => {
        let isOk = true

        try {
            const userRepository = new UserRepositoryTestOk()
            const createUserUseCase = new CreateUserUseCase(userRepository)

            await createUserUseCase.execute('Name', 'email@email.com', 'password')
            
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
            const createUserUseCase = new CreateUserUseCase(userRepository)
            
            await createUserUseCase.execute('Name', 'email@email.com', 'password')
            
        } catch (error) {
            isOk = false
        } finally {
            expect(isOk).toBe(false)
        }
    })
})