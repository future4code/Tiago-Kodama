import React from 'react';

class Etapa2 extends React.Component {
    render() {

        return (
            <>
                <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>

                <label for='curso'>1- Qual é o curso?</label>
                <input id='curso' name='curso' />

                <label for='unidadeDeEnsino'>2- Qual é a unidade de ensino?</label>
                <input id='unidadeDeEnsino' name='unidadeDeEnsino' />

                <button onClick={this.props.handleButton}>Próxima etapa</button>
            </>
        );
    }
}

export default Etapa2;