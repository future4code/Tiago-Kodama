import { Request, Response } from "express";
import { CustomError } from "../../CustomError";
import { UserLoggerUseCase } from "./UserLoggerUseCase";

export class UserLoggerController {

    constructor(
        private userLoggerUseCase: UserLoggerUseCase
    ){}

    handle = async (req: Request, res: Response) => {
        try {
            const email: string = req.body.email
            const password: string = req.body.password

            if(!email || !password)
                throw CustomError.badRequest('Name and Password required')

            const token = await this.userLoggerUseCase.execute(email, password)

            if(!token)
                throw CustomError.notFound()

            res.status(200).send({ token })

        } catch (error: any) {
            res.status(error.code || 400).send(error.message || 'Unexpected error')
        }
    }
}