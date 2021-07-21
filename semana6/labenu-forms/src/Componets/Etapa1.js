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

    handleInputEscolaridade = event => {

        const selectedOption = event.target.value
        this.props.setDados({escolaridade: event.target.value})


        if( selectedOption === 'Ensino Médio Incompleto' ||
            selectedOption === 'Ensino Médio Completo' ){

                this.props.setDados({jaIniciouFaculdade: false})
            }

        else if(selectedOption === 'Ensino Superior Incompleto' ||
            selectedOption === 'Ensino Superior Completo'){

                this.props.setDados({jaIniciouFaculdade: true})
            }

    }
    handleInputNome = event => {
        this.props.setDados({nome: event.target.value})
    }
    handleInputIdade = event => {
        this.props.setDados({idade: event.target.value})
    }
    handleInputEmail = event => {
        this.props.setDados({email: event.target.value})
    }


    render() {

        return (
            <Etapa>
                <h2>ETAPA 1</h2>
                <p>DADOS GERAIS</p>

                <PerguntaAberta 
                    pergunta='1- Qual é o seu nome?' 
                    idPergunta='nome'
                    onChange={this.handleInputNome}
                    />
                <PerguntaAberta 
                    pergunta='2- Qual é a sua idade?'
                    idPergunta='idade'
                    onChange={this.handleInputIdade}
                    />
                <PerguntaAberta 
                    pergunta='3- Qual é o seu email?'
                    idPergunta='email'
                    onChange={this.handleInputEmail}
                    />

                <PerguntaOpcoes 
                    selecionado={this.handleInputEscolaridade}
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