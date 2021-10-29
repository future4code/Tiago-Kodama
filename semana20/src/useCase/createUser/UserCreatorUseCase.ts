import { User } from "../../entitie/User"
import { IUserRepository } from "../../repository/IUserRepository"
import { generateId } from "../../service/idGenerator"
import { HashManager } from '../../service/HashManager'
import { authenticationData, generateToken } from '../../service/tokenHandler'

export class UserCreatorUseCase {

    constructor(
        private userRepository: IUserRepository
    ){}
    
    execute = async (
        name: string,
        email: string,
        password: string
    ): Promise<string> => {

        const id = generateId()
        const user = new User(
            id,
            name,
            email,
            await HashManager.hash(password)
        )

        await this.userRepository.save(user)

        const payload: authenticationData = { id }

        return generateToken( payload )
    }
}