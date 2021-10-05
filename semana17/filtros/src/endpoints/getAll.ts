import { Request, Response } from 'express'
import { connection } from '../database/connection'
import selectAllUsers from '../services/users'

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
        let name = req.query.name || ""
        let type = req.query.user || "" 
        let ordenation = req.query.order as string

        if(!['ASC', 'DESC'].includes(ordenation)){
            ordenation = 'ASC'
        }

        const users = await connection('aula49_exercicio')
            .where('name', 'like', `%${name}%`)
            .andWhere('type', 'like', `%${type}%`)
            .orderBy('name', ordenation)

       if(!users.length){
          res.statusCode = 404
          throw new Error("No users found")
       }


 
       res.status(200).send(users)
       
    } catch (error: any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }
