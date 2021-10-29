import { Request, Response } from "express";
import { ServerError } from "../../errors/ServerError";
import { getTokenData } from "../../services/authenticator";
import { GetUserInfoUseCase } from "./GetUserInfoUseCase";

export class GetUserInfoController {
    constructor(
        private getUserUseCase: GetUserInfoUseCase
    ){}

    async handle(req: Request, res: Response){
        try {
            const id_user = req.params.id
            const token = req.headers.authorization

            if(!token) throw new ServerError('Missing token', 422)

            const tokenData = getTokenData(token)

            if(!tokenData) throw new ServerError('Incorrect token', 402)
            else if(tokenData.id!==id_user) throw new ServerError('You can not access this page', 403)

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