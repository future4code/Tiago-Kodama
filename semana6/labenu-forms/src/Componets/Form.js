import React from 'react'
import Styled from 'styled-components'

import Etapa1 from './Etapa1';

const StyledForm = Styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 10vh;
    width: 40vw;
`

class Form extends React.Component{
    

    render(){
        return (
            <StyledForm>
                <Etapa1 />
            </StyledForm>
        )
    }
}

export default Form;