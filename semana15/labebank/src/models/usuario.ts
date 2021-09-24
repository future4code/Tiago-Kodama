import { Movimento, Usuario } from "../constants/types";
import { paraDDMMAAA } from "../tools/handleDate";

let usuarios:Array<Usuario> = []
let extratos:Array<Movimento> = []

export const usuarioModels = {
    criarConta: (novoUsuario:Usuario) => {
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
    } 
}

