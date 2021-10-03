import { Router } from "express";
import {
  createUserController,
  getUserByIdController,
  updateUserController,
  getUsersController,
  searchUsersController,
} from "../controllers/userController";

const router = Router();

router.get("/user", searchUsersController);
router.get("/user/all", getUsersController);
router.post("/user", createUserController);

router.put("/user/edit/:id", updateUserController);
router.get("/user/:id", getUserByIdController);

export default router;
