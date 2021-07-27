import React from 'react'

export default class SignUp extends React.Component{
    
    state = {
        inputName: '',
        inputEmail: ''
    }
    
    signUp = async () => {
        const user = {name: this.state.inputName, email: this.state.inputEmail}
        await this.props.database.registerUser(user)
    }

    onChangeInputName = event => {
        this.setState({ inputName: event.target.value })
    }

    onChangeInputEmail = event => {
        this.setState({ inputEmail: event.target.value })
    }

    render(){
        return (
            <div className='SignUp'>
                <h2>Sign Up</h2>
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
                >Enviar</button>
            </div>
        );
    }
}