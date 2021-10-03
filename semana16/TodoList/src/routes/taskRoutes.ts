import { Router } from "express";
import {
    createTask,
    findTaskById,
    findTaskByCreatorId,
    createTaskResponsible,
    findAllResponsiblesById,
    updateTaskStausByTaskIdController,
    middlewareGetTask
} from "../controllers/taskController";

const router = Router()

router.get('/task', middlewareGetTask)
router.post('/task', createTask)

router.post('/task/responsible', createTaskResponsible)

router.put('/task/status/:id', updateTaskStausByTaskIdController)

router.get('/task/:id/responsible', findAllResponsiblesById)
router.get('/task/:id', findTaskById)

export default router