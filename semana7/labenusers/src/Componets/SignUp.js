import React from 'react'
import Styled from 'styled-components'

const Container = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 80%;
`
const ContainerSignIn = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: #E3E3E3;
    width: 50%;
    padding: 2rem 0;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

    input,
    button {
        margin: 1rem 0;
        width: 50%;
        padding-left: 1rem;
        height: 2.5rem;
        border: transparent;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
    }
    input:focus
    {
        border: none;
        outline-offset: 0px;
        outline: none;
    }
    button {
        text-align: center;
        background: #FB9C17;
        color: white;
        font-weight: 700;
    }
`

export default class SignUp extends React.Component{
    
    state = {
        inputName: '',
        inputEmail: ''
    }
    
    signUp = async () => {
        const user = {name: this.state.inputName, email: this.state.inputEmail}
        await this.props.database.registerUser(user)
        this.setState({ inputName: '', inputEmail: '' })
    }

    onChangeInputName = event => {
        this.setState({ inputName: event.target.value })
    }

    onChangeInputEmail = event => {
        this.setState({ inputEmail: event.target.value })
    }

    render(){
        return (
            <Container className='SignUp'>
                <h2>Register user</h2>
                <ContainerSignIn>
                    <input 
                        onChange={this.onChangeInputName} 
                        value={this.state.inputName}
                        placeholder={'Name'}
                        />
                    <input 
                        onChange={this.onChangeInputEmail} 
                        value={this.state.inputEmail}
                        placeholder={'E-mail'}
                        />
                    <button
                        onClick={this.signUp}
                    >Send</button>
                </ContainerSignIn>
            </Container>
        );
    }
}