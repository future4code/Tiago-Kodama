
const desafio = {
   ...nossoJogo,

   intencaoJogar() {
      const numeroRodadas = this.ganhadorRodada.length
      let mensagem = ""

      if( !numeroRodadas )
         mensagem += 'Bem vindo ao jogo de Blackjack! \n \n'
   
      mensagem += numeroRodadas? "Quer jogar de novo?" : "Que tal uma jogada?"

      return confirm(mensagem)
   },

   rodadaUsuario(){
      this.usuario.addCarta()

      if( this.usuario.pontuacao > 21 )
         return false

      const mensagem = `Suas cartas são: ${this.usuario.getCartas()}. 
      A carta revelada do computador é: ${this.computador.getCartas()}. \n 
      Deseja comprar mais uma carta?`

      const maisCartas = confirm( mensagem )

      if( maisCartas )
         return true

      if( this.usuario.pontuacao === 22 ){
         console.log('Tirou duplo A. Vou dar outras cartas')
         this.usuario.jogarForaCartas()
         return true
      }
      
      return false
   },
     
   rodadaComputador() {

      const pontosComputador = this.computador.pontuacao
      const pontosUsuario = this.usuario.pontuacao

      if( pontosUsuario > 21 )
         return false

      else if( pontosComputador < pontosUsuario ){
         this.computador.addCarta()
         return true
      }

      return false
   },

   fimJogo() {
      const usuario = this.usuario
      const computador = this.computador
      const ganhadorRodada = this.ganhadorRodada

      let mensagem = ""

      mensagem += `Usuário - cartas ${usuario.getCartas()} - pontuação ${usuario.pontuacao} \n`
      mensagem += `Computador - cartas ${computador.getCartas()} - pontuação ${computador.pontuacao} \n`

      switch( ganhadorRodada[ganhadorRodada.length-1] ){
         case "Empate":
            mensagem += "Empate!"
            break
         case "Computador":
            mensagem += "O computador ganhou!"
            break
         case "Usuário":
            mensagem += "O usuário ganhou!"
            break
      }

      alert(mensagem)
   }
}

/**
 * START
//  */
main(desafio)