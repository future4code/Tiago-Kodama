// Interpretação

// // 1-

// let array
// console.log('a. ', array)
// // >>> a. undefined

// array = null
// console.log('b. ', array)
// // >>> b. null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)
// // >>> c. 11

// let i = 0
// console.log('d. ', array[i])
// // >>> d. 3

// array[i+1] = 19
// console.log('e. ', array)
// // >>> e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// const valor = array[i+6]
// console.log('f. ', valor)
// // >>> f. 9

// // 2-

// const frase = prompt("Digite uma frase")
// //"Subi num ônibus em Marrocos"

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// // >>> SUBI NUM ÔNIBUS EM MIRROCOS 27

// Escrita de código

// // 1- O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!

// const nomeDoUsuario = prompt('Nome:')
// const emailDoUsuario = prompt('E-mail')

// console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

// // 2- Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

//     const comidasFavoritas = ['pizza', 'macarrao', 'strogonoff', 'batata assada', 'cupim']

// // a) Imprima na tela o array completo
//     console.log(comidasFavoritas)
// // b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
//     console.log('Essas são as minhas comidas preferidas:', comidasFavoritas)
// // c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista
//     const novoPrato = prompt('Alguma sujestão de prato?')
    
//     comidasFavoritas[1] = novoPrato

//     console.log('Nova lista', comidasFavoritas)

// // 3- Faça um programa, seguindo os passos:

//     // a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
//         const listaDeTarefas = []
//     // b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
//         const tarefa1 = prompt('Digite uma tarefa:')
//         const tarefa2 = prompt('Digite uma tarefa:')
//         const tarefa3 = prompt('Digite uma tarefa:')

//         listaDeTarefas.push(tarefa1)
//         listaDeTarefas.push(tarefa2)
//         listaDeTarefas.push(tarefa3)

//     // c) Imprima o array na tela
//         console.log('Tarefas do dia:', listaDeTarefas)

//     // d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
//         const indiceTarefaRealizada = Number(prompt('Digite uma tarefa [1-3]')) -1

//     // e) Remova da lista o item de índice que o usuário escolheu.
//         listaDeTarefas.splice(indiceTarefaRealizada, 1)
//     // f) Imprima o array na tela
//         console.log('Resta:', listaDeTarefas)

// // Desafio 1
// const frase = prompt('Digite uma frase:')
// const arrayFrase = frase.split(' ')
// console.log(arrayFrase)

// Desafio 2
const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
const indiceAbacaxi = frutas.indexOf('Abacaxi')

console.log('O índice do Abacaxi na lista de frutas é:', indiceAbacaxi)
console.log('A quantidade de frutas na lista é:', frutas.length)