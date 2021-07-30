import React from 'react'
import axios from 'axios'
import Styled from 'styled-components'

const Header = Styled.header`
    display: flex;
    padding: 1rem;
    width: 100%;
    height: 10rem;
    background: #9D9D9D;

    h1 {
        color: white;
        margin-left: 1rem;
        font-size: 3rem;
    }
`

const Main = Styled.main`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 3rem 0;

    button,
    input {
        width: 20rem;
        height: 2rem;
        text-align: center;
        margin: 1rem 0;
    }

    button {
        background: black;
        color: white;
        font-weight: 700;
    }
`

export default class ScreenNewPlaylist extends React.Component{

    state = {
        inputNameNewPlaylist: ''
    }

    handleOnChangeInput = e => this.setState({inputNameNewPlaylist: e.target.value})

    handleSaveButton = async e => {
        try {
            const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
            const headers = { Authorization: "tiago-kodama-lovelace" }
            const body = { "name": this.state.inputNameNewPlaylist }

            const resSend = await axios.post(url, body, { headers })

            if(resSend.status===200){
                const resReq = await axios.get(url, { headers })
                this.props.addPlaylist(resReq.data.result.list)
            }

            this.setState({ inputNameNewPlaylist: '' })
        }
        catch (err) {
            alert(err)
        }
    }

    render(){
        return(
            <div className='ScreenNewPlaylist'>
                <Header>
                    <h1>Criando novas playlists</h1>
                </Header>
                <Main>
                    <input 
                        value={this.state.inputNameNewPlaylist}
                        onChange={this.handleOnChangeInput}
                        placeholder='Nome da nova playlist'
                    />
                    <button
                        onClick={this.handleSaveButton}
                    >Salvar</button>
                </Main>
            </div>
        );
    }
}