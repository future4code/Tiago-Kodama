import { PRIVILAGE, user } from '../constants/types';
import { USERS } from '../constants/users';

const users:Array<user> = [...USERS]

export const findUsers = () => {
    return users
}

export const findUsersByType = (type: PRIVILAGE) => {
    const usersPerType: (Array<user>) = users.filter(user => {
        return user.type === type
    })

    return usersPerType
}