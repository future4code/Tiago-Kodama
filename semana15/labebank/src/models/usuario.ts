import { Movimento, Usuario } from "../constants/types";
import { ehMaior18, paraDDMMAAA } from "../tools/lidandoDatas";

let usuarios: Array<Usuario> = [];

export const usuarioModels = {
  verUsuarios: (): Array<Usuario> => {
    console.log(`[PEGAR USUARIOS] - ${paraDDMMAAA(Date.now())}`);
    return usuarios;
  },

  criarConta: (novoUsuario: Usuario): void => {
    const jaExiste = usuarios.some((e) => e.cpf === novoUsuario.cpf);

    if (jaExiste) {
      throw new Error("CPF já cadastrado");
    }
    if (!ehMaior18(novoUsuario.dataNascimento)) {
      throw new Error("Usuário deve ter no mínimo 18 anos");
    }

    usuarios.push(novoUsuario);
    console.log(`[CRIOU] ${novoUsuario.nome} - ${paraDDMMAAA(Date.now())}`);
  },

  adicionarSaldo: (cpf: string, valor: number): void => {
    const usuario: Usuario | undefined = usuarios.find((e) => e.cpf === cpf);

    if (!usuario) {
      throw new Error("Usuário não encontrado.");
    }

    const novoMovimento: Movimento = {
      cpf: usuario.cpf,
      data: new Date(Date.now()),
      valor: valor,
      descricao: "Depósito de dinheiro",
    };

    usuario.extrato.push(novoMovimento);

    console.log(
      `[ADICIONAR SALDO] ${usuario.nome} - ${paraDDMMAAA(Date.now())}`
    );
  },

  pegarSaldoPeloCPF: (cpf: string): number => {
    const usuario: Usuario | undefined = usuarios.find((e) => e.cpf === cpf);

    if (!usuario) {
      throw new Error("Usuário não encontrado.");
    }

    console.log(
      `[CONSULTAR SALDO] ${usuario.nome} - ${paraDDMMAAA(Date.now())}`
    );
    return usuario.saldo;
  },

  transferenciaInterna: (
    nome: string,
    cpf: string,
    nomeDestinatario: string,
    cpfDestinatario: string,
    valorTransferir: number
  ): Movimento => {
    const usuario = usuarios.find((e) => e.nome === nome && e.cpf === cpf);
    const destinatario = usuarios.find(
      (e) => e.nome === nomeDestinatario && e.cpf === cpfDestinatario
    );

    if (!usuario || !destinatario || valorTransferir < 0) {
      throw new Error("Informações inválidas");
    }
    if (usuario.saldo < valorTransferir) {
      throw new Error("Saldo insuficiente");
    }

    const comprovanteRecebeu: Movimento = {
      cpf: destinatario.cpf,
      data: new Date(Date.now()),
      valor: valorTransferir,
      descricao: `Valor depositado pelo ${usuario.nome}`,
    };

    const comprovanteDepositou: Movimento = {
      cpf: usuario.cpf,
      data: new Date(Date.now()),
      valor: -1 * valorTransferir,
      descricao: `Valor depositado para ${destinatario.nome}`,
    };

    destinatario.extrato.push(comprovanteRecebeu);
    usuario.extrato.push(comprovanteDepositou);

    console.log(
      `[TRANSFERENCIA INTERNA] ${usuario.nome} - ${paraDDMMAAA(Date.now())}`
    );
    return comprovanteRecebeu;
  },

  pagarConta: (
    data: Date,
    descricao: string,
    valor: number,
    cpf: string
  ): Movimento => {
    const usuario = usuarios.find((e) => e.cpf === cpf);

    if (!usuario || valor < 0) {
      throw new Error("Informações inválidas");
    }
    if (usuario.saldo < valor) {
      throw new Error("Saldo insuficiente");
    }

    const movimento: Movimento = {
      cpf: usuario.cpf,
      descricao: descricao,
      valor: valor,
      data: data,
    };

    usuario.extrato.push(movimento);
    console.log(`[PAGAR CONTA] ${usuario.nome} - ${paraDDMMAAA(Date.now())}`);
    return movimento;
  },

  atualizarSaldo: (cpf: string): void => {
    const usuario = usuarios.find((e) => e.cpf === cpf);

    if (!usuario) {
      throw new Error("Informações inválidas");
    }

    let saldo = 0;
    const hoje = new Date(Date.now());

    usuario.extrato.forEach((e) => {
      if (hoje >= e.data) saldo += e.valor;
    });

    usuario.saldo = saldo;
    console.log(
      `[ATUALIZAR SALDO] ${usuario.nome} - ${paraDDMMAAA(Date.now())}`
    );
  },
};
