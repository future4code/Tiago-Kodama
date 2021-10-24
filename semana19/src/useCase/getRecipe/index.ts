import { RecipeDataBase } from "../../database/RecipeDataBase";
import { RecipeRepository } from "../../repositories/RecipeRepository";
import { GetRecipeController } from "./GetRecipeController";
import { GetRecipeUseCase } from "./GetRecipeUseCase";

const recipeDataBase = new RecipeDataBase()
const recipeRepository = new RecipeRepository(recipeDataBase)
const getRecipeUseCase = new GetRecipeUseCase(recipeRepository)
const getRecipeController = new GetRecipeController(getRecipeUseCase)

export { getRecipeController }