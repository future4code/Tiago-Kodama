import React from 'react'
import Styled from 'styled-components'
import validador from '../Tools/Validador'
import Etapa1 from './Etapa1';
import Etapa2 from './Etapa2';
import Etapa3 from './Etapa3';
import EtapaFinal from './EtapaFinal';

const dadosGerais = {
    nome: '',
    idade: '',
    email: '',
    escolaridade: '',
    jaIniciouFaculdade: null,
}
const dadosFormacaoJaFezFaculdade = {
    curso: '',
    unidadeDeEnsino: '',
}
const dadosFormacaoNuncaFezFaculdade = {
    razaoGraduacaoIncompleta: '',
    cursoComplementar: ''
}
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
        ...dadosGerais,
        ...dadosFormacaoJaFezFaculdade,
        ...dadosFormacaoNuncaFezFaculdade
    }

    proximaEtapa = event => {
        event.preventDefault()

        if( this.state.etapaAtual===0 
            && validador(dadosGerais, this.state) )
            alert('Campo faltando')

        else if( this.state.etapaAtual===1 
            && this.state.jaIniciouFaculdade 
            && validador(dadosFormacaoJaFezFaculdade, this.state) )
            alert('Campo faltando')

        else if( this.state.etapaAtual===1 
            && !this.state.jaIniciouFaculdade 
            && validador(dadosFormacaoNuncaFezFaculdade, this.state) )
            alert('Campo faltando')

        else
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
                if( this.state.jaIniciouFaculdade )
                    Etapa = <Etapa2 
                        handleButton={this.proximaEtapa} 
                        setDados={this.setDados} 
                        />
                else
                    Etapa = <Etapa3 
                        handleButton={this.proximaEtapa} 
                        setDados={this.setDados} 
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