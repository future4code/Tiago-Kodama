import { Request, Response } from "express";
import { ServerError } from "../../errors/ServerError";
import { CreateRecipeUseCase } from "./CreateRecipeUseCase";
import { ICreateRecipeDTO } from "./ICreateRecipeDTO";

export class CreateRecipeController {
    constructor(
        private createRecipeUseCase: CreateRecipeUseCase
    ){}

    async handle(req: Request, res: Response){
        try {
            const title: string = req.body.title
            const description: string = req.body.description
            const idUser: string = 'db96b931-1002-43c4-872a-ac9a5a764899'

            if(!title || !description || !idUser)
                throw new ServerError('Missing arguments', 422)

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