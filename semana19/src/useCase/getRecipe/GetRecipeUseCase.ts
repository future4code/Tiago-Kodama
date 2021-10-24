import { RecipeRepository } from "../../repositories/RecipeRepository";

export class GetRecipeUseCase {
    constructor(
        private recipeRepository: RecipeRepository
    ){}

    async execute(id: string){
        return await this.recipeRepository.findRecipesByUserId(id)
    }
}