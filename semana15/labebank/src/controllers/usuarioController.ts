import { Request, Response } from "express";
import { usuarioModels } from "../models/usuario";
import { Usuario } from "../constants/types";
import { extrairNumerosCPf } from "../tools/handleCPF";

export const criarConta = (req:Request, res:Response) => {
    try {
        res.statusCode = 400

        const nome:string = req.body.nome
        const cpf:string = extrairNumerosCPf(req.body.cpf)
        const dataNascimento:Date = new Date(req.body.dataNascimento)

        const novoUsuario:Usuario = { nome, cpf, dataNascimento}
        usuarioModels.criarConta(novoUsuario)

        res.status(201).send('O usuário foi criado.')

    } catch (error:any) {
        res.send(error.message)
    }
}

export const adicionarSaldo = (req:Request, res:Response) => {
    try {
        res.statusCode = 400

        const saldo: number = req.body.saldo
        const cpf: string = req.body.cpf



    } catch (error: any) {
        res.send(error.message)
    }
}