import { Request, Response } from "express";
import { usuarioModels } from "../models/usuario";
import { Movimento, Usuario } from "../constants/types";
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
    const extrato: Array<Movimento> = [];

    if (!nome || !cpf || !dataNascimento) {
      res.statusCode = 422;
      throw new Error("Informações incorretas ou faltando");
    }

    const novoUsuario: Usuario = {
      nome,
      cpf,
      dataNascimento,
      saldo,
      extrato,
    };
    usuarioModels.criarConta(novoUsuario);

    res.status(201).send("O usuário foi criado.");
  } catch (error: any) {
    res.send(error.message);
  }
};

export const adicionarSaldo = (req: Request, res: Response) => {
  try {
    res.statusCode = 400;

    const saldo: number = Number(req.body.saldo);
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

    const cpf: string = extrairNumerosCPf(req.query.cpf as string);

    if (!cpf) {
      res.statusCode = 422;
      throw new Error("Faltando informação");
    }

    const saldo: number = usuarioModels.pegarSaldoPeloCPF(cpf);

    res.status(200).send({ saldo });
  } catch (error: any) {
    res.send(error.message);
  }
};

export const transferenciaInterna = (req: Request, res: Response) => {
  try {
    res.statusCode = 400;

    const nome: string = req.body.nome;
    const cpf: string = extrairNumerosCPf(req.body.cpf);
    const nomeDestinatario: string = req.body.nomeDestinatario;
    const cpfDestinatario: string = extrairNumerosCPf(req.body.cpfDestinatario);
    const valorTransferir: number = req.body.valorTransferir;

    if(!nome || !cpf){
        res.statusCode = 422
        throw new Error("Informações do usuário incorretas")
    }
    if(!nomeDestinatario || !cpfDestinatario){
        res.statusCode = 422
        throw new Error("Informações do destinatário incorretas")
    }
    if(isNaN(valorTransferir)){
        res.statusCode = 422
        throw new Error("Valor incorreto. Deve ser um número")
    }

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

export const pagarConta = (req: Request, res: Response) => {
  try {
    res.statusCode = 400;

    const hoje = new Date(Date.now());

    const cpf: string = extrairNumerosCPf(req.body.cpf);
    const descricao: string = req.body.descricao;
    const valor: number = req.body.valor;
    const data: Date = req.body.data ? new Date(req.body.data) : hoje;

    if(!cpf){
        res.statusCode = 422
        throw new Error("Informações do usuário incorretas")
    }
    if(!descricao){
        res.statusCode = 422
        throw new Error("Informações da descr incorretas")
    }
    if(isNaN(valor)){
        res.statusCode = 422
        throw new Error("Valor incorreto. Deve ser um número")
    }
    if (data < hoje) {
      res.statusCode = 422;
      throw new Error("A data de pagamento não pode ser antes de hoje");
    }

    const comprovante = usuarioModels.pagarConta(data, descricao, valor, cpf);

    res.status(200).send(comprovante);
  } catch (error: any) {
    res.send(error.message);
  }
};

export const atualizarSaldo = (req: Request, res: Response) => {
  try {
    res.statusCode = 400;

    const cpf: string = extrairNumerosCPf(req.body.cpf);

    if (!cpf) {
      res.statusCode = 422;
      throw new Error("CPF não informado");
    }

    usuarioModels.atualizarSaldo(cpf);

    res.status(200).send("Saldo atualizado com sucesso");
  } catch (error: any) {
    res.send(error.message);
  }
};
