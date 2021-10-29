import { Request, Response } from "express";
import { ServerError } from "../../errors/ServerError";
import { generateToken } from "../../services/authenticator";
import { IAuthenticationDTO } from "../../services/IAuthenticationDTO";
import { ILoginUserDTO } from "./ILoginUserDTO";
import { LoginUserUseCase } from "./LoginUserUseCase"

export class LoginUserController {
    constructor(
        private loginUserUseCase: LoginUserUseCase
    ){}

    async handle(req: Request, res: Response){
        try {
            const email: string = req.body.email
            const password: string = req.body.password

            if(!email || !password) throw new ServerError("Missing arguments", 422)

            const loginUserDTO: ILoginUserDTO = {
                email,
                password
            }

            const user = await this.loginUserUseCase.execute(loginUserDTO)

            if(!user) throw new ServerError('Incorrect email or password', 402)

            const payload: IAuthenticationDTO = {
                id: user.id
            }
            const token = generateToken(payload)

            res.status(200).send({
                access_token: token
            })

        } catch (error: any) {
            res.status(error.code || 400).send(error.message || 'Unexpected error')
        }
    }
}