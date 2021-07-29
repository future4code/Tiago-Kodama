import React from 'react'
import CardMusic from './CardMusic';

export default class ScreenAllMusics extends React.Component{

    state = {
        allMusics: []
    }

    componentDidMount(){

        const newList = [];

        for(let i=1; i<100; i++){
            newList.push({
                id: i,
                url: `http://spoti4.future4.com.br/${i}.mp3`,
                name: `Musica ${i}`,
                album: `Album ${i}`
            })
        }

        this.setState({ allMusics: newList })
    }

    handleAdd = async music => {
        console.log('Add musica')
    }

    render(){
        return (
            <div className='ScreenAllMusics'>
                <p>All musics</p>
                <div>
                    {
                        this.state.allMusics.map(music => {
                            return (
                                <CardMusic 
                                    key={music.id}
                                    handleButton={this.handleAdd}
                                    description={music.name}
                                    messageButton={'Adicionar'}
                                    url={music.url}
                                />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}