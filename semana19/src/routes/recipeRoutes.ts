import { Request, Response, Router } from "express";
import { createRecipeController } from "../useCase/createRecipe";

const router = Router()

router.post('/recipe', async (req: Request, res: Response) => {
    return await createRecipeController.handle(req, res)
})

export default router