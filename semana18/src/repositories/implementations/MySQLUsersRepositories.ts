import { UserDataBase } from "../../database/users/UsersDataBase";
import { User } from "../../entites/User";
import { IUsersRepository } from "../IUsersRepository";

export class MySQLUsersRepositories implements IUsersRepository{
    async findByEmail(email: string): Promise<User>{
        const user = new User('', '', 0)

        return user
    }

    async save(user: User): Promise<void>{
        const userDataBase = new UserDataBase()
        
        try {
            
        } catch (error) {
            
        } finally {
            userDataBase.closeConnection()
        }
    }
}