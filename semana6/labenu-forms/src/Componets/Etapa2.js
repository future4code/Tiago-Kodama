import React from 'react';
import PerguntaAberta from './PerguntaAberta';

class Etapa2 extends React.Component {
    render() {

        return (
            <>
                <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>

                <PerguntaAberta 
                    pergunta='1- Qual é o curso?'
                    idPergunta='curso'
                />
                <PerguntaAberta 
                    pergunta='2- Qual é a unidade de ensino?'
                    idPergunta='unidadeDeEnsino'
                />

                <button onClick={this.props.handleButton}>Próxima etapa</button>
            </>
        );
    }
}

export default Etapa2;