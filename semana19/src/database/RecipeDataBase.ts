import { Recipe } from "../entities/Recipe";
import { BaseDataBase } from "./BaseDataBase";

export class RecipeDataBase extends BaseDataBase {

    async getRecipesByUserId(id: string): Promise<Array<Recipe>|null>{
        try {
            const res = await BaseDataBase.connection.raw(`
                SELECT 
                Id as id,
                Title as title,
                Description as description,
                CreatedAt as createdAt,
                Id_user as idUser
                FROM Recipe
                WHERE Id_user = '${id}';
            `)
                
            const recipe = res[0] as Array<Recipe>

            if(!recipe || !recipe.length) throw new Error()

            return recipe 
        } catch (error: any) {
            return null
        }
    }


    async createRecipe(
        Title:string,
        Description: string,
        Id_user: string
        ): Promise<Recipe|null>{

        const recipe = new Recipe(
            Title,
            Description,
            Id_user
        )

        try {
            await BaseDataBase.connection('Recipe').insert({
                Title,
                Description,
                Id_user,
                Id: recipe.id
            })

            return recipe

        } catch (error) {
            return null            
        } 
    }
}