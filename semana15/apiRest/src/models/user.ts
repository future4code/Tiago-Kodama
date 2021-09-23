import { PRIVILAGE, user } from '../constants/types';
import { USERS } from '../constants/users';

const users:Array<user> = [...USERS]

export const findUsers = ():Array<user> => {
    return users
}

export const findUsersByType = (type: PRIVILAGE):Array<user> => {
    const usersPerType: (Array<user>) = users.filter(user => {
        return user.type === type
    })

    return usersPerType
}

export const findUserByName = (name: string):(user|undefined) => {
    const userPerName:(user|undefined) = users.find(user => {
        return user.name.toUpperCase() === name.toUpperCase()
    })

    return userPerName
}