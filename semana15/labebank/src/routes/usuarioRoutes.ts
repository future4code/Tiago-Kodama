import { Router } from "express";
import {
  pegarUsuarios,
  criarConta,
  adicionarSaldo,
  consultarSaldo,
  transferenciaInterna,
  pagarConta,
  atualizarSaldo,
} from "../controllers/usuarioController";

const router = Router();

router.get("/users", pegarUsuarios);
router.post("/users", criarConta);

router.post("/users/pagar-conta", pagarConta);
router.post("/users/transferencia-interna", transferenciaInterna);
router.put("/users/atualizar-saldo", atualizarSaldo);
router.put("/users/adicionar-saldo", adicionarSaldo);

router.get("/users/consultar-saldo/:cpf", consultarSaldo);

export default router;
