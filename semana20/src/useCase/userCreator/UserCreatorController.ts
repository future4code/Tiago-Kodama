import { Request, Response } from "express";
import { CustomError } from "../../CustomError";
import { UserCreatorUseCase } from "./UserCreatorUseCase";

export class UserCreatorController {
    constructor(
        private userCreatorUseCase: UserCreatorUseCase
    ){}

    handle = async (req: Request, res: Response) => {
        try {
            const name: string = req.body.name
            const email: string = req.body.email
            const password: string = req.body.password

            if(!name || !email || !password)
                throw CustomError.badRequest('name, password and password required')

            await this.userCreatorUseCase.execute(name, email, password)

            res.status(201).send('Success')

        } catch (error: any) {
            res.status(error.code || 400).send(error.message || 'Unexpected error')
        }
    }
}