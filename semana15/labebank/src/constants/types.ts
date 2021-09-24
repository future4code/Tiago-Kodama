export type movimento = {
    cpf: string,
    valor: number,
    data: Date,
    descricao?: string
}

export type Usuario = {
    nome: string,
    cpf: string,
    dataNascimento: Date,
}