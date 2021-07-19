import React from 'react';
import PerguntaAberta from './PerguntaAberta';
import PerguntaOpcoes from './PerguntaOpcoes';
import Button from './Button';
import Styled from 'styled-components'

const Etapa = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 40vw;
`
class Etapa3 extends React.Component {
    render() {

        return (
            <Etapa>
                <h2>ETAPA 3</h2>
                <p>Informações sobre quem não se formou no ensino superior nem está cursando</p>

                <PerguntaAberta 
                    pergunta='1- Por que você não terminou um curso de graduação?'
                    idPergunta='razaoGraduacaoIncompleta'
                />

                <PerguntaOpcoes 
                    pergunta='2- Você fez algum curso complementar?'
                    idPergunta='cursoComplementar'
                    opcoes={
                        [
                            'Curso técnico',
                            'Cursos de inglês',
                            'Não fiz curso complementar',
                        ]
                    }
                />

                <Button handleClick={this.props.handleButton} />
            </Etapa>
        );
    }
}

export default Etapa3;