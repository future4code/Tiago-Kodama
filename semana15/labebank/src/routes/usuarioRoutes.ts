import { Router } from "express";
import {
    pegarUsuarios,
    criarConta,
    adicionarSaldo,
    consultarSaldo,
    transferenciaInterna
} from "../controllers/usuarioController"

const router = Router()

router.get('/usuario', pegarUsuarios)
router.post('/usuario/criar-conta', criarConta)
router.post('/usuario/adicionar-saldo', adicionarSaldo)
router.post('/usuario/consultar-saldo', consultarSaldo)
router.post('/usuario/transferencia-interna', transferenciaInterna)

export default router;