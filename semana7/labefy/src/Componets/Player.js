import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import Styled from 'styled-components'

const Footer = Styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;

    * {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`

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
                <Footer>
                    <ReactAudioPlayer
                        src={this.state.musicOnPlayer}
                        autoPlay
                        controls
                    />
                </Footer>
            </div>
        );
    }
}