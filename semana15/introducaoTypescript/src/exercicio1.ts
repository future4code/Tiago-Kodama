const minhaString: string = 'Primeira string';
const meuNumero: number = 69;

enum cores {
    AZUL = 'azul',
    AMARELO = 'amarelo',
    VERMELHO = 'vermelho',
    VIOLETA = 'violeta'
}

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: cores
};

const eu: pessoa = {
    nome: 'tiago',
    idade: 29,
    corFavorita: cores.AZUL
}

const voce: pessoa = {
    nome: 'ale',
    idade: 27,
    corFavorita: cores.VERMELHO
}

const ele: pessoa = {
    nome: 'alfredo',
    idade: 55,
    corFavorita: cores.VIOLETA
}

