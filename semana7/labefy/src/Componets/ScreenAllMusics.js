import React from 'react'
import CardMusic from './CardMusic';
import Axios from 'axios'

export default class ScreenAllMusics extends React.Component{

    state = {
        allMusics: [],
        playlistId: ''
    }

    componentDidMount(){

        const newList = [];

        for(let i=1; i<100; i++){
            newList.push({
                url: `http://spoti4.future4.com.br/${i}.mp3`,
                name: `Musica ${i}`,
                album: `Album ${i}`,
                artist: `Artist ${i}`
            })
        }

        this.setState({ allMusics: newList })
    }

    handleOnChangeSelect = async e => {
        await this.setState({ playlistId: e.target.value })
    }

    handleAdd = async music => {

        if( !this.state.playlistId )
            alert('Nenhuma playlist selecionada')
        else {
            try {
                const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistId}/tracks`
                const headers = { Authorization: "tiago-kodama-lovelace" }
                const body = {
                    "name": music.name, 
                    "artist": music.artist,
                    "url": music.url
                }
                const res = await Axios.post(url, body, { headers })

                if( res.status === 200 )
                    alert ("Música adicionada")
                }
                catch(err){
                    console.log(err)
                }
        }
    }

    render(){
        return (
            <div className='ScreenAllMusics'>
                <p>All musics</p>
                <select onChange={this.handleOnChangeSelect}>
                    {
                        this.props.playlists.map(playlist => {
                            return (
                                <option value={playlist.id} key={playlist.id}>
                                    {playlist.name}
                                </option>
                            );
                        })
                    }
                </select>
                <div>
                    {
                        this.state.allMusics.map(music => {
                            return (
                                <CardMusic 
                                    key={music.name}
                                    handleButton={this.handleAdd}
                                    messageButton={'Adicionar'}
                                    music={music}
                                />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}