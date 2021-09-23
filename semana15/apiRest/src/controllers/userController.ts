import { Response, Request } from 'express';
import { user } from '../constants/types';
import {
    findUsers
} from '../models/user';

export const getUsers = (req: Request, res: Response) => {
    try {
        const users: Array<user> = findUsers()

        res.send(users)

    } catch (error:any) {
        res.status(400).send(error.message)
    }
}