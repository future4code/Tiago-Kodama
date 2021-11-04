import { UserRepositoryTestError, UserRepositoryTestOk } from "../../repository/IUserRepository.test";
import { UserLoggerUseCase } from './UserLoggerUseCase'

describe('Create user usecase', () => {
    test('sucess', async () => {
        let isOk = true

        try {
            const userRepository = new UserRepositoryTestOk()
            const userLoggerUseCase = new UserLoggerUseCase(userRepository)

            await userLoggerUseCase.execute('some@email.com', '123456')
            
        } catch (error) {
            isOk = false
        } finally {
            expect(isOk).toBe(true)
        }
    })

    test('fail, database ', async () => {
        let isOk = true

        try {
            const userRepository = new UserRepositoryTestError()
            const userLoggerUseCase = new UserLoggerUseCase(userRepository)

            await userLoggerUseCase.execute('some@email.com', '123456')
            
        } catch (error) {
            isOk = false
        } finally {
            expect(isOk).toBe(false)
        }
    })

    test('fail, not found user', async () => {
        let isOk = true

        try {
            const userRepository = new UserRepositoryTestOk()
            const userLoggerUseCase = new UserLoggerUseCase(userRepository)

            await userLoggerUseCase.execute('someother@email.com', '123456')
            
        } catch (error) {
            isOk = false
        } finally {
            expect(isOk).toBe(false)
        }
    })

})