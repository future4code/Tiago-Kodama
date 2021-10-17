import { BaseDataBase } from "../../database/BaseDataBase";
import { User } from "../../entites/User";
import { IUsersRepository } from "../IUsersRepository";

export class MySQLUsersRepositories implements IUsersRepository{
    async findByEmail(email: string): Promise<User|null>{
        const user = new User('email@email.com', 'tiago', 20)

        return null
    }

    async save(user: User): Promise<void>{

        const dataBase = new BaseDataBase()
        
        try {
            console.log('Salvou', user)
        } catch (error) {
            
        } finally {
            dataBase.closeConnection()
        }
    }

    async getAllUsers(): Promise<Array<User>|null>{
        return null
    }
}