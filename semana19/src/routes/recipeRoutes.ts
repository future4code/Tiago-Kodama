import { Request, Response, Router } from "express";
import { createRecipeController } from "../useCase/createRecipe";
import { getRecipeController } from "../useCase/getRecipe";

const router = Router()

router.post('/recipe', async (req: Request, res: Response) => {
    return await createRecipeController.handle(req, res)
})
router.get('/recipe/:id', async (req: Request, res: Response) => {
    return await getRecipeController.handle(req, res)
})

export default router