import { Request, Response, Router } from "express";
import { userCreatorController } from "../useCase/userCreator";
import { userLoggerController } from "../useCase/userLogger";

const router = Router()

router.post('/users/login', async (req: Request ,res: Response) => {
    await userLoggerController.handle(req, res)
})

router.post('/users/signup', async (req: Request ,res: Response) => {
    await userCreatorController.handle(req, res)
})

router.post('/posts/create')

router.get('/posts/:id')

export { router }