import { User } from "../entites/User";
import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase {
    async insertUser(user: User){
        await this.connection("Users").insert({
            Id: user.id,
            Name: user.name,
            Email: user.email,
            Age: user.age
        })

        await this.closeConnection()
    }

    async selectUserByEmail(email: string):Promise<User|null>{
        const res =  await this.connection("Users").where("Email", email)
        
        if(!res || !res.length) return null

        const user = res[0]


        return {
            id: user.Id,
            age: user.Age,
            email: user.Email,
            name: user.Name
        }
    }

    async selectAllUsers(): Promise<Array<User>|null>{
        const res = await this.connection("Users")

        if(!res || !res.length) return null

        return res.map(e => new User(e.Name, e.Email, e.Age, e.Id))
    }
}