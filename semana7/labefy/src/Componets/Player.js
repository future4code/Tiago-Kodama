import React from 'react'

export default class Player extends React.Component{

    state = {
        indexTrack: 0
    }

    render(){
        const urlMusic = this.props.musics[this.state.indexTrack] || "http://spoti4.future4.com.br/1.mp3"

        return(
            <div className='Player'>
                <audio controls="controls">
                    <source src={urlMusic} type="audio/mp3" />
                    seu navegador não suporta HTML5
                </audio>
            </div>
        );
    }
}