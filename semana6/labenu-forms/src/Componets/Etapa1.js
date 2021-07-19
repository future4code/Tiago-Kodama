import React from 'react';
import PerguntaAberta from './PerguntaAberta';
import PerguntaOpcoes from './PerguntaOpcoes';

class Etapa1 extends React.Component {
    render() {

        return (
            <>
                <h2>ETAPA 1 - DADOS GERAIS</h2>

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

                <button onClick={this.props.handleButton}>Próxima etapa</button>
            </>
        );
    }
}

export default Etapa1;