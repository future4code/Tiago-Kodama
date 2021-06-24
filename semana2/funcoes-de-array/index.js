/**
 * INTERPRETAÇÃO DE CÓDIGO
 */
// // 1-
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]

//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

// //   { nome: "Amanda Rangel", apelido: "Mandi" } 0 [{ nome: "Amanda Rangel", apelido: "Mandi" }, { nome: "Laís Petra", apelido: "Laura" },{ nome: "Letícia Chijo", apelido: "Chijo"}]
// //   { nome: "Laís Petra", apelido: "Laura" } 1 [{ nome: "Amanda Rangel", apelido: "Mandi" }, { nome: "Laís Petra", apelido: "Laura" },{ nome: "Letícia Chijo", apelido: "Chijo"}]
// //   { nome: "Letícia Chijo", apelido: "Chijo"} 2 [{ nome: "Amanda Rangel", apelido: "Mandi" }, { nome: "Laís Petra", apelido: "Laura" },{ nome: "Letícia Chijo", apelido: "Chijo"}]

// // 2-
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]

//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })

//   console.log(novoArrayB)

// // [
// //   Amanda Rangel,
// //   Laís Petra,
// //   Letícia Chijo
// // ]

// //  3-
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]

//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })

//   console.log(novoArrayC)

// // [ 
// //   {nome: "Amanda Rangel", apelido: "Mandi"},
// //   {nome: "Laís Petra", apelido: "Laura"}
// // ]

/**
 * ESCRITA DE CÓDIGO
 */
// 1-
const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

// A
const nomePets = pets.map(cachorro => {
    return cachorro.nome
})

// B
const salsichas = pets.filter(cachorro => {
    return cachorro.raca === 'Salsicha'
})

// C
const mensagemPoodle = pets
    .filter(cachorro => {
        return cachorro.raca === "Poodle"
    })
    .map(cachorro => {
        return `Você ganhou um cupom de desconto de 10% para tosar o/a ${cachorro.nome}!`
    })

// 2-
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// A
const nomeProdutos = produtos.map( produto => {
    return produto.nome
})

// B
const produtosComDesconto = produtos.map( produto => {
    return {
        nome: produto.nome,
        preco: (produto.preco * 0.95).toFixed(2),
    }
})

// C
const bebidas = produtos.filter( produto => {
    return produto.categoria === "Bebidas"
})

// D
const produtosYpe = produtos.filter( produto => {
    return produto.nome.includes("Ypê")
})

// E
const mensagemConsumidorYpe = produtosYpe.map( produto => {
    return `Compre ${produto.categoria} ${produto.nome} por R$${(produto.preco).toFixed(2)}`
})

/**
 * DESAFIOS
 */
 const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

const nomePokemonOrdenado = pokemons.map( pokemon => pokemon.nome).sort()

// const tiposPokemon = [...new Set(pokemons.map( pokemon => pokemon.tipo))]

const tiposPokemon = pokemons
                        .map( pokemon => pokemon.tipo)
                        .filter( (tipo, index, allTipos) => allTipos.indexOf(tipo)===index)

console.log(tiposPokemon)