import { Request, Response } from "express";
import { ServerError } from "../../errors/ServerError";
import { GetUserInfoUseCase } from "./GetUserInfoUseCase";

export class GetUserInfoController {
    constructor(
        private getUserUseCase: GetUserInfoUseCase
    ){}

    async handle(req: Request, res: Response){
        try {
            const id_user = req.params.id

            const user = await this.getUserUseCase.execute(id_user)

            if(!user || !Object.keys(user))
                throw new ServerError('User does not exist')

            res.status(200).send({
                id: user.id,
                name: user.name,
                email: user.email
            })

        } catch (error: any) {
            res.status(error.code || 400).send(error.message || "Unexpected error")
        }
    }
}