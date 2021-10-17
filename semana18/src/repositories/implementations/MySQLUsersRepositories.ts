import { UserDataBase } from "../../database/UserDataBase";
import { User } from "../../entites/User";
import { MyError } from "../../MyError";
import { IUsersRepository } from "../IUsersRepository";

export class MySQLUsersRepositories implements IUsersRepository{

    private dataBase: UserDataBase;

    constructor(){
        this.dataBase = new UserDataBase()
    }

    async findByEmail(email: string): Promise<User|null>{
        const user = await this.dataBase.selectUserByEmail(email)

        if(!user) return null

        return user
    }

    async save(user: User): Promise<void>{
        await this.dataBase.insertUser(user)
    }

    async getAllUsers(): Promise<Array<User>|null>{
        return await this.dataBase.selectAllUsers()
    }
}