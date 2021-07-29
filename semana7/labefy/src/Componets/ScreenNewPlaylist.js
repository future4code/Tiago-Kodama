import React from 'react'
import axios from 'axios'

export default class ScreenNewPlaylist extends React.Component{

    state = {
        inputNameNewPlaylist: ''
    }

    handleOnChangeInput = e => this.setState({inputNameNewPlaylist: e.target.value})

    handleSaveButton = async e => {
        try {
            const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
            const headers = { 
                Authorization: "tiago-kodama-lovelace" 
            }
            const body = { 
                "name": this.state.inputNameNewPlaylist  
            }

            const res = await axios.post(url, body, { headers })

            if(res.status===200)
                alert("Sucesso ao criar lista")

            this.setState({ inputNameNewPlaylist: '' })
        }
        catch (err) {
            alert(err.response.data)
        }
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