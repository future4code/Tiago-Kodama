import { Router } from "express";
import {
    createTask,
    findTaskById
} from "../controllers/taskController";

const router = Router()

router.post('/task', createTask)
router.get('/task/:id', findTaskById)

export default router