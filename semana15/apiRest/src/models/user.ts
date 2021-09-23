import { user } from '../constants/types';
import { USERS } from '../constants/users';

const users:Array<user> = [...USERS]

export const findUsers = () => {
    return users
}
