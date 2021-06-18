// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt('Altura:'))
  const largura = Number(prompt('Largura:'))

  console.log(altura*largura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Ano atual:'))
  const anoNascimento = Number(prompt('Ano nascimento:'))

  console.log(anoAtual-anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso/(altura*altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  const nome = prompt('Digite o seu nome:')
  const idade = prompt('Digite a sua idade:')
  const email = prompt('Digite o seu email:')
  const mensagem = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`

  console.log(mensagem)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt('Fale uma cor:')
  const cor2 = prompt('Fale uma cor:')
  const cor3 = prompt('Fale uma cor:')

  const cores = [cor1, cor2, cor3]

  console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo/valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length===string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length -1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const swap = array[0]
  array[0] = array[array.length-1]
  array[array.length-1] = swap

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const primeiro = string1.toLowerCase()
  const segundo = string2.toLowerCase()

  return primeiro===segundo
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Qual é o ano atual?'))
  const anoNascimento = Number(prompt('Qual é o ano de nascimento?'))
  const anoCarteira = Number(prompt('Qual é o ano da carteira?'))

  const idadePessoa = anoAtual - anoNascimento
  const idadeCarteira = anoAtual - anoCarteira


  const devoRenovar = idadePessoa<=20 && idadeCarteira>=5 ||
                      idadePessoa>20 && idadePessoa<50 && idadeCarteira>=10 ||
                      idadePessoa>50 && idadeCarteira>15

  console.log(devoRenovar)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {

  const multiplo400 = ano%400===0
  const multiplo4 = ano%4===0
  const multiplo100 = ano%100===0 

  return multiplo400 || multiplo4 && !multiplo100
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

  const maioridade = (prompt('Você tem mais de 18 anos?')).toLowerCase() === "sim"
  const ensinoMedio = (prompt('Você possui ensino médio completo?')).toLowerCase() === "sim"
  const disponibilidade = (prompt('Você possui disponibilidade exclusiva durante os horários do curso?')).toLowerCase() === "sim"

   console.log( maioridade && ensinoMedio && disponibilidade )
}