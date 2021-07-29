import React from 'react'
import Styled from 'styled-components'
import Axios from 'axios'

const StyledPlaylistsMenu = Styled.div`
    display: flex;
    flex-direction: column;
`
const StyledButtonsMenu = Styled.div`
    display: flex;
    flex-direction: row;
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
                <button
                    onClick={this.selectScreenNewPlaylist}
                >Criar playlist</button>
                                <button
                    onClick={this.selectScreenAllMusics}
                >Ver músicas</button>
                <div>
                    <p>Lista de playlists</p>
                    <StyledPlaylistsMenu>
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
                                    >-</button>
                                </StyledButtonsMenu>
                                );
                            })
                    }
                    </StyledPlaylistsMenu>
                </div>
            </div>
        );
    }
}