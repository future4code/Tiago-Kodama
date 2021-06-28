function main ( jogo ){

   while( jogo.intencaoJogar() ){
      jogo.iniciar()
      console.log("Fim de rodada \n \n")
   } 
   console.log("Fim")
}

const nossoJogo = {
   usuario: {},
   computador: {},
   ganhadorRodada: [],

   criarJogador(){
      return {
         cartas: [],
         pontuacao: 0,
         addCarta (){
            const carta = comprarCarta()
            this.cartas.push(carta.texto)
            this.pontuacao += carta.valor
         },
         getCartas (){
            return this.cartas.join(" ")
         },
         jogarForaCartas (){
            this.cartas = []
            this.pontuacao = 0
         }
      }
   },

   intencaoJogar() {
      const numeroRodadas = this.ganhadorRodada.length
      let mensagem = ""

      if( !numeroRodadas )
         console.log('Bem vindo ao jogo de Blackjack! \n \n')
   
      mensagem += numeroRodadas? "Quer jogar de novo?" : "Que tal uma jogada?"

      return confirm(mensagem)
   },

   iniciar() {
      this.usuario = this.criarJogador()
      this.computador = this.criarJogador()

      // Computador começa com uma carta
      this.computador.addCarta()

      let usuarioJoga = this.rodadaUsuario()
      while(usuarioJoga){
         usuarioJoga = this.rodadaUsuario()
      }

      let computadorJoga = this.rodadaComputador()
      while(computadorJoga){
         computadorJoga = this.rodadaComputador()
      }
      this.contarPontos()
      this.fimJogo()
   },

   rodadaUsuario(){
      this.usuario.addCarta()
      this.usuario.addCarta()

      return false
   },

   rodadaComputador() {
      this.computador.addCarta()

      return false
   },

   contarPontos(){
      const pontosComputador = this.computador.pontuacao
      const pontosUsuario = this.usuario.pontuacao

      if( pontosUsuario>21 && pontosComputador>21 ){
         this.ganhadorRodada.push("Empate")
      }
      else if( pontosComputador>21 && pontosUsuario<=21 ){
         this.ganhadorRodada.push("Usuário")

      }
      else if( pontosComputador<=21 && pontosUsuario>21 ){
         this.ganhadorRodada.push("Computador")

      }
      else{
         if( pontosUsuario>pontosComputador )
            this.ganhadorRodada.push("Usuário")
         else if( pontosUsuario<pontosComputador )
            this.ganhadorRodada.push("Computador")
         else
            this.ganhadorRodada.push("Empate")
      }
   },

   fimJogo() {
      const usuario = this.usuario
      const computador = this.computador
      const ganhadorRodada = this.ganhadorRodada

      console.log(`Usuário - cartas ${usuario.getCartas()} - pontuação ${usuario.pontuacao}`)
      console.log(`Computador - cartas ${computador.getCartas()} - pontuação ${computador.pontuacao}`)

      switch( ganhadorRodada[ganhadorRodada.length-1] ){
         case "Empate":
            console.log("Empate!")
            break
         case "Computador":
            console.log("O computador ganhou!")
            break
         case "Usuário":
            console.log("O usuário ganhou!")
            break
      }
   }
}

/**
 * START
 */
// main(nossoJogo)

