import { Router } from "express";
import {
    createTask,
    findTaskById,
    findTaskByCreatorId,
    createTaskResponsible,
    findAllResponsiblesById,
    updateTaskStausByTaskIdController
} from "../controllers/taskController";

const router = Router()

router.get('/task', findTaskByCreatorId)
router.post('/task', createTask)
router.post('/task/responsible', createTaskResponsible)
router.put('/task/status/:id', updateTaskStausByTaskIdController)
router.get('/task/:id/responsible', findAllResponsiblesById)
router.get('/task/:id', findTaskById)

export default router