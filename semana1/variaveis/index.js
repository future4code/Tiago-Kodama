/*
// 1- 

let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

>>> 10
>>> 10 5

*/

/**
 * 
// 2-

let a = 10
let b = 20
let c

c = a
b = c
a = b

console.log(a, b, c)

// >>> 10 10 10 
 */

/*
// 3-

let horasTrabalhoPorDia = prompt("Quantas horas você trabalha por dia?")
let salarioPorDia = prompt("Quanto você recebe por dia?")

alert(`Voce recebe ${salarioPorDia/horasTrabalhoPorDia} por hora`)

*/
/*
let nomeUndefined
let idadeUndefined
console.log("O tipo de variável do nome é", typeof nomeUndefined)
console.log("O tipo de variável da idade é", typeof idadeUndefined)
// Ambos valores são do tipo undefined, pois nenhum valor foi atribuído

let nomeString = prompt('Digite algum nome:')
let idadeString = prompt('Digite alguma idade:')
console.log("O tipo de variável do nome é", typeof nomeString)
console.log("O tipo de variável da idade é", typeof idadeString)
// Ambos são do tipo string, pois o prompt considera todos como string

console.log("Olá", nomeString, "você tem", idadeString,"anos")
*/

/*
// 2-

const perguntaUm = "Você tem mais de 40 anos?"
const perguntaDois = "Você tem menos de 20 anos?"
const perguntaTres = "Você tem mais de 20 anos?"

const respostaUm = prompt(perguntaUm)
const respostaDois = prompt(perguntaDois)
const respostaTres = prompt(perguntaTres)

const maiorQuarenta = respostaUm
const menorVinte = respostaDois
const maiorVinte = respostaTres

console.log(perguntaUm, '-', maiorQuarenta)
console.log(perguntaDois, '-', menorVinte)
console.log(perguntaTres, '-', maiorVinte)
*/

/*
// 3-

let a = 10
let b = 25

let swap = a
a = b
b =swap

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10
*/

// Desafio

const numUsuario1 = Number(prompt("Digite o número de usuário"))
const numUsuario2 = Number(prompt("Digite o número de usuário"))

console.log("O primeiro número somado ao segundo número resulta em:", numUsuario1+numUsuario2)
console.log("O primeiro número multiplicado pelo segundo número resulta em:", numUsuario1*numUsuario2)