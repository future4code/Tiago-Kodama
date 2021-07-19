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
        'Etapa1',
        'Etapa2',
        'Etapa3',
        'EtapaFinal'
    ]
    
    state = {
        etapaAtual: 0 
    }

    proximaEtapa = event => {
        event.preventDefault()
        this.setState({etapaAtual: this.state.etapaAtual+1})
    }

    render(){
        let Etapa;

        switch (this.etapaFormulario[ this.state.etapaAtual ]) {
            case 'Etapa1':
                Etapa = <Etapa1 handleButton={this.proximaEtapa}/>
                break

            case 'Etapa2':
                Etapa = <Etapa2 handleButton={this.proximaEtapa}/>
                break

            case 'Etapa3':
                Etapa = <Etapa3 handleButton={this.proximaEtapa}/>
                break
        
            default:
                Etapa = <EtapaFinal handleButton={this.proximaEtapa}/>
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