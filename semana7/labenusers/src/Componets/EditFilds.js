import React from 'react'

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
            <div className='EditFilds'>
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
            </div>
        );
    }
}