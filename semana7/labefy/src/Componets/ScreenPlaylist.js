import React from 'react'
import CardMusic from './CardMusic'

export default class ScreenPlaylist extends React.Component{


    handleRemove = async music => {
        console.log('Clicou em remoever')
    }

    render(){
        const title = this.props.playlist.name || "Bem vindo"
        const id = this.props.playlist.id

        return(
            <div className='ScreenPlaylist'>
                <header>
                    <img src='https://picsum.photos/200' alt='imagem do album' />
                    <h1>{title}</h1>
                </header>   
                <CardMusic 
                    handleButton={this.handleRemove}
                    description={'Musica linda - Banda pra valer'}
                    messageButton={'Remover'}
                    url={"http://spoti4.future4.com.br/1.mp3"}
                />
            </div>
        );
    }
}