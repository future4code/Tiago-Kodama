import React from 'react'
import Styled from 'styled-components'

const ContainerUser = Styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    width: 90%;
    height: 2.5rem;
    padding-left: 1vw;

    font-size: 700;

    background: #E3E3E3;
`

const Button = Styled.button`
    background: transparent;
    border: none;
    font-weight: 700;
    color: tomato;
    margin: 0 1vw;
`

export default class User extends React.Component{

    onClickShowDetails = async user => {
        await this.props.onClickShowDetails(user)
    }

    render(){
        const user = this.props.user

        return(
            <ContainerUser>
                <p>{user.name}</p>
                <div>
                    <Button onClick={() => this.props.handleDeleteUser(user.id)}>Remove</Button>
                    <Button onClick={() => this.onClickShowDetails(user)} >Details</Button>
                </div>
            </ContainerUser>
        )
    }
}