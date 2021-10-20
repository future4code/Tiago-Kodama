import { Request, Response, Router } from "express";
import {createProductController} from '../useCases/CreateProducs'
import { getAllProductsController } from "../useCases/GetAllProducts";

const router = Router()

router.get('/', (req:Request, res: Response) => {
    return getAllProductsController.handle(req, res)
})

router.post('/', (req:Request, res: Response) => {
    return createProductController.handle(req, res)
})

export default router