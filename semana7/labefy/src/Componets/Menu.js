import React from 'react'
import Styled from 'styled-components'
import Axios from 'axios'

const Button = Styled.button`
    width: 90%;
    height: 1.5rem;
    margin: .5rem 0;
    border: 1px solid transparent;
    font-weight: 700;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`
const StyledPlaylistsMenu = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    height: 70%;
    margin-top: 2rem;
    padding-top: 1rem;
    background: #f2f2f2;
    overflow: auto;

    h3 {
        margin-bottom: 1rem; 
    }
`
const StyledButtonsMenu = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: .5rem 0;
    padding: .1rem;
    width: 90%;
    height: 2rem;
    border: none;    
    background: white;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

    button {
        width: 48%;
        background: white;
        padding-right: .5rem;
        font-weight: 700;
        border: none;
        border-radius: 5px;


        &:hover {
            box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;  
            background: black;
            color: white;
        }
    }
`

export default class Menu extends React.Component{

    selectScreenPlaylist = playlist => {
        this.props.changeScreen('screenplaylist')
        this.props.setPlaylist(playlist)
    }
    selectScreenNewPlaylist = () => {
        this.props.changeScreen('screennewplaylist')
    }
    selectScreenAllMusics = () => {
        this.props.changeScreen('screenallmusics')
    }
    handleRemoveButton = async playlist => {
        try {
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlist.id}` 
            const headers = { Authorization: "tiago-kodama-lovelace" }
            const resDel = await Axios.delete(url, {headers})

            if(resDel.status!==200) 
                throw new Error('Falha ao deletar')

            const urlGetPlaylists = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
            const resUpdateLists = await Axios.get(urlGetPlaylists, { headers })
            this.props.updatePlaylists(resUpdateLists.data.result.list)
            alert('Deletou a playlist')

        } catch (error) {
            alert(error)
        }
    }

    render(){
        return(
            <div className='Menu'>
                <h1>Labefy</h1>
                <Button
                    onClick={this.selectScreenNewPlaylist}
                >Criar playlist</Button>
                <Button
                    onClick={this.selectScreenAllMusics}
                >Ver músicas</Button>
                <StyledPlaylistsMenu>
                    <h3>Lista de playlists</h3>
                    {
                        this.props.playlists &&
                        this.props.playlists.map((playlist, index) => {
                            return (
                                <StyledButtonsMenu key={index}>
                                    <button
                                    onClick={() => this.selectScreenPlaylist(playlist)}
                                    >{playlist.name}</button>
                                    <button
                                    onClick={() => this.handleRemoveButton(playlist)}
                                    >del</button>
                                </StyledButtonsMenu>
                                );
                            })
                    }
                </StyledPlaylistsMenu>
            </div>
        );
    }
}