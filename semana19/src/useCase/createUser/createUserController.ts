import { Response, Request } from 'express'
import { User } from '../../entities/User';
import { ServerError } from '../../errors/ServerError';
import { CreateUserUseCase } from './createUserUseCase';
import { ICreateUserDTO } from './ICreateUserDTO';

export class createUserController {

    constructor(
        private createUserUseCase: CreateUserUseCase
    ){}

    async handle(req: Request, res: Response):Promise<void>{
        try {
            const name: string = req.body.name
            const email: string = req.body.name
            const password: string = req.body.name
    
            if(!name || !email || !password) throw new ServerError("Missing arguments", 422)
            else if( !email.includes('@') ) throw new ServerError("Email format is incorrecting", 422)
            else if( password.length < 6 ) throw new ServerError("Pasword must have 6 characteres", 422)
    
            const iCreateUserDTO: ICreateUserDTO = {
                name,
                email,
                password
            }
    
            await this.createUserUseCase.execute(iCreateUserDTO)
            
            // change Date.now to jwb
            res.status(201).send({access_token: Date.now()})

        } catch (error: any) {
            res.status(error.code || 400).send(error.message || 'Unexpected error')
        }

    }
}