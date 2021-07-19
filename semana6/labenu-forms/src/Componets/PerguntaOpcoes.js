import React from 'react'
import Styles from 'styled-components'

const ContainerInput = Styles.div`
display: flex;
flex-direction: column;

margin-top: 2rem;
`

class PerguntaOpcoes extends React.Component{
    render(){
        const pergunta = this.props.pergunta
        const idPergunta = this.props.idPergunta
        const opcoes = this.props.opcoes

        return (
            <ContainerInput>
                <label for={idPergunta}>{pergunta}</label>
                <input list="opcoesInput" name={idPergunta} id={idPergunta} onChange={this._onChange} />
                <datalist id="opcoesInput">
                    {
                        opcoes.map((opcao, index) => <option value={opcao} key={index} />)
                    }
                </datalist>
            </ContainerInput>
        );
    }
}

export default PerguntaOpcoes