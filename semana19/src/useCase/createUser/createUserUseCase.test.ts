import { User } from "../../entities/User"
import { IUserRepository } from "../../repositories/IUserRepository"
import { CreateUserUseCase } from "./createUserUseCase"

class UserRepository implements IUserRepository {

    public user: (User|null) = null

    setUser(user: User){
        this.user = user
    }
    
    async findByEmail(email: string): Promise<User|null>{

        if(email === this.user?.getEmail())
            return this.user

        return null
    }
    
    async save(user: User){
        this.setUser(user)
    }
    
}

describe('Create user useCase', () => {
    const newUser: User = new User('Tiago', 'tiago@email.com', '123456')
    const oldUser: User = new User('André', 'andre@email.com', '123456')

    test('with repeated email', async () => {
        let code = 200

        try {
            const userRepository = new UserRepository()
            userRepository.setUser(oldUser)
    
            const createUserUseCase = new CreateUserUseCase(userRepository)
    
            await createUserUseCase.execute({
                name: oldUser.getName(),
                email: oldUser.getEmail(),
                password: oldUser.getPassword()
            })
            
        } catch (error: any) {
            code = error.code || 400
        } finally {
            expect(code).toBe(422)
        }
    })

    test('with new email', async () => {
        let code = 201

        try {
            const userRepository = new UserRepository()
            const createUserUseCase = new CreateUserUseCase(userRepository)
    
            await createUserUseCase.execute({
                name: newUser.getName(),
                email: newUser.getEmail(),
                password: newUser.getPassword()
            })
            
        } catch (error: any) {
            code = error.code

        } finally {
            expect(code).toEqual(201)
        }
    })
})