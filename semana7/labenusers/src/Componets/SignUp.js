import React from 'react'

export default class SignUp extends React.Component{

    state = {
        inputName: '',
        inputEmail: ''
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