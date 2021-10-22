import { User } from "../entities/User";

export class UserRepository {

    async findByEmail (email: string): Promise<User|null> {
        return null
    }

    async save(user: User): Promise<void>{

    }
}