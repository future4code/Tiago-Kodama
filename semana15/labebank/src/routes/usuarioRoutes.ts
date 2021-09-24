import { Router } from "express";
import {
    criarConta
} from "../controllers/usuarioController"

const router = Router();

router.post('/usuario', criarConta);

export default router;