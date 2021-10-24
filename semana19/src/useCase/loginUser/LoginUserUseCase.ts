import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";
import { compareHash } from "../../services/hashManager";
import { ILoginUserDTO } from "./ILoginUserDTO";

export class LoginUserUseCase {
    constructor(
        private userRepository: IUserRepository
    ){}

    async execute(loginUserDTO: ILoginUserDTO):Promise<User|null>{
        try {
            const user = await this.userRepository.findByEmail(loginUserDTO.email)
    
            if(!user) return null

            const verifyPass = await compareHash(loginUserDTO.password, user.password)

            if(verifyPass) return user
            else return null
            
        } catch (error) {
         return null   
        }
    }
}