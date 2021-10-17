import { Request, Response, Router } from "express";
import {createProductController} from '../useCases/CreateProducs'

const router = Router()

router.post('/', (req:Request, res: Response) => {
    return createProductController.handle(req, res)
})

export default router