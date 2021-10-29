import { Request, Response, Router } from "express";
import { createUserController } from "../useCase/createUser";
import { getUserIntoController } from "../useCase/getUserInfo";
import { loginUserController } from "../useCase/loginUser";

const router = Router();

router.post("/login", async (req: Request, res: Response) => {
  await loginUserController.handle(req, res);
});
router.post("/signup", async (req: Request, res: Response) => {
  await createUserController.handle(req, res);
});
router.get("/user/:id", async (req: Request, res: Response) => {
  await getUserIntoController.handle(req, res);
});

export default router;
