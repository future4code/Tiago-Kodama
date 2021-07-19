import React from 'react'

class PerguntaOpcoes extends React.Component{
    render(){
        const pergunta = this.props.pergunta
        const idPergunta = this.props.idPergunta
        const opcoes = this.props.opcoes

        return (
            <>
                <label for={idPergunta}>{pergunta}</label>
                <input list="opcoesInput" name={idPergunta} id={idPergunta} onChange={this._onChange} />
                <datalist id="opcoesInput">
                    {
                        opcoes.map(opcao => <option value={opcao} />)
                    }
                </datalist>
            </>
        );
    }
}

export default PerguntaOpcoes