import { User } from "../entities/User";
import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase {

    async getUserById(id: string): Promise<User|null>{
        try {
            const res = await BaseDataBase.connection
                .select('*')
                .from('User')
                .where('Id', id)

            const [user] = res

            if(!user || !Object.keys(user)) throw new Error()

            return new User(
                user.Name,
                user.Email,
                user.Password,
                user.Id
            )

        } catch (error) {
            return null
        }
    }

    async getUserByEmail(email: string): Promise<User|null>{

        try {
            const res = await BaseDataBase.connection
                .select('*')
                .from('User')
                .where('Email', email)

            const [user] = res

            if(!user || !Object.keys(user)) throw new Error()

            return new User(
                user.Name,
                user.Email,
                user.Password,
                user.Id
            )

        } catch (error) {
            return null
        }
    }

    async createUser(
        Name:string,
        Email: string,
        Password: string
        ): Promise<User|null>{

        const user = new User(
            Name,
            Email,
            Password
        )

        try {
            await BaseDataBase.connection('User').insert({
                Name,
                Email,
                Password,
                Id: user.getId()
            })

            return user

        } catch (error) {
            return null            
        } 
    }
}