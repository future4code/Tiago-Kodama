export type Movimento = {
  cpf: string;
  valor: number;
  data: Date;
  descricao?: string;
};

export type Usuario = {
  nome: string;
  cpf: string;
  dataNascimento: Date;
  saldo: number;
  extrato: Array<Movimento>;
};
