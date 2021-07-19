import React from 'react';
import PerguntaAberta from './PerguntaAberta';
import PerguntaOpcoes from './PerguntaOpcoes';
import Button from './Button';

class Etapa3 extends React.Component {
    render() {

        return (
            <>
                <h2>ETAPA 3: Informações sobre quem não se formou no ensino superior nem está cursando</h2>

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
            </>
        );
    }
}

export default Etapa3;