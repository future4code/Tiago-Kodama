import { User } from "../entitie/User";
import { IUserRepository } from "./IUserRepository";

export class UserRepositoryTestOk implements IUserRepository {
    save = async (user: User) => {

    }
}

export class UserRepositoryTestError implements IUserRepository {
    save = async (user: User) => {
        throw new Error()
    }
}

describe('Intancied', () => {
    
    test('user repository ok created', () => {
        const ok = new UserRepositoryTestOk()
        expect(ok).toBeTruthy()
    })
    
    test('user repository fail created', () => {
        const fail = new UserRepositoryTestError()
        expect(fail).toBeTruthy()
    })
})