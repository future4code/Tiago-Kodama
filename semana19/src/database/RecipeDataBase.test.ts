import { RecipeDataBase } from "./RecipeDataBase";

describe('Recipe DataBase', () => {
    const recipeDataBase = new RecipeDataBase()
    const title = 'Teste'
    const description = `Description teste${Math.floor(Math.random()*100)}`
    const idUser = '43c6fa2f-296d-4e6d-96f8-2468f2ff3d9a'

    test('Get user by Id', async () => {
        const recipe = await recipeDataBase.getRecipesByUserId(idUser)

        if(!recipe) return

        expect(recipe.length).toBeGreaterThan(0)
    })

    test('Create recipe', async () => {
        const oldCountRecipe = await recipeDataBase.getRecipesByUserId(idUser)
        const oldCount = oldCountRecipe?.length as number

        await recipeDataBase.createRecipe(
            title,
            description,
            idUser
        )

        const newCountRecipe = await recipeDataBase.getRecipesByUserId(idUser)
        const newCount = newCountRecipe?.length

        expect(newCount).toBeGreaterThan(oldCount)
    })
})