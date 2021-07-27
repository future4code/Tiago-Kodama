import React from 'react'

export default class SignUp extends React.Component{
    
    state = {
        inputName: '',
        inputEmail: ''
    }
    
    signUp = async () => {
        const user = {name: this.state.inputName, email: this.state.inputEmail}
        await this.database.registerUser(user)
    }



    render(){
        return (
            <div className='SignUp'>
                <h2>Sign Up</h2>
                <input placeholder={'Name'}/>
                <input placeholder={'E-mail'}/>
                <button>Enviar</button>
            </div>
        );
    }
}