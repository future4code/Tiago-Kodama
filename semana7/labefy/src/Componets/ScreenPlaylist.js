import React from 'react'
import CardMusic from './CardMusic'
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

const Main = Styled.main`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 3rem 0;
`

export default class ScreenPlaylist extends React.Component{

    state = {
        musics: []
    }
    componentDidMount(){
        this.getMusics()
    }
    componentDidUpdate(prevProps, prevState){
        if(prevProps.playlist!==this.props.playlist){
            this.getMusics()
        }
    }
    getMusics = async () => {
        try {
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlist.id}/tracks`
            const headers = { Authorization: "tiago-kodama-lovelace" }
            const res = await Axios.get(url, {headers})

            this.setState({musics: res.data.result.tracks})

            if( res.status !== 200 )
                throw new Error('Erro ao buscar músicas')

            this.props.setMusics(res.data.result.tracks)

        } catch (error) {
            console.log(error)
        }
    }
    handleRemove = async music => {
        try {
            const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlist.id}/tracks/${music.id}`
            const headers = { Authorization: "tiago-kodama-lovelace" }

            const res = await Axios.delete(url, { headers })

            if( res.status !== 200 )
                throw new Error('Falha ao remover música')

            await this.getMusics()    
            alert("Música removida")   
            }
            catch(err){
                console.log(err)
            }
    }

    render(){
        const title = this.props.playlist.name

        return(
            <div className='ScreenPlaylist'>
                <Header>
                    <img src='https://picsum.photos/200' alt='imagem do album' />
                    <h1>{title}</h1>
                </Header>   
                <Main>
                    {
                        this.state.musics.map(music => {
                            return (
                                <CardMusic 
                                    key={music.id}
                                    handleButton={this.handleRemove}
                                    messageButton={'Remover'}
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