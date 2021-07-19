import React from 'react'

class PerguntaAberta extends React.Component{
    render(){

        const {pergunta, idPergunta} = this.props

        return (
            <>
                <label for={idPergunta}>{pergunta}</label>
                <input id={idPergunta} name={idPergunta} />
            </>
        );
    }
}

export default PerguntaAberta;