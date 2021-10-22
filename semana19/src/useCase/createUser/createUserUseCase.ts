import { User } from "../../entities/User";
import { ServerError } from "../../errors/ServerError";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserDTO } from "./ICreateUserDTO";

export class CreateUserUseCase {

    constructor(
        private userRepository: IUserRepository
    ){}

    async execute (iCreateUserDTO: ICreateUserDTO): Promise<User>{
        const user = await this.userRepository.findByEmail(iCreateUserDTO.email)

        if(!user) throw new ServerError('This email has already used', 422)
        
        return user
    }
}