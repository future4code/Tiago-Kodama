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
    render() {

        return (
            <Etapa>
                <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>

                <PerguntaAberta 
                    pergunta='1- Qual é o curso?'
                    idPergunta='curso'
                />
                <PerguntaAberta 
                    pergunta='2- Qual é a unidade de ensino?'
                    idPergunta='unidadeDeEnsino'
                />

                <Button handleClick={this.props.handleButton} />
            </Etapa>
        );
    }
}

export default Etapa2;