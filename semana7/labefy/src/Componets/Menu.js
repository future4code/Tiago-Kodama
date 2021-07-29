import React from 'react'

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
                    <button
                        onClick={this.selectScreenPlaylist}
                    >Ver essa playlist</button>
                </div>
            </div>
        );
    }
}