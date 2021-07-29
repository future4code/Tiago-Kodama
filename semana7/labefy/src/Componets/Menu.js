import React from 'react'
import Styled from 'styled-components'

const StyledPlaylistsMenu = Styled.div`
    display: flex;
    flex-direction: column;
`

export default class Menu extends React.Component{

    selectScreenPlaylist = () => {
        this.props.changeScreen('screenplaylist')
    }
    selectScreenNewPlaylist = () => {
        this.props.changeScreen('screennewplaylist')
    }

    render(){
        return(
            <div className='Menu'>
                <button
                    onClick={this.selectScreenNewPlaylist}
                >Criar playlist</button>
                <div>
                    <p>Lista de playlists</p>
                    <StyledPlaylistsMenu>
                    {
                        this.props.playlists &&
                        this.props.playlists.map((playlist, index) => {
                            return (
                                <button
                                key={index}
                                onClick={this.selectScreenPlaylist}
                                >{playlist.name}</button>
                                );
                            })
                    }
                    </StyledPlaylistsMenu>
                </div>
            </div>
        );
    }
}