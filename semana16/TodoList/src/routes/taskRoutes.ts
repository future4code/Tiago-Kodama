import { Router } from "express";
import {
    createTask,
    findTaskById,
    findTaskByCreatorId,
    createTaskResponsible
} from "../controllers/taskController";

const router = Router()

router.get('/task', findTaskByCreatorId)
router.post('/task', createTask)
router.post('/task/responsible', createTaskResponsible)
router.get('/task/:id', findTaskById)

export default router