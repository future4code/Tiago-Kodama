// EXERCÍCIO 01
function inverteArray(array) {
  const swap = []

  for (let i = array.length - 1; i >= 0; i--) {
    swap.push(array[i])
  }

  return swap
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  const paresElevadoA2 = []

  array.forEach(elemento => {
    if (elemento % 2 == 0) {
      paresElevadoA2.push(elemento ** 2)
    }
  })

  return paresElevadoA2
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  const paresSelecionados = []

  array.forEach(elemento => {
    if (elemento % 2 == 0) {
      paresSelecionados.push(elemento)
    }
  })

  return paresSelecionados
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorElemento = -Infinity

  array.forEach(elemento => {
    if (elemento > maiorElemento) {
      maiorElemento = elemento
    }
  })

  return maiorElemento
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2
  const booleano4 = !booleano3

  const elemento1 = booleano1 && booleano2 && !booleano4
  const elemento2 = (booleano1 && booleano2) || !booleano3
  const elemento3 = (booleano2 || booleano3) && (booleano4 || booleano1)
  const elemento4 = !(booleano2 && booleano3) || !(booleano1 && booleano3)
  const elemento5 = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)

  return [elemento1, elemento2, elemento3, elemento4, elemento5]
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  const nPrimeirosPares = []

  for (let i = 0; i < n; i++) {
    nPrimeirosPares.push(i * 2)
  }

  return nPrimeirosPares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {

  const lados = [a, b, c]
  const ladosDiferentes = [...new Set(lados)]

  switch (ladosDiferentes.length) {
    case 3:
      return 'Escaleno'
      break;

    case 2:
      return 'Isósceles'
      break;

    default:
      return 'Equilátero'
      break;
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {

  const maiorNumero = num1 > num2 ? num1 : num2
  const menorNumero = num1 > num2 ? num2 : num1

  return {
    maiorNumero,
    maiorDivisivelPorMenor: maiorNumero % menorNumero === 0,
    diferenca: maiorNumero - menorNumero
  }

}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

  const listaOrdenada = ordenaArray(array)

  return [listaOrdenada[listaOrdenada.length - 2], listaOrdenada[1]]
}

// EXERCÍCIO 11
function ordenaArray(array) {

  const pegarMenorElemento = (array) => {
    let menorElemento = Infinity
    let indiceMenorElemento = null

    for (const [index, elemento] of array.entries()) {
      if (elemento < menorElemento) {
        menorElemento = elemento
        indiceMenorElemento = index
      }
    }
    return array.splice(indiceMenorElemento, 1)
  }

  const listaOrdenadaCrescente = []
  const listaDesordenada = [...array]

  for (let i = 0; i < array.length; i++) {
    const menorElemento = pegarMenorElemento(listaDesordenada)[0]
    listaOrdenadaCrescente.push(menorElemento)
  }

  return listaOrdenadaCrescente
}

// EXERCÍCIO 12
function filmeFavorito() {
  return {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }
}

// EXERCÍCIO 13
function imprimeChamada() {

  const { nome, ano, diretor, atores } = filmeFavorito()

  return `Venha assistir ao filme ${nome}, de ${ano}, dirigido por ${diretor} e estrelado por ${atores.join(", ")}.`
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
  const largura = lado1
  const altura = lado2
  const perimetro = 2 * (lado1 + lado2)
  const area = lado1 * lado2

  return {
    largura,
    altura,
    perimetro,
    area
  }
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
  return { ...pessoa, nome: "ANÔNIMO" }
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
  const listadeMaiores = []

  arrayDePessoas.forEach( pessoa => {
    if(pessoa.idade >=18)
      listadeMaiores.push(pessoa)
  })

  return listadeMaiores
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  const listadeMenores = []

  arrayDePessoas.forEach( pessoa => {
    if(pessoa.idade <18)
      listadeMenores.push(pessoa)
  })

  return listadeMenores
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  return array.map( elemento => 2*elemento)
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  return array.map( elemento => (2*elemento).toString() )
}

// EXERCÍCIO 17C
function verificaParidade(array) {
  return array.map( elemento => {
    if( elemento%2 === 0 ) return `${elemento} é par`
    else return `${elemento} é ímpar`
  })
}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  return pessoas.filter( pessoa => {

    const { idade, altura } = pessoa

    if( idade<60 && idade>14 && altura>=1.5 )
      return true

    return false
  })
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  return pessoas.filter( pessoa => {

    const { idade, altura } = pessoa

    if( idade<60 && idade>14 && altura>=1.5 )
      return false

    return true
  })
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

  const trocar = (array, index1, index2) => {
    let swap = array[index1]
    array[index1] = array[index2]
    array[index2] = swap
  }

  const algoritimoDaBolha = (array) => {

    const listaOrdenada = [...array]
    let maxRodadas = listaOrdenada.length-1

    for( let rodada =0; rodada<maxRodadas; rodada++){
      for( let i=0; i<listaOrdenada.length-2; i++ ){
        
        if( listaOrdenada[i].nome > listaOrdenada[i+1].nome ) 
          trocar(listaOrdenada, i,i+1)
      }
    }
    return listaOrdenada
  }

  return algoritimoDaBolha(consultasNome)
}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

  const trocar = (array, index1, index2) => {
    let swap = array[index1]
    array[index1] = array[index2]
    array[index2] = swap
  }

  const algoritimoDaBolha = (array) => {

    const listaOrdenada = [...array]
    let maxRodadas = listaOrdenada.length-1

    for( let rodada =0; rodada<maxRodadas; rodada++){
      for( let i=0; i<listaOrdenada.length-2; i++ ){
        
        const dataArray1 = listaOrdenada[i].dataDaConsulta.split("/")
        const dataArray2 = listaOrdenada[i+1].dataDaConsulta.split("/")

        const data1 = new Date(`${dataArray1[1]}/${dataArray1[0]}/${dataArray1[2]}`)
        const data2 = new Date(`${dataArray2[1]}/${dataArray2[0]}/${dataArray2[2]}`)


        if( data1 > data2 ) 
          trocar(listaOrdenada, i,i+1)
      }
    }
    return listaOrdenada
  }

  return algoritimoDaBolha(consultasData)

}

// EXERCÍCIO 20
function calculaSaldo(contas) {
  
  contas.forEach( conta => {
    const divida = conta.compras.reduce( (total, num) => total+num, 0 )
    conta.saldoTotal -= divida
  })
  return contas
}
