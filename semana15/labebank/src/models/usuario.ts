import { Movimento, Usuario } from "../constants/types";
import { paraDDMMAAA } from "../tools/handleDate";

let usuarios:Array<Usuario> = []
let extratos:Array<Movimento> = []

export const usuarioModels = {
    criarConta: (novoUsuario:Usuario) => {
        const jaExiste = usuarios.some(e => e.cpf===novoUsuario.cpf)

        if(jaExiste){
            throw new Error('CPF já cadastrado')
        }

        usuarios.push(novoUsuario)
        console.log(`[CRIOU] ${novoUsuario.nome} - ${paraDDMMAAA(Date.now())}`)
    },

    adicionarSaldo: (cpf: string, valor: number) => {
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
        console.log(`[ADICIONAR SALDO] ${usuario.nome} - ${paraDDMMAAA(Date.now())}`)
    },

    pegarSaldoPeloNomeECPF: (nome: string, cpf: string):number => {
        const usuario:(Usuario|undefined) = usuarios.find(e => e.cpf===cpf && e.nome===nome)

        if(!usuario){
            throw new Error('Usuário não encontrado.')
        }

        let saldo = 0

        extratos.filter(e => {
            return e.cpf===cpf
        
        }).forEach(e => {
            saldo += e.valor
        })

        console.log(`[CONSULTAR SALDO] ${usuario.nome} - ${paraDDMMAAA(Date.now())}`)
        return saldo
    },

    transferenciaInterna: (nome: string, cpf: string, nomeDestinatario: string, cpfDestinatario:string):boolean => {
        const usuario = usuarios.find(e => e.nome===nome && e.cpf===cpf)
        const destinatario = usuarios.find(e => e.nome===nomeDestinatario && e.cpf===cpfDestinatario)

        if(!usuario || !destinatario){
            throw new Error('Informações inválidas')
        }

        return true
    }
}

