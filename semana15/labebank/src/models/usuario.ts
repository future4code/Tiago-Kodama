import { Movimento, Usuario } from "../constants/types";
import { ehMaior18, paraDDMMAAA } from "../tools/lidandoDatas";

let usuarios: Array<Usuario> = [];

const usuario1: Usuario = {
  cpf: "12345678900",
  nome: "Usuario 1",
  dataNascimento: new Date("25-04-2015"),
  saldo: 0,
  extrato: [],
};
const usuario2: Usuario = {
  cpf: "99999999900",
  nome: "Usuario 1",
  dataNascimento: new Date("25-04-2015"),
  saldo: 0,
  extrato: [],
};
usuarios.push(usuario1);
usuarios.push(usuario2);

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
    usuario.saldo += valor;

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

    usuario.saldo -= valorTransferir;
    destinatario.saldo += valorTransferir;

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
    return comprovanteDepositou;
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

    const movimento:Movimento = {
        cpf:usuario.cpf,
        descricao: descricao,
        valor: valor,
        data: data
    }

    usuario.extrato.push(movimento)
    return movimento
  },
};
