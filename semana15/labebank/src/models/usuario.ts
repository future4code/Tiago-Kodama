import { Movimento, Usuario } from "../constants/types";
import { paraDDMMAAA } from "../tools/lidandoDatas";

let usuarios:Array<Usuario> = []
let extratos:Array<Movimento> = []

export const usuarioModels = {
    verUsuarios: ():Array<Usuario> => {
        return usuarios
    },

    criarConta: (novoUsuario:Usuario):void => {
        const jaExiste = usuarios.some(e => e.cpf===novoUsuario.cpf)

        if(jaExiste){
            throw new Error('CPF já cadastrado')
        }

        usuarios.push(novoUsuario)
        console.log(`[CRIOU] ${novoUsuario.nome} - ${paraDDMMAAA(Date.now())}`)
    },

    adicionarSaldo: (cpf: string, valor: number):void => {
        const usuario:(Usuario|undefined) = usuarios.find(e => e.cpf===cpf)

        if(!usuario){
            throw new Error('Usuário não encontrado.')
        }

        const novoMovimento:Movimento = {
            cpf: usuario.cpf,
            data: new Date(Date.now()),
            valor: valor,
            descricao: 'Depósitado pelo proprietário.'
        }

        extratos.push(novoMovimento)
        usuario.saldo += valor

        console.log(`[ADICIONAR SALDO] ${usuario.nome} - ${paraDDMMAAA(Date.now())}`)
    },

    pegarSaldoPeloNomeECPF: (nome: string, cpf: string):number => {
        const usuario:(Usuario|undefined) = usuarios.find(e => e.cpf===cpf && e.nome===nome)

        if(!usuario){
            throw new Error('Usuário não encontrado.')
        }

        console.log(`[CONSULTAR SALDO] ${usuario.nome} - ${paraDDMMAAA(Date.now())}`)
        return usuario.saldo
    },

    transferenciaInterna: (
        nome: string, 
        cpf: string, 
        nomeDestinatario: string, 
        cpfDestinatario:string, 
        valorTransferir:number
        ):Movimento => {

        const usuario = usuarios.find(e => e.nome===nome && e.cpf===cpf)
        const destinatario = usuarios.find(e => e.nome===nomeDestinatario && e.cpf===cpfDestinatario)

        if(!usuario || !destinatario || valorTransferir<0){
            throw new Error('Informações inválidas')
        }
        if(usuario.saldo<valorTransferir){
            throw new Error('Saldo insuficiente')
        }

        usuario.saldo -= valorTransferir
        destinatario.saldo += valorTransferir

        const comprovanteRecebeu:Movimento = {
            cpf: destinatario.cpf,
            data: new Date(Date.now()),
            valor: valorTransferir,
            descricao: `Valor depositado pelo ${usuario.nome}`
        }

        const comprovanteDepositou:Movimento = {
            cpf: usuario.cpf,
            data: new Date(Date.now()),
            valor: (-1)*valorTransferir,
            descricao: `Valor depositado para ${destinatario.nome}`
        }

        extratos.push(comprovanteRecebeu)
        extratos.push(comprovanteDepositou)

        return comprovanteDepositou
    }
}

