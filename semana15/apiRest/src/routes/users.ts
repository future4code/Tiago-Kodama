import { Router } from "express";
import {
  getUsers,
  getUsersByType,
  getUserByName,
  newUser,
  updateUser,
  reupdateUser,
  deleteById
} from "../controllers/userController";

const router = Router();

router.get("/users", getUsers);
router.get("/users/:type", getUsersByType);

router.post("/user", newUser);
router.put("/user", updateUser);
router.patch("/user", reupdateUser);
router.delete("/user", deleteById);
router.post("/user/:name", getUserByName);

export default router;
