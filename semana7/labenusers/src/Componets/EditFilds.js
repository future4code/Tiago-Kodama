import React from 'react'
import Styled from 'styled-components'

const ContainerInput = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    width: 50%;
    padding: 1rem 0;
    background: #C4C4C4;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);


    input, button {
        width: 60%;
        height: 2rem;
        margin: 1rem 0;
        font-weight: 700;
        text-align: center;
        border: transparent;
    }
    input:focus
    {
        border: none;
        outline-offset: 0px;
        outline: none;
    }
    button {
        background: #FB9C17;
    }
`

export default class EditFilds extends React.Component{

    state = {
        inputName: '',
        inputEmail: ''
    }

    onChangeName = e => this.setState({inputName: e.target.value})

    onChangeEmail = e => this.setState({inputEmail: e.target.value})

    handleButtonSave = () => {
        this.props.saveChanges(this.state.inputName, this.state.inputEmail, this.props.id)
    }

    render(){
        return (
            <ContainerInput className='EditFilds'>
                <input 
                    placeholder='New name'
                    onChange={this.onChangeName}
                    value={this.state.inputName}
                    />
                <input  
                    placeholder='New email'
                    onChange={this.onChangeEmail}
                    value={this.state.inputEmail}
                    />
                <button
                    onClick={this.handleButtonSave}
                >Save</button>
            </ContainerInput>
        );
    }
}