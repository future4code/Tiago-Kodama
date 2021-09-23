import { Response, Request } from 'express';
import { user, PRIVILAGE } from '../constants/types';
import {
    findUsers,
    findUsersByType,
    findUserByName
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

export const getUserByName = (req:Request, res:Response) => {
    try {
        
        const name:string = req.body.name as string

        if(!name){
            res.statusCode = 404
            throw new Error('Missing name.')
        }

        const findedUser:(user|undefined) = findUserByName(name)

        if(!findedUser){
            res.statusCode = 404
            throw new Error('This user do not exists.')
        }

        res.send(findedUser)

    } catch (error:any) {
        res.status(422).send(error.message)
    }
}