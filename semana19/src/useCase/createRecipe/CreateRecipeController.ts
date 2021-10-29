import { Request, Response } from "express";
import { ServerError } from "../../errors/ServerError";
import { CreateRecipeUseCase } from "./CreateRecipeUseCase";
import { ICreateRecipeDTO } from "./ICreateRecipeDTO";
import { getTokenData } from "../../services/authenticator"
export class CreateRecipeController {
    constructor(
        private createRecipeUseCase: CreateRecipeUseCase
    ){}

    async handle(req: Request, res: Response){
        try {
            const title: string = req.body.title
            const description: string = req.body.description
            const token: string = req.headers.authorization as string
            
            if(!title || !description || !token)
                throw new ServerError('Missing arguments', 422)

            const tokenData = getTokenData(token)

            if(!tokenData) throw new ServerError('Incorrect token', 401)

            const idUser: string = tokenData.id

            if(!idUser) throw new ServerError('Incorrect token', 401)

            const createRecipeDTO: ICreateRecipeDTO = {
                title, 
                description, 
                idUser
            }

            await this.createRecipeUseCase.execute(createRecipeDTO)

            res.status(201).end()

        } catch (error: any) {
            res.status(error.code || 400).send(error.message || 'Unexpeted error')
        }
    }
}