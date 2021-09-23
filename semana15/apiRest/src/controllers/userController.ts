import { Response, Request } from 'express';
import { user, PRIVILAGE } from '../constants/types';
import {
    findUsers,
    findUsersByType
} from '../models/user';

export const getUsers = (req: Request, res: Response) => {
    try {
        const users: Array<user> = findUsers()

        res.send(users)

    } catch (error:any) {
        res.status(400).send(error.message)
    }
}

export const getUsersByType = (req:Request, res:Response) => {
    try {
        
        const type:PRIVILAGE = req.params.type as PRIVILAGE

        if(!Object.values(PRIVILAGE).includes(type)){
            res.statusCode = 404
            throw new Error('Incorrect params')
        }

        res.send(findUsersByType(type))

    } catch (error:any) {
        res.status(422).send(error.message)
    }
}