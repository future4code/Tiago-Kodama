function Validador (ObjetoParametros, ObjetoValidar){
    
    const keys = Object.keys(ObjetoParametros)

    return keys.some( key => ObjetoValidar[key]==='' || ObjetoValidar===null )
}

export default Validador