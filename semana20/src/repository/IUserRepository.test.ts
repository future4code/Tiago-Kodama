import { User } from "../entitie/User";
import { HashManager } from "../service/HashManager";
import { generateId } from "../service/idGenerator";
import { IUserRepository } from "./IUserRepository";

export class UserRepositoryTestOk implements IUserRepository {
    save = async (user: User) => {
    }

    findByEmail = async (email: string) => {
        const password =  await HashManager.hash('123456')

        if(email === 'some@email.com')
            return new User(generateId(), 'Some name', 'some@email.com', password)
        else return null
    }
}

export class UserRepositoryTestError implements IUserRepository {
    save = async (user: User) => {
        throw new Error()
    }

    findByEmail = async (email: string) => {
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