/**
 * INTERPRETAÇÃO DE CÓDIGO
 */
//  const filme = {
//      nome: "Auto da Compadecida", 
//      ano: 2000, 
//      elenco: [
//          "Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
//          "Virginia Cavendish"
//          ], 
//      transmissoesHoje: [
//          {canal: "Telecine", horario: "21h"}, 
//          {canal: "Canal Brasil", horario: "19h"}, 
//          {canal: "Globo", horario: "14h"}
//          ]
//  }

//  console.log(filme.elenco[0])
//  console.log(filme.elenco[filme.elenco.length - 1])
//  console.log(filme.transmissoesHoje[2])

//  //>>> Matheus Nachtergaele
//  //>>> Virginia Cavendish
//  //>>> { canal: Globo, horario: 14h }

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// // >>> { nome: "Juca", idade: 3, raca: "SRD" }
// // >>> { nome: "Juba", idade: 3, raca: "SRD" }
// // >>> { nome: "Jubo", idade: 3, raca: "SRD" }

// b) Copia o objeto

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// // >>> false
// // >>> undefined
// // b) chamou uma propriedade inexistente

/**
 * ESCRITA DE CÓDIGO
 */
// // 1-
// const pessoa = {
//     nome: "Amanda",
//     apelidos: ["Amandinha", "Mandinha", "Mandi"]
// }

// function imprimirPessoa(pessoa) {
//     const nome = pessoa.nome
//     const apelido1 = pessoa.apelidos[0]
//     const apelido2 = pessoa.apelidos[1]
//     const apelido3 = pessoa.apelidos[2]

//     console.log(`Eu sou ${nome}, mas pode me chamar de: ${apelido1}, 
//                 ${apelido2} ou ${apelido3}`)
// }

// imprimirPessoa(pessoa)

// const outraPessoa = { ...pessoa, apelidos: ["Amandex", "Opa", "Campeão"] }
// imprimirPessoa(outraPessoa)


// // 2-

// const dados1 = {
//     nome: "nome1",
//     idade: "idade1",
//     profissao: "profissao1"
// }

// const dados2 = {
//     nome: "nome2",
//     idade: "idade2",
//     profissao: "profissao2"
// }

// function paraArray({nome, idade, profissao}) {
//     return [nome, idade, profissao]
// }

// console.log(paraArray(dados1))
// console.log(paraArray(dados2))

// 3-
const carrinho = []
const fruta1 = { nome: "Maçã", disponibilidade: true}
const fruta2 = { nome: "Pera", disponibilidade: true}
const fruta3 = { nome: "Tomate", disponibilidade: true}

function comprarFruta( fruta1, fruta2, fruta3 ){
    carrinho.push(fruta1, fruta2, fruta3)
    console.log(carrinho)
}
comprarFruta( fruta1, fruta2, fruta3 )

/**
 * DESAFIOS
 */
// // 1-
// (function pedirDados(){
//     const nome = prompt('Nome:')
//     const idade = prompt('idade:')
//     const profissao = prompt('profissão:')

//     const dados = {
//         nome,
//         idade,
//         profissao
//     }

//     console.log(`O objeto é do tipo ${typeof dados}`)
//     console.log(dados)

// })()

// // 2-
// function avaliandoFilmes({ano: anoFilme1, ano: anoFilme2}){
//     console.log('O primeiro filme foi lançado antes do segundo?', anoFilme1 < anoFilme2)
//     console.log('O primeiro filme foi lançado no mesmo ano do segundo?', anoFilme1 === anoFilme2)
// }

// const filme1 = { ano: 2012, nome: "Velozes"}
// const filme2 = { ano: 2012, nome: "Panda"}

// avaliandoFilmes(filme1, filme2)

function inverterDisponibilidade( fruta ){
    fruta.disponibilidade = !fruta.disponibilidade
    return fruta
}

inverterDisponibilidade(fruta3)
console.log(fruta3)
