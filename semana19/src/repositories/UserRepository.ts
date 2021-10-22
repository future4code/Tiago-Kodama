import { User } from "../entities/User";
import { IUserRepository } from "./IUserRepository";

export class UserRepository implements IUserRepository {

    async findByEmail (email: string): Promise<User|null> {
        return null
    }

    async save(user: User): Promise<void>{

    }
}