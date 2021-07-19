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

const Datalist = Styles.datalist`
    position: absolute;
    border-radius: 0 0 5px 5px;
    border-top: none;

`

class PerguntaOpcoes extends React.Component{
    render(){
        const pergunta = this.props.pergunta
        const idPergunta = this.props.idPergunta
        const opcoes = this.props.opcoes

        return (
            <ContainerInput>
                <label>{pergunta}</label>
                <Input list="opcoesInput" name={idPergunta} id={idPergunta} onChange={this._onChange} onSelect={this.props.selecionado}/>
                <Datalist id="opcoesInput">
                    {
                        opcoes.map((opcao, index) => <option value={opcao} key={index} />)
                    }
                </Datalist>
            </ContainerInput>
        );
    }
}

export default PerguntaOpcoes