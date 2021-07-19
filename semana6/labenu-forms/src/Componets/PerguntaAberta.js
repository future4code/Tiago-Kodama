import React from 'react'
import Styles from 'styled-components'

const ContainerInput = Styles.div`
    display: flex;
    flex-direction: column;
    
    margin-top: 2rem;
`

class PerguntaAberta extends React.Component{
    render(){

        const {pergunta, idPergunta} = this.props

        return (
            <ContainerInput>
                <label for={idPergunta}>{pergunta}</label>
                <input id={idPergunta} name={idPergunta} />
            </ContainerInput>
        );
    }
}

export default PerguntaAberta;