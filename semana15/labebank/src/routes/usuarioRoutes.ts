import { Router } from "express";
import {
    criarConta,
    adicionarSaldo,
    consultarSaldo
} from "../controllers/usuarioController"

const router = Router();

router.post('/usuario/criar-conta', criarConta);
router.post('/usuario/adicionar-saldo', adicionarSaldo);
router.post('/usuario/consultar-saldo', consultarSaldo);

export default router;