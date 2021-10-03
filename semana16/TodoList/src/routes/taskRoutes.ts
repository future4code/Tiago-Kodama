import { Router } from "express";
import {
    createTask,
    findTaskById,
    findTaskByCreatorId
} from "../controllers/taskController";

const router = Router()

router.get('/task', findTaskByCreatorId)
router.post('/task', createTask)
router.get('/task/:id', findTaskById)

export default router