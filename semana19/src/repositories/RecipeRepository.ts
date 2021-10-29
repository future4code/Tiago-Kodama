import { RecipeDataBase } from "../database/RecipeDataBase";
import { Recipe } from "../entities/Recipe";
import { IRecipeRepository } from "./IRecipeRepository";

export class RecipeRepository implements IRecipeRepository {

    constructor(
        private recipeDataBase: RecipeDataBase
    ){}

    async findRecipesByUserId(id: string): Promise<Array<Recipe>|null>{
        return await this.recipeDataBase.getRecipesByUserId(id)
    }

    async save(recipe: Recipe): Promise<void>{
        await this.recipeDataBase.createRecipe(
            recipe.title,
            recipe.description,
            recipe.idUser
        )
    }
}