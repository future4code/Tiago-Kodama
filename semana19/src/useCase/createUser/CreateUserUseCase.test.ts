import { User } from "../../entities/User"
import { IUserRepository } from "../../repositories/IUserRepository"
import { CreateUserUseCase } from "./CreateUserUseCase"

class UserRepository implements IUserRepository {

    public user: (User|null) = null

    setUser(user: User){
        this.user = user
    }
    
    async findByEmail(email: string): Promise<User|null>{

        if(email === this.user?.email)
            return this.user

        return null
    }

    async findById(id: string): Promise<User|null>{
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
                name: oldUser.name,
                email: oldUser.email,
                password: oldUser.password
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
                name: newUser.name,
                email: newUser.email,
                password: newUser.password
            })
            
        } catch (error: any) {
            code = error.code

        } finally {
            expect(code).toEqual(201)
        }
    })
})