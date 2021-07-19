import React from 'react'
import Styled from 'styled-components'

const StyledButton = Styled.button`
    margin-top: 3rem;
`

class Button extends React.Component{
    render (){

        const value = this.props.value || 'Próxima etapa' 

        return (
            <StyledButton onClick={this.props.handleButton}>{value}</StyledButton>

        );
    }
}

export default Button;