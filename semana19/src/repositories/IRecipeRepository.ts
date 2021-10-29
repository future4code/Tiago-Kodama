import { Recipe } from "../entities/Recipe";

export interface IRecipeRepository {
    findRecipesByUserId(id: string): Promise<Array<Recipe>|null>;

    save(recipe: Recipe): Promise<void>;
}