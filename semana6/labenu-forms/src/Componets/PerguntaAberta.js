import React from 'react'
import Styles from 'styled-components'

const ContainerInput = Styles.div`
    display: flex;
    flex-direction: column;

    margin-top: 2rem;

    width: 70%
`
const Input = Styles.input`
    margin-top: .5rem;
    padding: .2rem;

    width: 100%;
`

class PerguntaAberta extends React.Component{
    render(){

        const {pergunta, idPergunta} = this.props

        return (
            <ContainerInput>
                <label for={idPergunta}>{pergunta}</label>
                <Input id={idPergunta} name={idPergunta} />
            </ContainerInput>
        );
    }
}

export default PerguntaAberta;