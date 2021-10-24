import { UserDataBase } from "../database/UserDataBase";
import { User } from "../entities/User";
import { IUserRepository } from "./IUserRepository";

export class UserRepository implements IUserRepository {

    constructor(
        private userDataBase: UserDataBase  
    ){}

    async findByEmail (email: string): Promise<User|null> {
        return await this.userDataBase.getUserByEmail(email)
    }

    async save(user: User): Promise<void>{
        await this.userDataBase.createUser(
            user.getName(),
            user.getEmail(),
            user.getPassword()
        )
    }
}