import { Request, Response, Router } from "express";
import { createUserController } from "../useCase/createUser";
import { getUserIntoController } from "../useCase/getUserInfo";

const router = Router()

router.post('/signup', async (req: Request, res: Response) => {
    await createUserController.handle(req, res)
})
router.get('/user/:id', async (req: Request, res: Response) => {
    await getUserIntoController.handle(req, res)
})

export default router