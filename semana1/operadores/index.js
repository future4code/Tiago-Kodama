
/*
    ATIVIDADE NÚMERO 1
*/
// 1- 
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2 // true

// let resultado = bool1 && bool2 // false
// console.log("a. ", resultado) // >>> a. false

// resultado = bool1 && bool2 && bool3 // false
// console.log("b. ", resultado) // >>> b. false

// resultado = !resultado && (bool1 || bool2) //true
// console.log("c. ", resultado) // >>> c. true

// console.log("d. ", typeof resultado) // >>> d. boolean

// 2-
// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero // Concatenação de string
// console.log(soma)

// 3-

// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

/*
    ATIVIDADE NÚMERO 2
*/
// 1-
// // a) Pergunte a idade do usuário
// const idadeProprio = Number(prompt("Qual é a sua idade?"))

// // b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
// const idadeAmigo = Number(prompt('Qual é a idade do seu melhor amigo?'))

// // c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
// const diferencaIdade = idadeProprio - idadeAmigo
// console.log("Sua idade é maior do que a do seu melhor amigo?", diferencaIdade > 0)

// // d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)
// console.log("A diferença de idade é", diferencaIdade)

// 2-
// // a) Peça ao usuário que insira um número **par**
// const numPar = Number(prompt('Insira um número par:'))

// // b) Imprima na console **o resto da divisão** desse número por 2.
// console.log('O resto da divisão por dois vale:', numPar % 2)

// // c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
// // O resto da divisão por dois de um número par é sempre zero

// // d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
// // O resto será 1

// 3-
// const idadeAnos = Number(prompt('Qual é a sua idade?'))

// // a) A idade do usuário em meses
// console.log('A sua idade em mêses é:', idadeAnos*12)

// // b) A idade do usuário em dias
// console.log('A sua idade em dias é:', idadeAnos*12*30)

// // c) A idade do usuário em horas
// console.log('A sua idade em horas é:', idadeAnos*12*30*24)

// 4-
const primeiroNumero = Number(prompt('Insira um número'))
const segundoNumero = Number(prompt('Insira outro número'))

// O primeiro numero é maior que segundo?
console.log('O primeiro numero é maior que segundo?', primeiroNumero > segundoNumero)

// O primeiro numero é igual ao segundo?
console.log('O primeiro numero é igual ao segundo?', primeiroNumero === segundoNumero)

// O primeiro numero é divisível pelo segundo?
console.log('O primeiro numero é divisível pelo segundo?', segundoNumero!==0 && primeiroNumero>=segundoNumero && primeiroNumero%segundoNumero===0)

// O segundo numero é divisível pelo primeiro?
console.log('O segundo numero é divisível pelo primeiro?', primeiroNumero!==0 && segundoNumero>=primeiroNumero && segundoNumero%primeiroNumero===0)

