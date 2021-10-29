import { Recipe } from "../../entities/Recipe";
import { ServerError } from "../../errors/ServerError";
import { IRecipeRepository } from "../../repositories/IRecipeRepository";
import { ICreateRecipeDTO } from "./ICreateRecipeDTO";

export class CreateRecipeUseCase {
    constructor(
        private recipeRepository: IRecipeRepository
    ){}

    async execute(recipeDTO: ICreateRecipeDTO){
        const oldCountRecipes = await this.recipeRepository.findRecipesByUserId(recipeDTO.idUser)
        const oldCount = oldCountRecipes?.length as number

        const recipe = new Recipe(
            recipeDTO.title,
            recipeDTO.description,
            recipeDTO.idUser
        )

        await this.recipeRepository.save(recipe)

        const newCountRecipes = await this.recipeRepository.findRecipesByUserId(recipeDTO.idUser)

        if( !newCountRecipes )
            throw new ServerError('Unexpected error', 500)

        const newCount = newCountRecipes.length as number

        if( newCount <= oldCount )
            throw new ServerError('We could not add recipe', 500)
    }
}