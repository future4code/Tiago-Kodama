import { CustomError } from "../CustomError";
import { BaseDataBase } from "../database/BaseDataBase";
import { User } from "../entitie/User";
import { IUserRepository } from "./IUserRepository";

export class UserRepository extends BaseDataBase  implements IUserRepository {

    async findByEmail(email: string): Promise<User|null>{
        try {
            const result = await BaseDataBase.connection<User>('S20User').where('email', email)

            if(!result || !result.length) return null
            
            return new User(
                result[0].id,
                result[0].name,
                result[0].email,
                result[0].password
            )

        } catch (error: any) {
            throw CustomError.internalServerError(error.sqlMessage || error.message || 'Database error')
        }
    }
    
    async save(user: User):Promise<void>{
        try {
            await BaseDataBase.connection('S20User').insert({
                id: user.id,
                email: user.email,
                name: user.name,
                password: user.password
            })
            
        } catch (error: any) {
            throw CustomError.internalServerError(error.sqlMessage || error.message || 'Database error')
        }
    }
}