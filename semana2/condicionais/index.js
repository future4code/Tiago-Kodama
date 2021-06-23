/**
 * INTERPRETAÇÃO
//  */
// // 1-
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }
// // a) Verifica se é par
// // b) pares
// // c) Ímpares

// // 2-
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
// // a) associar a fruta ao preço
// // b) O preço da fruta Maçã é R$ 2.25
// // c) O preço da fruta êra é R$ 5.5

// // 3-
// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// // a) Input de número
// // b) Esse número passou no teste e mensagem não está definido; Mensagem não está definido
// // c) Variável mensagem está sendo chamada de fora do escopo

/**
 * ESCRITA DE CÓDIGO
 */

// // 1-
// // 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

// //     a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
// //     b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
//         const idade = Number(prompt('Idade:'))

// //     c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`
//         if(idade >= 18) console.log('Você pode dirigir')
//         else console.log('Você não pode dirigir')

// // 2-
// const periodoEstuda = prompt('M, V ou N').toUpperCase()

// if( periodoEstuda === "M" ) console.log('Bom dia!')
// else if( periodoEstuda === "V" ) console.log('Boa tarde!')
// else if( periodoEstuda === "N" ) console.log('Boa noite!')
// else console.log('Opção inválida')

// // 3-
// const periodoEstuda = prompt('M, V ou N').toUpperCase()

// switch (periodoEstuda) {
//     case "M":
//         console.log('Bom dia!')
//         break;
//     case "V":
//         console.log("Boa tarde!")
//         break;
//     case "N":
//         console.log('Boa noite!')
//         break;

//     default:
//         console.log("Opção inválida")
//         break;
// }

// // 4- 
// const generoFilme = prompt('Qual é o gênero d filme?').toLowerCase()
// const precoFilme = Number(prompt('Qual é o preço do filme?'))

// if( generoFilme==='fantasia' && precoFilme<15 )
//     console.log('Bom filme')
// else
//     console.log('Escolha outro filme :(')

/***
 * DESAFIOS
 */

// 2-
const nome = prompt('Nome:')
const tipoJogo = prompt('IN ou DO:').toUpperCase()
const etapaJogo = prompt('SF, DT ou FI:').toUpperCase()
const categoria = Number(prompt('1, 2, 3 ou 4:'))
const quantidadeIngressos = Number(prompt('Quantidade de ingressos:'))

const dados = {
    nome, 
    tipoJogo, 
    etapaJogo, 
    categoria, 
    quantidadeIngressos
}

const precosIngresso = { 
    SF: [1320, 880, 550, 220],
    DT: [660, 440, 330, 170],
    FI: [1980, 1320, 880, 330]
}

function imprimir( dados, precosIngresso ){

    const legenda = {
        IN:'Internacional',
        DO:'Doméstico',
        SF:'Semi Final',
        DT:'Decisão terceiro lugar',
        FI:'Final'
    }

    const converterValores = (tipoJogo, valor) => {
        const precoDolar = 4.10
    
        if( tipoJogo === 'IN' ) 
            return `U$ ${precoDolar*valor}`
    
        return `R$ ${valor}`
    }

    const precoJogo = precosIngresso[dados.etapaJogo]

    if(!precoJogo){
        console.log('Dados incorretos')
        return
    }

    const valorUnitarioIngresso = precoJogo[dados.categoria -1]

    console.log('--- Dados da compra ---')
    console.log('Nome do cliente:', dados.nome)
    console.log('Tipo do jogo:', legenda[dados.tipoJogo])
    console.log('Etapa do jogo:', legenda[dados.etapaJogo])
    console.log('Categoria:', dados.categoria)
    console.log('Quantidade de Ingressos:', dados.quantidadeIngressos)
    
    console.log('\n --- Valores ---')
    console.log('Valor do ingresso:', converterValores(dados.tipoJogo, valorUnitarioIngresso))
    console.log('Valor total:', converterValores(dados.tipoJogo, valorUnitarioIngresso*dados.quantidadeIngressos))
}

imprimir(dados, precosIngresso)