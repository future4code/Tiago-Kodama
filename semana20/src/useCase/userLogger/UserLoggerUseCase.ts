import { IUserRepository } from "../../repository/IUserRepository"
import { HashManager } from '../../service/HashManager'
import { TokenHandler, authenticationData } from '../../service/TokenHandler'

export class UserLoggerUseCase {

    constructor(
        private userRepository: IUserRepository
    ){}
    
    execute = async (
        email: string,
        password: string
    ): Promise<string> => {

        const user = await this.userRepository.findByEmail(email)

        if(!user) 
            throw new Error()
            
        if( !HashManager.compare(password, user.password) )
            throw new Error()

        const payload: authenticationData = { id: user.id }

       return TokenHandler.generateToken( payload )
    }
}