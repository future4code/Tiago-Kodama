import { User } from "../entitie/User";

export interface IUserRepository {
    save(user: User):Promise<void>
}