import { Router } from "express";
import {
    pegarUsuarios,
    criarConta,
    adicionarSaldo,
    consultarSaldo,
    transferenciaInterna
} from "../controllers/usuarioController"

const router = Router()

router.get('/users', pegarUsuarios)
router.post('/users', criarConta)
router.post('/users/adicionar-saldo', adicionarSaldo)
router.post('/users/consultar-saldo', consultarSaldo)
router.post('/users/transferencia-interna', transferenciaInterna)

export default router;