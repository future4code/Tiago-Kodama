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
        switch (this.etapaFormulario[ this.state.etapaAtual ]) {
            case 'Etapa1':
                return (
                    <StyledForm>
                        <Etapa1 handleButton={this.proximaEtapa}/>
                    </StyledForm>
                )

            case 'Etapa2':
                return (
                    <StyledForm>
                        <Etapa2 handleButton={this.proximaEtapa}/>
                    </StyledForm>
                )

            case 'Etapa3':
                return (
                    <StyledForm>
                        <Etapa3 handleButton={this.proximaEtapa}/>
                    </StyledForm>
                )
        
            default:
                return (
                    <StyledForm>
                        <EtapaFinal/>
                    </StyledForm>
                );
        }


    }
}

export default Form;