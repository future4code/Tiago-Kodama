import { Router } from "express";
import userRoutes from "./userRoutes"
import recipeRoutes from "./recipeRoutes"

const router = Router()

router.use('/', userRoutes)
router.use('/', recipeRoutes)

export default router