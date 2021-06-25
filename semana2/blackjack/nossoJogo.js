console.log('Bem vindo ao jogo de Backacj!')

let numeroRodadas = 0

while(numeroRodadas? confirm("Quer iniciar uma nova rodada?") : confirm("Vamos jogar?")){

   const carta1Usuario = comprarCarta()
   const carta2Usuario = comprarCarta()
   const carta1Computador = comprarCarta()
   const carta2Computador = comprarCarta()
   const pontuacaoUsuario = carta1Usuario.valor+carta2Usuario.valor
   const pontuacaoComputador = carta1Computador.valor+carta2Computador.valor
   numeroRodadas ++
   
   console.log(`Jogo ${numeroRodadas}`)
   console.log(`Usuário - cartas ${carta1Usuario.texto} ${carta2Usuario.texto} - pontuação ${pontuacaoUsuario}`)
   console.log(`Computador - cartas ${carta1Computador.texto} ${pontuacaoComputador} - pontuação ${pontuacaoComputador}`)

   if( pontuacaoComputador>21 && pontuacaoUsuario>21 || pontuacaoComputador === pontuacaoUsuario ) 
      console.log("Empate!")
   else if( pontuacaoComputador<=21 && pontuacaoUsuario>21 || pontuacaoComputador > pontuacaoUsuario ) 
      console.log("O computador ganhou")
   else 
      console.log("O usuário ganhou")

   console.log("O jogo acabou \n \n")
}