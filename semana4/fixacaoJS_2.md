```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {

  const arrayDeEscolhidos = arrayDeNumeros.filter(e => {
    return e === numeroEscolhido
  })
  
  if(arrayDeEscolhidos.length)
    return `O número ${numeroEscolhido} aparece ${arrayDeEscolhidos.length}x`
  else
    return 'Número não encontrado'
}

```
