import React from 'react';
import PerguntaAberta from './PerguntaAberta';
import Button from './Button';
import Styled from 'styled-components'

const Etapa = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40vw;
`
class Etapa2 extends React.Component {

    handleInputCurso = event => {
        this.props.setDados({curso: event.target.value})
    }
    handleInputUnidadeDeEnsino = event => {
        this.props.setDados({unidadeDeEnsino: event.target.value})
    }

    render() {

        return (
            <Etapa>
                <h2>ETAPA 2</h2>
                <p>INFORMAÇÕES DO ENSINO SUPERIOR</p>

                <PerguntaAberta 
                    pergunta='1- Qual é o curso?'
                    idPergunta='curso'
                    onChange={this.handleInputCurso}
                />
                <PerguntaAberta 
                    pergunta='2- Qual é a unidade de ensino?'
                    idPergunta='unidadeDeEnsino'
                    onChange={this.handleInputUnidadeDeEnsino}
                />

                <Button handleClick={this.props.handleButton} />
            </Etapa>
        );
    }
}

export default Etapa2;