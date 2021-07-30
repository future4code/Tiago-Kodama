import React from 'react'
import ReactAudioPlayer from 'react-audio-player';

export default class Player extends React.Component{

    state = {
        indexTrack: 0,
        musicOnPlayer: "http://spoti4.future4.com.br/1.mp3"
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevProps.musics !== this.props.musics){
 
            if(this.props.musics.length)
                this.setState({musicOnPlayer: this.props.musics[0].url})
            else
                this.setState({musicOnPlayer: "http://spoti4.future4.com.br/1.mp3"})
        }
    }

    render(){
        return(
            <div className='Player'>
                <p>{this.state.musicOnPlayer}</p>
                <ReactAudioPlayer
                    src={this.state.musicOnPlayer}
                    autoPlay
                    controls
                />
            </div>
        );
    }
}