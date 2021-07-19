import React from 'react';

class Etapa3 extends React.Component {
    render() {

        const listaCursos = [
            'Curso técnico',
            'Cursos de inglês',
            'Não fiz curso complementar',
        ]

        return (
            <>
                <h2>ETAPA 3: Informações sobre quem não se formou no ensino superior nem está cursando</h2>

                <label for='razaoGraduacaoIncompleta'>1- Por que você não terminou um curso de graduação?</label>
                <input id='razaoGraduacaoIncompleta' name='razaoGraduacaoIncompleta' />

                <label for='cursoComplementar'>2- Você fez algum curso complementar??</label>
                <input list="listaCursos" name="cursoComplementar" id="cursoComplementar" onChange={this._onChange} />
                <datalist id="listaCursos">
                    {
                        listaCursos.map(opcao => <option value={opcao} />)
                    }
                </datalist>

                <button onClick={this.props.handleButton}>Próxima etapa</button>
            </>
        );
    }
}

export default Etapa3;