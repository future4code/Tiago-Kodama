import React from 'react';
import Styled from 'styled-components'
import PerguntaAberta from './PerguntaAberta';
import PerguntaOpcoes from './PerguntaOpcoes';
import Button from './Button';

const Etapa = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 40vw;
`

class Etapa1 extends React.Component {
    render() {

        return (
            <Etapa>
                <h2>ETAPA 1</h2>
                <p>DADOS GERAIS</p>

                <PerguntaAberta 
                    pergunta='1- Qual é o seu nome?' 
                    idPergunta='nome'
                    />
                <PerguntaAberta 
                    pergunta='2- Qual é a sua idade?'
                    idPergunta='idade'
                    />
                <PerguntaAberta 
                    pergunta='3- Qual é o seu email?'
                    idPergunta='email'
                    />

                <PerguntaOpcoes 
                    pergunta='4- Qual a sua escolaridade?'
                    idPergunta='escolaridade'
                    opcoes={
                        [
                            'Ensino Médio Incompleto',
                            'Ensino Médio Completo',
                            'Ensino Superior Incompleto',
                            'Ensino Superior Completo',
                        ]
                    }
                />

                <Button handleClick={this.props.handleButton} />
            </Etapa>
        );
    }
}

export default Etapa1;