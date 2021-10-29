import { RecipeDataBase } from "../../database/RecipeDataBase";
import { RecipeRepository } from "../../repositories/RecipeRepository";
import { CreateRecipeController } from "./CreateRecipeController";
import { CreateRecipeUseCase } from "./CreateRecipeUseCase";

const recipeDataBase = new RecipeDataBase()
const recipeRepository = new RecipeRepository(recipeDataBase)
const createRecipeUseCase = new CreateRecipeUseCase(recipeRepository)
const createRecipeController = new CreateRecipeController(createRecipeUseCase)

export {createRecipeController}