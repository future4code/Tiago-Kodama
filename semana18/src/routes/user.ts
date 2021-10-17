import { Request, Response, Router } from "express";
import { createUserController } from "../useCases/CreateUser";
import { getAllUsersController } from "../useCases/GetAllUsers";

const router = Router()

router.post('/', (req: Request, res: Response) => {
    return createUserController.handle(req, res)
})

router.get('/', (req: Request, res: Response) => {
    return getAllUsersController.handle(req, res)
})

export default router