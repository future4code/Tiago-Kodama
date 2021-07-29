import React from 'react'
import CardMusics from './CardMusic'

export default class ScreenPlaylist extends React.Component{
    render(){
        return(
            <div className='ScreenPlaylist'>
                <header>
                    <h1>Playlist 1</h1>
                    <p>Imagem</p>
                </header>   
                <CardMusics />
                <CardMusics />
                <CardMusics />
                <CardMusics />
                <CardMusics />
            </div>
        );
    }
}