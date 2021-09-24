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

        if(!nome||!cpf||!dataNascimento){
            res.statusCode = 422
            throw new Error('Informações incorretas ou faltando')
        }

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
        const cpf: string = extrairNumerosCPf(req.body.cpf)

        if(!saldo||!cpf){
            res.statusCode = 422
            throw new Error('Informações incorretas ou faltando')
        }

        usuarioModels.adicionarSaldo(cpf, saldo)

        res.status(200).send('Saldo adicionado')


    } catch (error: any) {
        res.send(error.message)
    }
}

export const consultarSaldo = (req:Request, res:Response) => {
    try {
        res.statusCode = 400

        const nome:string = req.body.nome
        const cpf:string = extrairNumerosCPf(req.body.cpf)
        
        if(!nome||!cpf){
            res.statusCode = 422
            throw new Error('Faltando informação')
        }

        const saldo:number = usuarioModels.pegarSaldoPeloNomeECPF(nome, cpf)

        res.status(200).send({saldo})
        
    } catch (error:any) {
        res.send(error.message)
    }
}