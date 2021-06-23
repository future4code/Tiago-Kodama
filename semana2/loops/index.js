/**
 * INTERPRETAÇÃO DE CÓDIGO
 */
// // 1-
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)
// // >>> 10

// // 2-
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }
// // >>> 19
// // >>> 21
// // >>> 23
// // >>> 25
// // >>> 27
// // >>> 30
// // b) 
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]

// for (const [index, numero] of lista.entries()) {

//   if (numero > 18) {
// 		console.log(index, numero)
// 	}
// }

// // 3-
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
// // >>> *
// // >>> **
// // >>> ***
// // >>> ****

/***
 * ESCRITA DE CÓDIGO
 */
// // 1-
// const quantidadePets = Number(prompt("Quantos bichinhos você tem?"))

// if( quantidadePets<1 ) 
//     console.log("Que pena! Você pode adotar um pet")
// else {
//     const nomePets = []

//     for( let i=0; i<quantidadePets; i++){
//         const nomePet = prompt(`Digite o nome do PET ${i}:`)
//         nomePets.push(nomePet)
//     }

//     console.log(nomePets)
// }

// // 2-
// const arrayOriginal = [4,5,6,7,8]

// // a)
// const imprimirArray = (arrayNumeros) => {
//     for( const numero of arrayNumeros){
//         console.log(numero)
//     }
// }
// imprimirArray(arrayOriginal)

// // b)
// const imprimirArrayDividido10 = (arrayNumeros) => {
//     for( const numero of arrayNumeros){
//         console.log(numero/10)
//     }
// }
// imprimirArrayDividido10(arrayOriginal)

// // c)
// const selecionarPares = (arrayOriginal) => {
//     const pares = []
//     for( const numero of arrayOriginal ){
        
//         if( numero%2===0 )
//             pares.push(numero)
//     }

//     console.log(pares)
// }
// selecionarPares(arrayOriginal)

// // d)
// const criarArrayStrings = (arrayOriginal) => {
//     const transcrita = []

//     for( const [index, elemento] of arrayOriginal.entries() ){
//         transcrita.push(`O elemento do índex ${index} é: ${elemento}`)
//     }

//     console.log(transcrita)
// }
// criarArrayStrings(arrayOriginal)

// // e)
// const extremosArray = (arrayOriginal) => {
//     let min = Infinity
//     let max = -Infinity

//     for( const elemento of arrayOriginal ){
//         if(elemento>max) max=elemento
//         if(elemento<min) min=elemento
//     }

//     console.log(`O menor valor é: ${min}`)
//     console.log(`O maior valor é: ${max}`)
// }
// extremosArray(arrayOriginal)

/***
 * DESAFIOS
 */
// 1-
// const numeroEscolhido = Number(prompt('Jogador 1, \n escolha um número.'))
// let numeroChutado = null
// let quantidadeChutes = 0

// console.log('Vamos jogar!')

// while( numeroChutado!==numeroEscolhido ){
//     numeroChutado = Number(prompt('Jogador 2,\n Escolha um número.'))
//     quantidadeChutes ++

//     console.log(`O número chutado foi ${numeroChutado}`)

//     if( numeroChutado > numeroEscolhido )
//         console.log("Errooou. O número escolhido é maior")
//     else
//         console.log("Errooou. O número escolhido é menor")
// }


// console.log("Acertouuuuuu")
// console.log(`O número de tentativas foi ${quantidadeChutes}`)

// // 2-
// const numeroEscolhido = (parseInt(Math.random()*10))**(parseInt(Math.random()*10))

// let numeroChutado = null
// let quantidadeChutes = 0

// console.log('Vamos jogar!')

// while( numeroChutado!==numeroEscolhido ){
//     numeroChutado = Number(prompt('Jogador 2,\n Escolha um número.'))
//     quantidadeChutes ++

//     console.log(`O número chutado foi ${numeroChutado}`)

//     if( numeroChutado > numeroEscolhido )
//         console.log("Errooou. O número escolhido é maior")
//     else if( numeroChutado > numeroEscolhido )
//         console.log("Errooou. O número escolhido é menor")
// }


// console.log("Acertouuuuuu")
// console.log(`O número de tentativas foi ${quantidadeChutes}`)

// // Para facilitar poderia ter colocado em uma função que recebe algum número.
// // Seja ele passado como prompt ou random
