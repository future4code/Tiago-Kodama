import { User } from "../../entites/User";
import { MyError } from "../../MyError";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {

    constructor(
        private usersRepository:IUsersRepository
    ){}

    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

        if(userAlreadyExists){
            throw new MyError('User already existis', 422)
        }

        const user = new User(data.name, data.email, data.age)

        this.usersRepository.save(user)
    }
}