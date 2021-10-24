import { Request, Response, Router } from "express";
import { createUserController } from "../useCase/createUser";

const router = Router()

router.post('/signup', async (req: Request, res: Response) => {
    await createUserController.handle(req, res)
})

export default router