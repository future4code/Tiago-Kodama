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
router.get('/users/consultar-saldo/:cpf', consultarSaldo)
router.put('/users/adicionar-saldo', adicionarSaldo)
router.post('/users/transferencia-interna', transferenciaInterna)

export default router;