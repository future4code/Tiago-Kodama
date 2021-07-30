import React from 'react'
import CardMusic from './CardMusic';
import Axios from 'axios'
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
const Nav = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: .5rem;
    width: 100%;
    height: 2.5rem;
    background: #e8e8e8;

    select {
        margin-right: 1rem;
        background: transparent;
        border: none;
        font-weight: 700;
    }
`

const Main = Styled.main`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem 0;
`

export default class ScreenAllMusics extends React.Component{

    state = {
        allMusics: [],
        playlistId: ''
    }

    componentDidMount(){
        this.createMusics()
    }
    createMusics = async () => {
        try {
            const newList = [];

            for(let i=1; i<20; i++){
                const url = `https://www.boredapi.com/api/activity/`
                const res = await Axios.get(url)
                const data = res.data

                newList.push({
                    url: `http://spoti4.future4.com.br/${i}.mp3`,
                    name: data.activity,
                    album: data.type,
                    artist: data.type
                })
            }
    
            this.setState({ allMusics: newList })
        }
        catch(err){
            console.log('Erro ao criar musicas', err)
        }
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
                <Header>
                    <h1>All musics</h1>
                </Header>
                <Nav>
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
                </Nav>
                <Main>
                    {
                        this.state.allMusics.map(music => {
                            return (
                                <CardMusic 
                                    key={music.name}
                                    handleButton={this.handleAdd}
                                    messageButton={'Adicionar'}
                                    music={music}
                                    handleButtonPlay={this.props.setMusics}
                                />
                            );
                        })
                    }
                </Main>
            </div>
        );
    }
}