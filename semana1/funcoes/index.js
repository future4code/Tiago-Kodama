// // Interpretação de Código

// // 1
// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// // a) O que vai ser impresso no console?
//     //>>> 10
//     //>>> 50
// // b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?
//     // Iria retornar o valor, mas não iriamos ver o resultado

// // 2-
// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
//     return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// // a. Explique o que essa função faz e qual é sua utilidade
//     // Verifica se o trecho do texto possui a string "cenoura"

// // b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
// //      i.   `Eu gosto de cenoura`
//         // >>> true
// //      ii.  `CENOURA é bom pra vista`
//         // >>> true
// //      iii. `Cenouras crescem na terra`
//         // >>> true

/**
 * Escrita  código
 */
//1-
// a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como:
function sobreAutor() {

    const nomeAutor = Tiago
    const idadeAutor = 29

    const bibiografia = `Olá! Meu nome é ${nomeAutor} e eu tenho ${idadeAutor} anos.`

    console.log(bibiografia)
}

// b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: 
// o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:
function sobreAutorPersonalizavel(nome, idade, cidade, profissao) {

    const nomeAutor = Tiago
    const idadeAutor = 29

    const bibiografia = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`

    return bibiografia
}

// 2-
// a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
function somarDois(primeiroNumero, segundoNumero) {
    return primeiroNumero+segundoNumero
}
console.log('chamando a funcao soma', somarDois(1,2))


// b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
function maior(primeiroNumero, segundoNumero) {
    return primeiroNumero>=segundoNumero
}

// c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não
function ehPar(numeroVerificar) {
    
    return numeroVerificar>1 && numeroVerificar%2===0
}

// d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
function tamanhoMensagem(mensagem) {
    console.log('Tamanho:', mensagem.length)
    console.log('Mensagem:', mensagem.toUpperCase())
}

// 3-
// Crie uma função para cada uma das operações básicas 
// (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. 
// Por fim, mostre no console o resultado das operações:

const soma = (x,y) => x+y
const subtracao = (x,y) => x-y
const multiplicacao = (x,y) => x*y
const divisao = (x,y) => x/y

// const entrada = prompt('Digite dois números')
// let [a,b] = entrada.split(" ")

// a = Number(a)
// b = Number(b)

// console.log('Números inseridos:', a, b)
// console.log('Soma', soma(a,b))
// console.log('Subtração', subtracao(a,b))
// console.log('Multiplicação', multiplicacao(a,b))
// console.log('Divisão', divisao(a,b))

/**
 * DESAFIOS
 */
//  a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro
const imprimir = (mensagem) => console.log(mensagem)

//  b) Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.** 
// Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo
const imprimirSoma = (primeiroNumero, segundoNumero) => {
    imprimir(primeiroNumero+segundoNumero)
}

// Faça uma função que execute o teorema de Pitágoras, 
// recebendo dois catetos e calculando o valor da hipotenusa. 
// Retorne este valor, invoque a função e imprima o resultado no console. 

const hipotenusa = (cateto1, cateto2) => {
    return Math.sqrt(cateto1*cateto1 + cateto2*cateto2)
}

console.log( hipotenusa(3,4) )