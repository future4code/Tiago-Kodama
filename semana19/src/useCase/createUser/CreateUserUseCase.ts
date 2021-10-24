import { User } from "../../entities/User";
import { ServerError } from "../../errors/ServerError";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserDTO } from "./ICreateUserDTO";

export class CreateUserUseCase {

    constructor(
        private userRepository: IUserRepository
    ){}

    async execute (iCreateUserDTO: ICreateUserDTO): Promise<User>{
        const alreadyExists = await this.userRepository.findByEmail(iCreateUserDTO.email)

        if(alreadyExists) throw new ServerError('This email has already used', 422)

        const user = new User(iCreateUserDTO.name, iCreateUserDTO.email, iCreateUserDTO.password)

        await this.userRepository.save(user)

        const savedUser = await this.userRepository.findByEmail(iCreateUserDTO.email)

        if(!savedUser) throw new ServerError('Can not save user', 500)

        return savedUser
    }
}