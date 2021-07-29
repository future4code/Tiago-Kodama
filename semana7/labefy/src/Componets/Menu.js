import React from 'react'

export default class Menu extends React.Component{
    render(){
        return(
            <div className='Menu'>
                <button>Criar playlist</button>
                <div>
                    <p>Lista de playlists</p>
                </div>
            </div>
        );
    }
}