import { Request, Response, Router } from "express";
import { userLoggerController } from "../useCase/userLogger";

const router = Router()

router.post('/users/login', async (req: Request ,res: Response) => {
    await userLoggerController.handle(req, res)
})

router.post('/users/signup')
router.post('/posts/create')

router.get('/posts/:id')

export { router }