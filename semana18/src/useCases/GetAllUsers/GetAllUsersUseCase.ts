import { User } from "../../entites/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class GetAllUsersUseCase {

    constructor(
        private usersRepository: IUsersRepository
    ){}

    async execute():Promise<Array<User>|null>{
        return this.usersRepository.getAllUsers()
    }
}