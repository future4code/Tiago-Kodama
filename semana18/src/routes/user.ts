import { Router } from "express";
import { createUserController } from "../useCases/CreateUser";

const router = Router()

router.get('/', createUserController.handle)

export { router }