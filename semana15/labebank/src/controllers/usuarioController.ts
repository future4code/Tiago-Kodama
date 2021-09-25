import { Request, Response } from "express";
import { usuarioModels } from "../models/usuario";
import { Usuario } from "../constants/types";
import { extrairNumerosCPf } from "../tools/lidandoCPF";

export const pegarUsuarios = (req: Request, res: Response) => {
  try {
    res.statusCode = 500;

    res.status(200).send(usuarioModels.verUsuarios());
  } catch (error: any) {
    res.send(error.message);
  }
};

export const criarConta = (req: Request, res: Response) => {
  try {
    res.statusCode = 400;

    const nome: string = req.body.nome;
    const cpf: string = extrairNumerosCPf(req.body.cpf);
    const dataNascimento: Date = new Date(req.body.dataNascimento);
    const saldo: number = 0;

    if (!nome || !cpf || !dataNascimento) {
      res.statusCode = 422;
      throw new Error("Informações incorretas ou faltando");
    }

    const novoUsuario: Usuario = { nome, cpf, dataNascimento, saldo };
    usuarioModels.criarConta(novoUsuario);

    res.status(201).send("O usuário foi criado.");
  } catch (error: any) {
    res.send(error.message);
  }
};

export const adicionarSaldo = (req: Request, res: Response) => {
  try {
    res.statusCode = 400;

    const saldo: number = req.body.saldo;
    const cpf: string = extrairNumerosCPf(req.body.cpf);

    if (!saldo || !cpf) {
      res.statusCode = 422;
      throw new Error("Informações incorretas ou faltando");
    }

    usuarioModels.adicionarSaldo(cpf, saldo);

    res.status(200).send("Saldo adicionado");
  } catch (error: any) {
    res.send(error.message);
  }
};

export const consultarSaldo = (req: Request, res: Response) => {
  try {
    res.statusCode = 400;

    const nome: string = req.body.nome;
    const cpf: string = extrairNumerosCPf(req.body.cpf);

    if (!nome || !cpf) {
      res.statusCode = 422;
      throw new Error("Faltando informação");
    }

    const saldo: number = usuarioModels.pegarSaldoPeloNomeECPF(nome, cpf);

    res.status(200).send({ saldo });
  } catch (error: any) {
    res.send(error.message);
  }
};

export const transferenciaInterna = (req: Request, res: Response) => {
  try {
    res.statusCode = 400;

    const nome: string = req.body.nome;
    const cpf: string = req.body.cpf;
    const nomeDestinatario: string = req.body.nomeDestinatario;
    const cpfDestinatario: string = req.body.cpfDestinatario;
    const valorTransferir: number = req.body.valorTransferir;

    const comprovante = usuarioModels.transferenciaInterna(
      nome,
      cpf,
      nomeDestinatario,
      cpfDestinatario,
      valorTransferir
    );

    res.status(200).send(comprovante);
  } catch (error: any) {
    res.send(error.message);
  }
};
