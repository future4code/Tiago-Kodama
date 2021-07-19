import React from 'react'
import Styled from 'styled-components'
import Etapa1 from './Etapa1';
import Etapa2 from './Etapa2';
import Etapa3 from './Etapa3';
import EtapaFinal from './EtapaFinal';


const StyledForm = Styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 10vh;
    width: 40vw;
`

class Form extends React.Component{

    etapaFormulario = [
        'Etapa-dadosGerais',
        'Etapa-formacao',
        'Etapa-final'
    ]
    
    state = {
        etapaAtual: 0,

        // Dados Gerais
        nome: '',
        idade: '',
        email: '',
        escolaridade: '',
        jaIniciouFaculdade: null,

        // Dados Formação
        curso: '',
        unidadeDeEnsino: '',
        razaoGraduacaoIncompleta: '',
        cursoComplementar: ''
    }

    proximaEtapa = event => {
        event.preventDefault()
        this.setState({etapaAtual: this.state.etapaAtual+1})
    }

    setDados = dadosDoInput => {
        this.setState( dadosDoInput )
    }

    render(){
        let Etapa;

        switch (this.etapaFormulario[ this.state.etapaAtual ]) {
            case 'Etapa-dadosGerais':
                Etapa = <Etapa1 
                    handleButton={this.proximaEtapa} 
                    setDados={this.setDados} 
                    />
                break

            case 'Etapa-formacao':

                console.log(this.state)

                if( this.state.jaIniciouFaculdade )
                    Etapa = <Etapa2 
                        handleButton={this.proximaEtapa} 
                        />
                else
                    Etapa = <Etapa3 
                        handleButton={this.proximaEtapa} 
                        />
                break
        
            default:
                Etapa = <EtapaFinal 
                    handleButton={this.proximaEtapa}
                    />
                break
        }

        return (
            <StyledForm>
                {
                    Etapa || <p>Erro ao baixar formulário</p>
                }
            </StyledForm>
        );

    }
}

export default Form;