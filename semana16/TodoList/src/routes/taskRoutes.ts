import { Router } from "express";
import {
  createTask,
  findTaskById,
  removeTask,
  createTaskResponsible,
  findAllResponsiblesById,
  updateTaskStausByTaskIdController,
  middlewareGetTask,
  findAllDelayedTasks,
  removeTaskResponsible,
  updateTaskStausByTaskIdsController,
} from "../controllers/taskController";

const router = Router();

router.get("/task", middlewareGetTask);
router.post("/task", createTask);

router.post("/task/responsible", createTaskResponsible);

router.get("/task/delayed", findAllDelayedTasks);

router.put("/task/status/edit", updateTaskStausByTaskIdsController);
router.put("/task/status/:id", updateTaskStausByTaskIdController);

router.delete("/task/:id", removeTask);
router.delete(
  "/task/:taskId/responsible/:responsibleUserId",
  removeTaskResponsible
);
router.get("/task/:id/responsible", findAllResponsiblesById);
router.get("/task/:id", findTaskById);

export default router;
