import React from 'react'
import Styled from 'styled-components'

const StyledButton = Styled.button`
    margin-top: 3rem;
    padding: .5rem;
    width: 50%;

    background: #6495ED;
    color: white;
    border: 1px solid transparent;
    border-radius: 5px;

    font-weight: 700;
`

class Button extends React.Component{
    render (){

        const value = this.props.value || 'Próxima etapa' 

        return (
            <StyledButton onClick={this.props.handleClick}>{value}</StyledButton>

        );
    }
}

export default Button;