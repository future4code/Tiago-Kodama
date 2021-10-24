import { Request, Response } from "express";
import { Recipe } from "../../entities/Recipe";
import { ServerError } from "../../errors/ServerError";
import { getTokenData } from "../../services/authenticator";
import { GetRecipeUseCase } from "./GetRecipeUseCase";

export class GetRecipeController {
    constructor(
        private getRecipeUseCase: GetRecipeUseCase
    ){}

    async handle(req: Request, res: Response){
        try {
            const id: string = req.params.id

            const token: string|undefined = req.headers.authorization

            if(!token) throw new ServerError('Missing token', 402)

            const tokenData = getTokenData(token)

            if(!tokenData) throw new ServerError('Incorrect token', 402)

            const arrayRecipes:(Array<Recipe>|null) = await this.getRecipeUseCase.execute(id)

            if(!arrayRecipes)
                throw new ServerError('Recipe does not exists', 404)

            const recipes = arrayRecipes.map(recipe => {
                return {
                    id: recipe.id,
                    title: recipe.title,
                    description: recipe.description,
                    createdAt: recipe.createdAt
                }
            })

            res.status(200).send(recipes)

        } catch (error: any) {
            res.status(error.code || 400).send(error.message || "Unexpected error")
        }
    }
}