import { User } from "../../entities/User";
import { ServerError } from "../../errors/ServerError";
import { UserRepository } from "../../repositories/UserRepositori";
import { ICreateUserDTO } from "./ICreateUserDTO";

export class CreateUserUseCase {

    constructor(
        private userRepository: UserRepository
    ){}

    async execute (iCreateUserDTO: ICreateUserDTO): Promise<User>{
        const user = await this.userRepository.findByEmail(iCreateUserDTO.email)

        if(!user) throw new ServerError('This email has already used', 422)
        
        return user
    }
}