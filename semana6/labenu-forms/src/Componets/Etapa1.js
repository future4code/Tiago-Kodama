import React from 'react';

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

                <label for='nome'>Qual é o seu nome?</label>
                <input id='nome' name='nome' />

                <label for='idade'>Qual é a sua idade?</label>
                <input id='idade' name='idade' />

                <label for='email'>Qual é o seu email?</label>
                <input id='email' name='email' />

                <label for='escolaridade'>Qual a sua escolaridade?</label>
                <input list="escolaridadeOpcoes" name="escolaridade" id="escolaridade" onChange={this._onChange} />
                <datalist id="escolaridadeOpcoes">
                    {
                        escolaridadeOpcoes.map(opcao => <option value={opcao} />)
                    }
                </datalist>

                <button>Próxima etapa</button>
            </>
        );
    }
}

export default Etapa1;