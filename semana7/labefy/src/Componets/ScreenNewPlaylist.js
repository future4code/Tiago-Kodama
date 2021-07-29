import React from 'react'

export default class ScreenNewPlaylist extends React.Component{

    state = {
        inputNameNewPlaylist: ''
    }

    handleOnChangeInput = e => this.setState({inputNameNewPlaylist: e.target.value})

    handleSaveButton = e => {
        alert(this.state.inputNameNewPlaylist)
    }

    render(){
        return(
            <div className='ScreenNewPlaylist'>
                <input 
                    value={this.state.inputNameNewPlaylist}
                    onChange={this.handleOnChangeInput}
                    placeholder='Nome da nova playlist'
                />
                <button
                    onClick={this.handleSaveButton}
                >Save</button>
            </div>
        );
    }
}