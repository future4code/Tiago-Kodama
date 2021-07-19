import React from 'react';
import PerguntaAberta from './PerguntaAberta';

class Etapa1 extends React.Component {
    render() {

        const escolaridadeOpcoes = [
            'Ensino Médio Incompleto',
            'Ensino Médio Completo',
            'Ensino Superior Incompleto',
            'Ensino Superior Completo',
        ]

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

                <label for='escolaridade'>4- Qual a sua escolaridade?</label>
                <input list="escolaridadeOpcoes" name="escolaridade" id="escolaridade" onChange={this._onChange} />
                <datalist id="escolaridadeOpcoes">
                    {
                        escolaridadeOpcoes.map(opcao => <option value={opcao} />)
                    }
                </datalist>

                <button onClick={this.props.handleButton}>Próxima etapa</button>
            </>
        );
    }
}

export default Etapa1;