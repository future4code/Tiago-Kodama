import { Router } from "express";
import {
    createUserController,
    getUserByIdController,
    updateUserController
} from "../controllers/userController";

const router = Router()

router.post('/user', createUserController)
router.put('/user/edit/:id', updateUserController)
router.get('/user/:id', getUserByIdController)

export default router