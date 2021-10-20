import { User } from "../entites/User";

export interface IUsersRepository {
    findByEmail(email:string):Promise<User|null>;
    save(user: User):Promise<void>;
    getAllUsers():Promise<Array<User>|null>
}